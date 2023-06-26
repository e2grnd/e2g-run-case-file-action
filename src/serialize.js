/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// @ts-nocheck
import filter from 'lodash/filter'
import forOwn from 'lodash/forOwn'
import isEmpty from 'lodash/isEmpty'

export const isEmptyParam = param => {
  switch (typeof param.value) {
    case 'string':
      if (param.value === '') {
        return true
      }
      return false
    case 'object':
      if (isEmpty(param.value)) {
        return true
      }
      return false
    default:
      return false
  }
}

const revProtoPayloadSwitch = param => {
  switch (param.valueType) {
    case undefined:
    case 0:
      if (param.isArray) {
        return {
          name: param.name,
          value: param.valuesString,
          valueType: 0
        }
      }
      return {
        name: param.name,
        value: param.valuesString[0],
        valueType: 0
      }
    case 1:
    case 'INTEGER':
      if (param.isArray) {
        return {
          name: param.name,
          value: param.valuesInteger.map(v => parseInt(v, 10)),
          valueType: 1
        }
      }
      return {
        name: param.name,
        value: parseInt(param.valuesInteger[0], 10),
        valueType: 1
      }
    case 2:
    case 'DOUBLE':
      if (param.isArray) {
        return {
          name: param.name,
          value: param.valuesDouble,
          valueType: 2
        }
      }
      return {
        name: param.name,
        value: param.valuesDouble[0],
        valueType: 2
      }
    default:
      return param
  }
}

const revProtoKeywordGroup = keywordGroups => {
  const groups = []

  forOwn(keywordGroups, v => {
    const tables = v.tables ? v.tables : []
    groups.push({
      name: v.name,
      tables,
      params: [
        ...filter(v.params, item => !isEmptyParam(item)).map(param =>
          revProtoPayloadSwitch(param)
        )
      ]
    })
  })
  return groups
}

export const revProtoPayload = payload => ({
  metadata: {
    ...payload.metadata,
    params: [
      ...payload.metadata.params.map(param => revProtoPayloadSwitch(param))
    ]
  },
  data: {
    tables: [
      ...(typeof payload.data.tables !== 'undefined' ? payload.data.tables : [])
    ],
    params: [
      ...filter(payload.data.params, item => !isEmptyParam(item)).map(param =>
        revProtoPayloadSwitch(param)
      )
    ],
    keywordGroups: revProtoKeywordGroup(payload.data.keywordGroups)
  }
})

const protoPayloadSwitch = param => {
  switch (param.valueType) {
    case 0:
      if (Array.isArray(param.value)) {
        return {
          name: param.name,
          valuesString: param.value,
          valueType: param.valueType,
          isArray: true
        }
      }
      return {
        name: param.name,
        valuesString: [param.value],
        valueType: param.valueType
      }
    case 1:
      if (Array.isArray(param.value)) {
        return {
          name: param.name,
          valuesInteger: param.value,
          valueType: param.valueType,
          isArray: true
        }
      }
      return {
        name: param.name,
        valuesInteger: [parseInt(param.value, 10)],
        valueType: param.valueType
      }
    case 2:
      if (Array.isArray(param.value)) {
        return {
          name: param.name,
          valuesDouble: param.value.map(val => parseFloat(val)),
          valueType: param.valueType,
          isArray: true
        }
      }
      return {
        name: param.name,
        valuesDouble: [parseFloat(param.value)],
        valueType: param.valueType
      }
    default:
      return param
  }
}

const protoKeywordGroup = keywordGroups => {
  const groups = []

  forOwn(keywordGroups, v => {
    const tables = v.tables ? v.tables : []
    groups.push({
      name: v.name,
      tables,
      params: [
        ...filter(v.params, item => !isEmptyParam(item)).map(param =>
          protoPayloadSwitch(param)
        )
      ]
    })
  })
  return groups
}

export const protoPayload = payload => {
  if (typeof payload.data !== 'undefined') {
    return {
      metadata: {
        ...payload.metadata,
        params: [
          ...payload.metadata.params.map(param => protoPayloadSwitch(param))
        ]
      },
      data: {
        tables: [...payload.data.tables],
        params: [
          ...filter(payload.data.params, item => !isEmptyParam(item)).map(
            param => protoPayloadSwitch(param)
          )
        ],
        keywordGroups: protoKeywordGroup(payload.data.keywordGroups)
      }
    }
  }
  return {
    metadata: {
      ...payload.metadata,
      params: [
        ...payload.metadata.params.map(param => protoPayloadSwitch(param))
      ]
    }
  }
}
