import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TExamplesFile} from './main'
import {clobberTransformToCommonJS} from './clobber-transform-file'

export async function loadCalcExamples(): Promise<TExamplesFile> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const examplesPath = path.resolve(calcDir, 'examples.js')
  core.debug(`Examples file path: ${examplesPath}`)
  const exists = fs.existsSync(examplesPath)
  if (!exists) {
    throw new Error('Examples.js file not found.')
  }
  await clobberTransformToCommonJS(examplesPath)
  const examples = await import(examplesPath)
  return examples.default as TExamplesFile
}
