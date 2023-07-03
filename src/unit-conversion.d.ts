/* eslint-disable @typescript-eslint/no-explicit-any */
declare type InputData = {
  params: any
  tables: any
  keywordGroups: any
}

export const convertToCalculatorUnits: <T = InputData>(inputData: T, currentUnits: Record<string, any>, calculatorUnits: Record<string, any>) => T
