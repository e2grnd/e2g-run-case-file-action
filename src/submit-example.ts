/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core'
import fetch from 'node-fetch'
import fs from 'fs'
import {normalizePayload} from './compatibility'
import {protoPayload} from './serialize'
import {convertToCalculatorUnits} from './unit-conversion'
import path from 'path'
import {POLLING_INTERVAL, TExampleItem, TUnitSystem} from './main'

enum JobStatus {
  PENDING = 0,
  COMPLETE = 1,
  ERROR = 2,
  RUNNING = 3,
  UNKNOWN = 4
}

type TJobStatusResponse = {status?: {state: number}}

type TParamUnitMap = Record<string, string>

export async function submitExample(ex: TExampleItem, exampleUnitSystem: TUnitSystem, calculatorUnitSystem: TUnitSystem, exampleUnitMap: TParamUnitMap, calculatorUnitMap: TParamUnitMap): Promise<void> {
  core.info(`Starting submission for "${ex.title}" for file "${ex.fileName}" (${exampleUnitSystem})`)
  const baseUrl = core.getInput('base-url')
  if (!baseUrl) {
    throw new Error('baseUrl not provided')
  }
  const authSecret = core.getInput('auth-secret')

  const calcDir: string = core.getInput('calc-dir', {required: true})
  const calcDirName = path.basename(calcDir)
  core.info(`calcDirName: ${calcDirName}`)
  const basePath = core.getInput('static-dir')
  const filePath = path.join(basePath, 'examples', calcDirName, ex.fileName)
  if (!fs.existsSync(filePath)) {
    core.error(`Example file for calculator ${calcDirName} not found: ${ex.fileName}`)
    return
  }

  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const caseParsed = JSON.parse(fileContents)

  if (exampleUnitSystem !== calculatorUnitSystem) {
    core.debug(`Example and calculator unit system do not match. Conversion is required.`)
    caseParsed.data = convertToCalculatorUnits(caseParsed.data, exampleUnitMap, calculatorUnitMap)
  }
  const normalized = normalizePayload(caseParsed) as any

  try {
    normalized.metadata.jobName = `[${exampleUnitSystem}] ${ex.title}`
  } catch (e) {
    core.warning(e as Error)
  }

  // core.debug(`Normalized payload: ${JSON.stringify(normalized)}`)
  const protoAsJSON = protoPayload(normalized)
  // core.debug(`Proto as JSON: ${JSON.stringify(protoAsJSON)}`)
  const uri = `https://${baseUrl}/api/job/create`
  core.info(`Submitting to URI: "${uri}"`)
  core.debug(`Sending request to ${uri}:\n ${JSON.stringify(protoAsJSON, undefined, '  ')}`)
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'x-internal-auth-secret': authSecret,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(protoAsJSON)
  })
  const json = (await response.json()) as {metadata?: {jobId?: string}}
  if (!response.ok) throw new Error(`unexpected response ${response.statusText} ${JSON.stringify(json)}`)
  /*
  {
    "metadata": {
        "jobId": "iiUfmke2lKwESDz3JRvqGg",
        "status": "OK"
    }
  }
  */
  const jobId = json.metadata?.jobId
  if (!jobId) {
    throw new Error('Did not receive job ID from job create')
  }
  core.info(`Job ${jobId} created successfully. Beggining status polling.`)
  const status = await pollForJobCompletion(jobId)
  if (status === JobStatus.ERROR) {
    core.setFailed(`Job ${jobId} "${ex.fileName}" failed`)
    return
  }
  core.info(`Job ${jobId} (${calcDirName}) - "${ex.fileName}" finished with status ${status}. 👋`)
}

async function pollForJobCompletion(jobId: string): Promise<JobStatus> {
  const baseUrl = core.getInput('base-url')
  if (!baseUrl) {
    throw new Error('baseUrl not provided')
  }
  const uri = `https://${baseUrl}/api/job/status?job_id=${jobId}`
  core.info(`Polling for job status at URI: "${uri}"`)
  const timeoutSeconds = parseInt(core.getInput('timeout'), 10)
  if (isNaN(timeoutSeconds)) {
    throw new Error('Invalid timeout provided')
  }

  const maxRetries = timeoutSeconds / (POLLING_INTERVAL / 1000)
  return await getStatus(jobId, uri, maxRetries, r => {
    core.debug(`Status state: ${r.status?.state} (type: ${typeof r.status?.state})`)
    if (r.status?.state === JobStatus.COMPLETE || r.status?.state === JobStatus.ERROR) {
      return true
    }
    return false
  })
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

async function getStatus(jobId: string, uri: string, retriesRemaining: number, evaluateResp: (jobStatusResponse: TJobStatusResponse) => boolean): Promise<JobStatus> {
  await sleep(POLLING_INTERVAL)
  core.debug(`Getting job status. Retries remaining: ${retriesRemaining}`)
  const authSecret = core.getInput('auth-secret')
  const response = await fetch(uri, {
    headers: {
      'x-internal-auth-secret': authSecret
    }
  })
  const json = (await response.json()) as TJobStatusResponse
  if (!response.ok) throw new Error(`unexpected response ${response.statusText} ${JSON.stringify(json)}`)
  /*
    {
      "jobId": "iiUfmke2lKwESDz3JRvqGg",
      "status": {
          "state": 1
      }
    }
  */
  if (!evaluateResp(json)) {
    if (retriesRemaining > 0) {
      return getStatus(jobId, uri, retriesRemaining - 1, evaluateResp)
    } else {
      throw new Error(`Timeout exceeded (${core.getInput('timeout')}s)`)
    }
  }
  return json.status?.state || JobStatus.UNKNOWN
}
