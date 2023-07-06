import {getParamUnitsMap, UnitMap} from './get-param-units-map'
import paramsBPCRaw from './fixtures/bpc/params'
import dataTablesBPC from './fixtures/bpc/dataTables'
import paramsCharpyRaw from './fixtures/charpy/params'
import dataTablesCharpy from './fixtures/charpy/dataTables'

const paramsBPC = paramsBPCRaw as any
const paramsCharpy = paramsCharpyRaw as any

describe('getParamUnitsMap', () => {
  it('returns the unit map correctly', () => {
    const unitSystem = 'Metric'

    const result = getParamUnitsMap(paramsBPC, dataTablesBPC as any, unitSystem)
    expect(result).toMatchSnapshot()
  })

  it('returns the unit map correctly with multiple units in datatables', () => {
    const unitSystem = 'Metric'

    const result = getParamUnitsMap(paramsCharpy, dataTablesCharpy as any, unitSystem)
    expect(result).toMatchSnapshot()
  })

  it('returns an empty unit map when params and dataTables are empty', () => {
    const emptyParams: any[] = []
    const emptyDataTables: any[] = []
    const unitSystem = 'Metric'

    const expected: UnitMap = {}

    const result = getParamUnitsMap(emptyParams, emptyDataTables, unitSystem)
    expect(result).toEqual(expected)
  })
})
