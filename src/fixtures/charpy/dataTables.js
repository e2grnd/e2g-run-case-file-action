module.exports = [
  {
    name: 'cvnData',
    keywords: [
      {
        keyword: 'CVD1',
        colHeaders: {
          USCustomary: ['Temperature (F)'],
          Metric: ['Temperature (C)'],
          alignOptions: ['right'],
        },
        rowHeaders: false,
        units: {
          USCustomary: ['F'],
          Metric: ['C'],
        },
      },
      {
        keyword: 'CVD2',
        colHeaders: {
          USCustomary: ['Impact Energy (ft-lb)'],
          Metric: ['Impact Energy (J)'],
          alignOptions: ['right'],
        },
        rowHeaders: false,
        units: {
          USCustomary: ['ft-lbs'],
          Metric: ['J'],
        },
      },
      {
        keyword: 'CVD3',
        colHeaders: {
          USCustomary: ['Thickness (in)'],
          Metric: ['Thickness (mm)'],
          alignOptions: ['right'],
        },
        rowHeaders: false,
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'CVD4',
        colHeaders: {
          USCustomary: ['Weight'],
          Metric: ['Weight'],
          alignOptions: ['right'],
        },
        rowHeaders: false,
      },
    ],
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
    ],
    type: 'input',
    keywordGroupName: 'CHARPYH',
    options: {
      type: 'numeric',
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.0000' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
      colWidths: [98, 114, 75, 60],
      stretchH: 'all',
      minSpareRows: 1,
      contextMenu: ['row_above',
        'row_below',
        '---------',
        'remove_row',
        '---------',
        'undo',
        'redo',
        '---------',
        'copy',
        'cut',
      ],
    },
  },
  {
    name: 'cvnDataOut',
    keywords: [
      {
        keyword: 'CHARPY_DATATABLE',
        colHeaders: {
          USCustomary: ['Temperature (F)', 'Impact Energy (ft-lb)', 'Thickness (in)', 'Weight'],
          Metric: ['Temperature (C)', 'Impact Energy (J)', 'Thickness (mm)', 'Weight'],
          alignOptions: ['right', 'right', 'right', 'right'],
        },
        rowHeaders: false,
        units: {
          USCustomary: ['F', 'ft-lbs', 'in', 'DimensionlessEnglish'],
          Metric: ['C', 'J', 'mm', 'DimensionlessMetric'],
        },
      },
    ],
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
    ],
    type: 'output',
    keywordGroupName: 'CHARPYH',
    options: {
      type: 'numeric',
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.0000' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
    },
  },
]
