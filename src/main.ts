import * as core from '@actions/core'
import {loadCalcDescriptor} from './load-calc-descriptor'
import {loadCalcExamples} from './load-calc-examples'
import {submitExample} from './submit-example'
import {loadCalcParams} from './load-calc-params'
import {loadCalcDataTables} from './load-calc-tables'
import {getParamUnitsMap} from './get-param-units-map'

export type TUnitSystem = 'Metric' | 'USCustomary'
export type TExampleItem = {
  title: string
  fileName: string
}
export type TExampleGroup = {
  group: string
  members: TExampleItem[]
}

export type TExamplesFile = Record<TUnitSystem, (TExampleItem | TExampleGroup)[]>

function isExampleGroup(x: TExampleItem | TExampleGroup): x is TExampleGroup {
  return typeof (x as TExampleGroup).members !== 'undefined' && Array.isArray((x as TExampleGroup).members)
}

export const POLLING_INTERVAL = 2000

async function run(): Promise<void> {
  try {
    const descriptor = await loadCalcDescriptor()
    core.debug(`Calculator Descriptor: \n${JSON.stringify(descriptor, undefined, '  ')}`)
    const calculatorUnitSystem = descriptor.unitSystem
    const examples = await loadCalcExamples()
    // core.debug(`Examples: \n${JSON.stringify(examples, undefined, '  ')}`)
    const params = await loadCalcParams()
    // core.debug(`Params: \n${JSON.stringify(params, undefined, '  ')}`)

    const dataTables = await loadCalcDataTables()
    core.debug(`dataTables: ${JSON.stringify(dataTables, undefined, '  ')}`)

    const calculatorUnitsMap = getParamUnitsMap(params, dataTables, calculatorUnitSystem)
    core.debug(`calculatorUnitsMap: ${JSON.stringify(calculatorUnitsMap, undefined, '  ')}`)

    await Promise.all(
      Object.entries(examples).flatMap(([_unitSystem, examplesByUnitSystem]) => {
        core.debug(`examplesByUnitSystem: ${JSON.stringify(examplesByUnitSystem)}`)
        const unitSystem = _unitSystem as TUnitSystem
        const exampleUnitsMap = getParamUnitsMap(params, dataTables, unitSystem)
        core.debug(`exampleUnitsMap: ${JSON.stringify(exampleUnitsMap, undefined, '  ')}`)
        return examplesByUnitSystem.map(async ex => {
          if (isExampleGroup(ex)) {
            return core.group(`Example group "${ex.group}" (${unitSystem})`, async () => {
              return Promise.all(
                ex.members.map(async member => {
                  return core.group(`Submitting ${unitSystem} example "${member.title}" [${member.fileName}]`, async () => submitExample(member, unitSystem, calculatorUnitSystem, exampleUnitsMap, calculatorUnitsMap))
                })
              )
            })
          } else {
            return core.group(`Submitting ${unitSystem} example "${ex.title}" [${ex.fileName}]`, async () => submitExample(ex, unitSystem, calculatorUnitSystem, exampleUnitsMap, calculatorUnitsMap))
          }
        })
      })
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
