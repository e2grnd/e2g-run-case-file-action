import {getParamUnitsMap, UnitMap} from './get-param-units-map'
import paramsBPCRaw from './fixtures/bpc/params'
import dataTablesBPC from './fixtures/bpc/dataTables'

const paramsBPC = paramsBPCRaw as any

describe('getParamUnitsMap', () => {
  const result = getParamUnitsMap(paramsBPC, dataTablesBPC as any, 'Metric')
  it('contains a param with units', () => {
    expect(result.outerDiameter).toEqual('mm')
  })
  it('does not contain params without units', () => {
    expect(result).not.toHaveProperty('InWhichAnalysis')
  })

  it('returns the unit map correctly with multiple units in datatables', () => {
    expect(result.mainAssessmentTable).toBeInstanceOf(Array)
    expect(result.mainAssessmentTable).toHaveLength(3)
  })

  it('returns an empty unit map when params and dataTables are empty', () => {
    const emptyParams: any[] = []
    const emptyDataTables: any[] = []
    const unitSystem = 'Metric'

    const expected: UnitMap = {}

    const emptyResult = getParamUnitsMap(emptyParams, emptyDataTables, unitSystem)
    expect(emptyResult).toEqual(expected)
  })
})
