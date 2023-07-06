/* eslint-disable github/array-foreach */
import {TParams} from './load-calc-params'
import {TDataTables} from './load-calc-tables'
import {TUnitSystem} from './main'

export type UnitMap = Record<string, string | string[]>

export function getParamUnitsMap(params: TParams, dataTables: TDataTables, unitSystem: TUnitSystem): UnitMap {
  const dtUnits = dataTables.reduce((acc, t) => {
    if (t.keywords) {
      t.keywords.forEach(kw => {
        if (kw.units) {
          acc[kw.keyword] = kw.units[unitSystem]
        }
      })
    }
    return acc
  }, {} as UnitMap)
  return params.reduce((acc: UnitMap, p) => {
    if (p.units) {
      acc[p.keyword] = p.units[unitSystem]
    }
    return acc
  }, dtUnits)
}
