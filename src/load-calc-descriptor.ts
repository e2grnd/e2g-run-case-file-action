import * as core from '@actions/core'
import fs from 'fs'
import path from 'path'
import {TUnitSystem} from './main'

export type TRawCalculatorDescriptor = {
  calcId: string
  type: 'sage' | 'python'
  unitSystem: TUnitSystem
  freeform?: boolean
}
export async function loadCalcDescriptor(): Promise<TRawCalculatorDescriptor> {
  const calcDir: string = core.getInput('calc-dir', {required: true})
  const descriptorPath = path.resolve(calcDir, 'descriptor.json')
  core.debug(`descriptor file path: ${descriptorPath}`)
  const exists = fs.existsSync(descriptorPath)
  if (!exists) {
    throw new Error(`Descriptor not found for calculator at ${calcDir}`)
  }
  const descriptorStr = fs.readFileSync(descriptorPath, 'utf-8')
  const descriptor: TRawCalculatorDescriptor = JSON.parse(descriptorStr)
  return descriptor
}
