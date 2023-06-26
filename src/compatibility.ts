/* eslint-disable github/array-foreach */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {fromJS} from 'immutable'
import find from 'lodash.find'

export const requestMetadata = (options: {request: any; unitSystem: any; reportHeader: any; userAgent: any; version: any; timeStamp: any; externalError: any}): any => {
  const {request, version, unitSystem, userAgent, reportHeader, timeStamp, externalError} = options
  let requestCopy = fromJS(request)
  requestCopy = requestCopy
    .setIn(['metadata', 'params', 0, 'name'], 'version')
    .setIn(['metadata', 'params', 0, 'value'], version || '')
    .setIn(['metadata', 'params', 0, 'valueType'], 0)
    .setIn(['metadata', 'params', 1, 'name'], 'unitSystem')
    .setIn(['metadata', 'params', 1, 'value'], unitSystem || '')
    .setIn(['metadata', 'params', 1, 'valueType'], 0)
    .setIn(['metadata', 'params', 2, 'name'], 'timeStamp')
    .setIn(['metadata', 'params', 2, 'value'], timeStamp || '')
    .setIn(['metadata', 'params', 2, 'valueType'], 0)
    .setIn(['metadata', 'params', 3, 'name'], 'userAgent')
    .setIn(['metadata', 'params', 3, 'value'], userAgent || '')
    .setIn(['metadata', 'params', 3, 'valueType'], 0)
    .setIn(['metadata', 'params', 4, 'name'], 'schemaVersion')
    .setIn(['metadata', 'params', 4, 'value'], '1')
    .setIn(['metadata', 'params', 4, 'valueType'], 0)
    .setIn(['metadata', 'params', 5, 'name'], 'reportHeader')
    .setIn(['metadata', 'params', 5, 'value'], reportHeader || '')
    .setIn(['metadata', 'params', 5, 'valueType'], 0)
  if (typeof externalError !== 'undefined') {
    requestCopy = requestCopy
      .setIn(['metadata', 'params', 6, 'name'], 'ErrorMessage')
      .setIn(['metadata', 'params', 6, 'value'], externalError || '')
      .setIn(['metadata', 'params', 6, 'valueType'], 0)
  }
  return requestCopy.toJS()
}

