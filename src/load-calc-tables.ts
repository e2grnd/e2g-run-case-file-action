import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TUnitSystem} from './main'
import {clobberTransformToCommonJS} from './clobber-transform-file'

export type KWItem = {
  keyword: string
  units?: Record<TUnitSystem, string[]>
}
interface DataTableItem {
  name: string
  keywords?: KWItem[]
}
export type TDataTables = DataTableItem[]

export async function loadCalcDataTables(): Promise<TDataTables> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const filePath = path.resolve(calcDir, 'dataTables.js')
  core.debug(`dataTables file path: ${filePath}`)
  const exists = fs.existsSync(filePath)
  if (!exists) {
    return []
  }
  await clobberTransformToCommonJS(filePath)
  const raw = await import(filePath)
  // const params: TParams = Object.values(paramsRaw) as TParams
  return raw.default as TDataTables
}
