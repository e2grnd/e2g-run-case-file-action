import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TExamplesFile} from './main'

async function crappyConvertToCommonJSImports(filePath: string): Promise<string> {
  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const nextFileContents = fileContents.replace(/^export default \{/, 'module.exports = {')
  await fs.promises.writeFile(filePath, nextFileContents, 'utf-8')
  return filePath
}
export async function loadCalcExamples(): Promise<TExamplesFile> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const examplesPath = path.resolve(calcDir, 'examples.js')
  core.debug(`Examples file path: ${examplesPath}`)
  const exists = fs.existsSync(examplesPath)
  if (!exists) {
    throw new Error('Examples.js file not found.')
  }
  await crappyConvertToCommonJSImports(examplesPath)
  const examples: TExamplesFile = await import(examplesPath)
  return examples
}
