declare const isEmptyParam: (param: {value: unknown}) => boolean

declare const revProtoPayloadSwitch: (param: {name: string; value: unknown; valueType?: number | string; isArray?: boolean; valuesString?: string[]; valuesInteger?: string[]; valuesDouble?: string[]}) => {
  name: string
  value: unknown
  valueType?: number
}

declare const revProtoKeywordGroup: (keywordGroups: {
  [key: string]: {
    name: string
    tables?: unknown[]
    params: {
      name: string
      value: unknown
      valueType?: number | string
      isArray?: boolean
      valuesString?: string[]
      valuesInteger?: string[]
      valuesDouble?: string[]
    }[]
  }
}) => {
  name: string
  tables: unknown[]
  params: {
    name: string
    value: unknown
    valueType?: number
  }[]
}[]

export const revProtoPayload: (payload: {
  metadata: {
    params: {
      name: string
      value: unknown
      valueType?: number | string
      isArray?: boolean
      valuesString?: string[]
      valuesInteger?: string[]
      valuesDouble?: string[]
    }[]
  }
  data: {
    tables?: unknown[]
    params: {
      name: string
      value: unknown
      valueType?: number | string
      isArray?: boolean
      valuesString?: string[]
      valuesInteger?: string[]
      valuesDouble?: string[]
    }[]
    keywordGroups: {
      [key: string]: {
        name: string
        tables?: unknown[]
        params: {
          name: string
          value: unknown
          valueType?: number | string
          isArray?: boolean
          valuesString?: string[]
          valuesInteger?: string[]
          valuesDouble?: string[]
        }[]
      }
    }
  }
}) => {
  metadata: {
    params: {
      name: string
      value: unknown
      valueType?: number
    }[]
  }
  data: {
    tables: unknown[]
    params: {
      name: string
      value: unknown
      valueType?: number
    }[]
    keywordGroups: {
      name: string
      tables: unknown[]
      params: {
        name: string
        value: unknown
        valueType?: number
      }[]
    }[]
  }
}

declare const protoPayloadSwitch: (param: {name: string; value: unknown; valueType?: number | string; isArray?: boolean; valuesString?: string[]; valuesInteger?: string[]; valuesDouble?: string[]}) => {
  name: string
  valuesString?: string | string[]
  valuesInteger?: number | number[]
  valuesDouble?: number | number[]
  valueType: number
  isArray?: boolean
}

declare const protoKeywordGroup: (keywordGroups: {
  [key: string]: {
    name: string
    tables?: unknown[]
    params: {
      name: string
      value: unknown
      valueType?: number | string
      isArray?: boolean
      valuesString?: string[]
      valuesInteger?: string[]
      valuesDouble?: string[]
    }[]
  }
}) => {
  name: string
  tables: unknown[]
  params: {
    name: string
    value: unknown
    valueType?: number
  }[]
}[]

export const protoPayload: (payload: {
  metadata: {
    params: {
      name: string
      value: unknown
      valueType?: number | string
      isArray?: boolean
      valuesString?: string[]
      valuesInteger?: string[]
      valuesDouble?: string[]
    }[]
  }
  data?: {
    tables?: unknown[]
    params: {
      name: string
      value: unknown
      valueType?: number | string
      isArray?: boolean
      valuesString?: string[]
      valuesInteger?: string[]
      valuesDouble?: string[]
    }[]
    keywordGroups: {
      [key: string]: {
        name: string
        tables?: unknown[]
        params: {
          name: string
          value: unknown
          valueType?: number | string
          isArray?: boolean
          valuesString?: string[]
          valuesInteger?: string[]
          valuesDouble?: string[]
        }[]
      }
    }
  }
}) => {
  metadata: {
    params: {
      name: string
      value: unknown
      valueType?: number
    }[]
  }
  data?: {
    tables: unknown[]
    params: {
      name: string
      value: unknown
      valueType?: number
    }[]
    keywordGroups: {
      name: string
      tables: unknown[]
      params: {
        name: string
        value: unknown
        valueType?: number
      }[]
    }[]
  }
}
