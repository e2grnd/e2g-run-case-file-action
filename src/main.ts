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
type TExamplesFile = {
  Metric: TExampleItem[]
  USCustomary: TExampleItem[]
}

async function submitExampleItem(ex: TExampleItem): Promise<void> {
  core.debug(`Starting submission for "${ex.title}" for file "${ex.fileName}"`)
  const baseUrl = core.getInput('base-url')
  if (!baseUrl) {
    throw new Error('baseUrl not provided')
  }
  const authSecret = core.getInput('auth-secret')

  const calcDir: string = core.getInput('calc-dir', {required: true})
  const calcDirName = path.dirname(calcDir)
  core.debug(`calcDirName: ${calcDirName}`)
  const basePath = core.getInput('static-dir')
  const filePath = path.join(basePath, calcDirName, ex.fileName)

  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const caseParsed = JSON.parse(fileContents)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normalized = normalizePayload(caseParsed) as any
  core.debug(`Normalized payload: ${JSON.stringify(normalized)}`)
  const protoAsJSON = protoPayload(normalized)
  core.debug(`Proto as JSON: ${JSON.stringify(protoAsJSON)}`)
  const uri = `https://${baseUrl}/api/job/create`
  core.debug(`Submitting to URI: "${uri}"`)
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'x-internal-auth-secret': authSecret,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(protoAsJSON)
  })
  const text = await response.text()
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText} ${text}`)
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
    const examples: TExamplesFile = await import(examplesPath)
    core.debug(`Examples: \n${JSON.stringify(examples, undefined, '  ')}`)

    await Promise.all(
      [...examples.USCustomary, ...examples.Metric].map(submitExampleItem)
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
