import * as core from '@actions/core'
import fetch from 'node-fetch'
import fs from 'fs'
import {normalizePayload} from './compatibility'
import {protoPayload} from './serialize'
import path from 'path'

type TExampleItem = {
  title: string
  fileName: string
}
type TExampleGroup = {
  group: string
  members: TExampleItem[]
}
type TExamplesFile = {
  Metric: (TExampleItem | TExampleGroup)[]
  USCustomary: (TExampleItem | TExampleGroup)[]
}

function isExampleGroup(x: TExampleItem | TExampleGroup): x is TExampleGroup {
  return typeof (x as TExampleGroup).members !== 'undefined' && Array.isArray((x as TExampleGroup).members)
}

async function submitExampleItem(ex: TExampleItem): Promise<void> {
  core.debug(`Starting submission for "${ex.title}" for file "${ex.fileName}"`)
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normalized = normalizePayload(caseParsed) as any
  core.debug(`Normalized payload: ${JSON.stringify(normalized)}`)
  const protoAsJSON = protoPayload(normalized)
  core.debug(`Proto as JSON: ${JSON.stringify(protoAsJSON)}`)
  const uri = `https://${baseUrl}/api/job/create`
  core.info(`Submitting to URI: "${uri}"`)
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'x-internal-auth-secret': authSecret,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(protoAsJSON)
  })
  const text = await response.text()
  if (!response.ok) throw new Error(`unexpected response ${response.statusText} ${text}`)
  const json = (await response.json()) as {metadata?: {jobId?: string}}
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
    core.setFailed('Job failed')
    return
  }
  core.info(`Job finished with status ${status}. 👋`)
}

enum JobStatus {
  PENDING = 0,
  COMPLETE = 1,
  ERROR = 2,
  RUNNING = 3,
  UNKNOWN = 4
}

async function pollForJobCompletion(jobId: string): Promise<JobStatus> {
  const baseUrl = core.getInput('base-url')
  if (!baseUrl) {
    throw new Error('baseUrl not provided')
  }
  const uri = `https://${baseUrl}/api/job/status?job_id=${jobId}`
  core.info(`Polling for job status at URI: "${uri}"`)
  const maxRetries = 20
  return await getStatus(jobId, uri, maxRetries, r => {
    core.debug(`Status state: ${r.status.state} (type: ${typeof r.status.state})`)
    if (r.status.state === JobStatus.COMPLETE || r.status.state === JobStatus.ERROR) {
      return false
    }
    return true
  })
}

type TJobStatusResponse = {status: {state: number}}

async function getStatus(jobId: string, uri: string, retriesRemaining: number, evaluateResp: (jobStatusResponse: TJobStatusResponse) => boolean): Promise<JobStatus> {
  core.debug(`Getting job status. Retries remaining: ${retriesRemaining}`)
  const authSecret = core.getInput('auth-secret')
  const response = await fetch(uri, {
    headers: {
      'x-internal-auth-secret': authSecret
    }
  })
  const json = (await response.json()) as TJobStatusResponse
  const text = await response.text()
  if (!response.ok) throw new Error(`unexpected response ${response.statusText} ${text}`)
  /*
    {
      "jobId": "iiUfmke2lKwESDz3JRvqGg",
      "status": {
          "state": 1
      }
    }
  */
  if (evaluateResp(json) && retriesRemaining > 0) {
    return getStatus(jobId, uri, retriesRemaining--, evaluateResp)
  }
  return json.status.state
}

async function crappyConvertToCommonJSImports(filePath: string): Promise<string> {
  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const nextFileContents = fileContents.replace(/^export default \{/, 'module.exports = {')
  await fs.promises.writeFile(filePath, nextFileContents, 'utf-8')
  return filePath
}

async function run(): Promise<void> {
  try {
    const calcDir: string = core.getInput('calc-dir', {required: true})
    const examplesPath = path.resolve(calcDir, 'examples.js')
    core.debug(`examples file path: ${examplesPath}`)
    const exists = fs.existsSync(examplesPath)
    if (!exists) {
      throw new Error('Examples.js file not found.')
    }
    await crappyConvertToCommonJSImports(examplesPath)
    const examples: TExamplesFile = await import(examplesPath)
    core.debug(`Examples: \n${JSON.stringify(examples, undefined, '  ')}`)

    await Promise.all(
      [...examples.USCustomary, ...examples.Metric].map(async ex => {
        if (isExampleGroup(ex)) {
          core.group(`Example group "${ex.group}"`, async () => {
            return Promise.all(
              ex.members.map(async member => {
                return core.group(`Submitting example "${member.title}" [${member.fileName}]`, async () => submitExampleItem(member))
              })
            )
          })
        } else {
          return core.group(`Submitting example "${ex.title}" [${ex.fileName}]`, async () => submitExampleItem(ex))
        }
      })
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