export const normalizePayload = (payload: unknown): unknown => {
  let request
  let unitSystem
  let calculatorName
  let reportHeader
  let userAgent
  let timeStamp
  let version
  let externalError
  const payloadCopy = fromJS(payload).toJS()
  if (typeof payloadCopy.fields !== 'undefined' && typeof payloadCopy.activeCalculator !== 'undefined') {
    // handle original save case/example format
    ;({request} = payloadCopy)
    unitSystem = payloadCopy.activeUnitSystem
    calculatorName = payloadCopy.activeCalculator
    ;({timeStamp} = payloadCopy)
    ;({version} = payloadCopy)
    reportHeader = typeof payloadCopy.report !== 'undefined' ? payloadCopy.report.header : undefined
  } else if (typeof payloadCopy.fields !== 'undefined' && typeof payloadCopy.activeCalculator === 'undefined') {
    // handle original case history format
    ;({request} = payloadCopy)
    unitSystem = payloadCopy.activeUnitSystem
    ;({calculatorName} = payloadCopy.request.metadata)
    ;({timeStamp} = payloadCopy)
    ;({version} = payloadCopy)
  } else if (typeof payloadCopy.workflow !== 'undefined') {
    // handle original bug report case format
    ;({request} = payloadCopy.workflow)
    unitSystem = payloadCopy.workflow.activeUnitSystem
    calculatorName = payloadCopy.workflow.activeCalculator
    ;({timeStamp} = payloadCopy)
    ;({version} = payloadCopy)
  } else if (typeof payloadCopy.metadata.caseVersion !== 'undefined') {
    // handle caseVersion format
    request = payloadCopy
    ;({unitSystem} = payloadCopy.metadata)
    ;({calculatorName} = payloadCopy.metadata)
    ;({userAgent} = payloadCopy.metadata)
    ;({timeStamp} = payloadCopy.metadata)
    ;({version} = payloadCopy.metadata)
    reportHeader = typeof payloadCopy.metadata.report !== 'undefined' ? payloadCopy.metadata.report.header : undefined
  } else if (typeof payloadCopy.metadata.externalError !== 'undefined') {
    request = payloadCopy
    ;({unitSystem} = payloadCopy.metadata)
    ;({calculatorName} = payloadCopy.metadata)
    ;({userAgent} = payloadCopy.metadata)
    ;({timeStamp} = payloadCopy.metadata)
    ;({version} = payloadCopy.metadata)
    reportHeader = typeof payloadCopy.metadata.report !== 'undefined' ? payloadCopy.metadata.report.header : undefined
    ;({externalError} = payloadCopy.metadata)
  } else if (typeof payloadCopy.metadata.unitSystem !== 'undefined') {
    request = payloadCopy
    ;({unitSystem} = payloadCopy.metadata)
    ;({calculatorName} = payloadCopy.metadata)
    ;({userAgent} = payloadCopy.metadata)
    ;({timeStamp} = payloadCopy.metadata)
    ;({version} = payloadCopy.metadata)
    reportHeader = typeof payloadCopy.metadata.report !== 'undefined' ? payloadCopy.metadata.report.header : undefined
  } else {
    request = payloadCopy
    let result = find(payloadCopy.metadata.params, ['name', 'unitSystem'])
    if (typeof result !== 'undefined') {
      unitSystem = result.value
    }
    ;({calculatorName} = payloadCopy.metadata)
    result = find(payloadCopy.metadata.params, ['name', 'reportHeader'])
    if (typeof result !== 'undefined') {
      reportHeader = result.value
    }
    result = find(payloadCopy.metadata.params, ['name', 'userAgent'])
    if (typeof result !== 'undefined') {
      userAgent = result.value
    }
    result = find(payloadCopy.metadata.params, ['name', 'timeStamp'])
    if (typeof result !== 'undefined') {
      timeStamp = result.value
    }
    result = find(payloadCopy.metadata.params, ['name', 'version'])
    if (typeof result !== 'undefined') {
      version = result.value
    }
  }
  let newRequest = {}
  if (typeof request.data !== 'undefined') {
    newRequest = {
      metadata: {
        calculatorName,
        jobId: request.metadata.jobId,
        userId: request.metadata.userId,
        jobName: request.metadata.jobName,
        params: []
      },
      data: request.data
    }
  } else {
    newRequest = {
      metadata: {
        calculatorName,
        jobId: request.metadata.jobId,
        userId: request.metadata.userId,
        jobName: request.metadata.jobName,
        params: []
      }
    }
  }
  return requestMetadata({
    request: newRequest,
    unitSystem,
    reportHeader,
    userAgent,
    version,
    timeStamp,
    externalError
  })
}

const transformRequestData = (data: {tables: any; params: any; keywordGroups: any[]}, transformer: {(d: any[]): any[]; (arg0: any): any}): any => {
  const transformedTables = transformer(data.tables)
  const transformedParams = transformer(data.params)
  const transformedKeywordGroups = data.keywordGroups.map(kg => {
    const transformedKGTables = transformer(kg.tables)
    const transformedKGParams = transformer(kg.params)
    return {
      ...kg,
      params: transformedKGParams,
      tables: transformedKGTables
    }
  })
  return {
    keywordGroups: transformedKeywordGroups,
    params: transformedParams,
    tables: transformedTables
  }
}

export const fixNumericTypes = (calcCase: any): any => {
  const data = transformRequestData(calcCase.data, (d: any[]) => {
    if (Array.isArray(d)) {
      d.forEach(o => {
        const param = o
        if (o.valueType && o.valueType === 1) {
          param.value = typeof param.value === 'string' ? (Number.isNaN(parseInt(param.value, 10)) ? undefined : parseInt(param.value, 10)) : param.value
        }
        if (param.valueType && param.valueType === 2) {
          param.value = typeof param.value === 'string' ? (Number.isNaN(parseFloat(param.value)) ? undefined : parseFloat(param.value)) : param.value
        }
      })
    }
    return d
  })
  return {
    ...calcCase,
    data
  }
}

export const requiresConversion = (calcCase: {metadata: {params: any}}): any => {
  const version = find(calcCase.metadata.params, ['name', 'version']).value
  if (typeof version !== 'undefined' && parseInt(version.split('.')[2], 10) >= 45) {
    return false
  }
  return true
}

export const convertCase = (calcCase: any): any => fixNumericTypes(calcCase)
