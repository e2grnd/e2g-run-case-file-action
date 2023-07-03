import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TUnitSystem} from './main'

interface Param {
  keyword: string
  valueType: number
  initializer?: string
  type: string
  fieldName?: string
  default?: unknown
  tooltip?: string
  label?: string
  min?: number
  units?: Record<TUnitSystem, string>
}
export type TParams = Param[]

async function crappyConvertToCommonJSImports(filePath: string): Promise<string> {
  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const nextFileContents = fileContents.replace(/^export default \[/, 'module.exports = [')
  await fs.promises.writeFile(filePath, nextFileContents, 'utf-8')
  return filePath
}
export async function loadCalcParams(): Promise<TParams> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const paramsPath = path.resolve(calcDir, 'params.js')
  core.debug(`Params file path: ${paramsPath}`)
  const exists = fs.existsSync(paramsPath)
  if (!exists) {
    throw new Error('params.js file not found.')
  }
  await crappyConvertToCommonJSImports(paramsPath)
  const params: TParams = await import(paramsPath)
  return params
}
