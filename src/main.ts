import * as core from '@actions/core'
import fetch from 'node-fetch'
import * as fsAll from 'fs'
import {normalizePayload} from './compatibility'

async function run(): Promise<void> {
  try {
    const filePath: string = core.getInput('file', {required: true})
    const baseUrl = core.getInput('base-url')
    if (!baseUrl) {
      throw new Error('baseUrl not provided')
    }
    const authSecret = core.getInput('auth-secret')

    const fileContents = await fsAll.promises.readFile(filePath, 'utf-8')
    const caseParsed = JSON.parse(fileContents)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const normalized = normalizePayload(caseParsed) as any
    core.debug(`Normalized payload: ${JSON.stringify(normalized)}`)
    const uri = `https://${baseUrl}/api/job/create`
    core.debug(`Submitting to URI: "${uri}"`)
    const response = await fetch(uri, {
      method: 'post',
      headers: {
        'x-internal-auth-secret': authSecret,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(normalized)
    })
    if (!response.ok)
      throw new Error(`unexpected response ${response.statusText}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
