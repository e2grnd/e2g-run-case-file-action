import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TUnitSystem} from './main'
import swc from '@swc/core'

export type KWItem = {
  keyword: string
  units?: Record<TUnitSystem, string[]>
}
interface DataTableItem {
  name: string
  keywords?: KWItem[]
}
export type TDataTables = DataTableItem[]

export async function crappyConvertToCommonJSImports(filePath: string): Promise<string> {
  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  // const nextFileContents = fileContents.replace(/export default \[/, 'module.exports = [')
  const nextFileContents = await swc
    .transform(fileContents, {
      filename: path.basename(filePath)
    })
    // eslint-disable-next-line github/no-then
    .then(output => {
      return output.code
    })
  core.info(`nextFileContents: ${nextFileContents}`)
  await fs.promises.writeFile(filePath, nextFileContents, 'utf-8')
  return filePath
}
export async function loadCalcDataTables(): Promise<TDataTables> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const filePath = path.resolve(calcDir, 'dataTables.js')
  core.debug(`dataTables file path: ${filePath}`)
  const exists = fs.existsSync(filePath)
  if (!exists) {
    return []
  }
  await crappyConvertToCommonJSImports(filePath)
  const raw = await import(filePath)
  // const params: TParams = Object.values(paramsRaw) as TParams
  return raw.default as TDataTables
}
