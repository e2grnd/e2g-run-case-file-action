import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TUnitSystem} from './main'
import {clobberTransformToCommonJS} from './clobber-transform-file'

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

export async function loadCalcParams(): Promise<TParams> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const paramsPath = path.resolve(calcDir, 'params.js')
  core.debug(`Params file path: ${paramsPath}`)
  const exists = fs.existsSync(paramsPath)
  if (!exists) {
    throw new Error('params.js file not found.')
  }
  await clobberTransformToCommonJS(paramsPath)
  // for some reason I can't just export an array. They come out as individual export members
  const paramsRaw = await import(paramsPath)
  // const params: TParams = Object.values(paramsRaw) as TParams
  return paramsRaw.default as TParams
}
