export default [
  {
    name: 'gridTable',
    keywords: [
      {
        keyword: 'GRID_DATA',
        colHeaders(index) {
          return `T${index}`
        },
        rowHeaders(index) {
          return `A${index}`
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
    ],
    type: 'input',
    options: {
      type: 'numeric',
      numericFormat: { pattern: '0.00' },
      minSpareRows: 1,
      startRows: 3,
      startCols: 3,
      contextMenu: ['row_above',
        'row_below',
        '---------',
        'col_left',
        'col_right',
        '---------',
        'remove_row',
        'remove_col',
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
    name: 'cyclicPressureTable',
    keywords: [
      {
        keyword: 'MIN_PRESSURE',
        colHeaders: {
          USCustomary: ['Min. Pressure (psi)'],
          Metric: ['Min. Pressure (MPs)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
        },
      },
      {
        keyword: 'MAX_PRESSURE',
        colHeaders: {
          USCustomary: ['Max. Pressure (psi)'],
          Metric: ['Max. Pressure (MPs)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
        },
      },
      {
        keyword: 'YEARLY_NUMBER_OF_CYCLES',
        colHeaders: {
          USCustomary: ['No. of Cycles per Year (n)'],
          Metric: ['No. of Cycles per Year (n)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['DimensionlessEnglish'],
          Metric: ['DimensionlessMetric'],
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
        dataType: 'integer',
      },
    ],
    type: 'input',
    options: {
      maxRows: 2000,
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0' } },
      ],
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
      stretchH: 'all',
    },
  },
  {
    name: 'pressureData1',
    keywords: [
      {
        keyword: 'PRES_TIME_1',
        colHeaders: {
          USCustomary: ['Times (yrs)'],
          Metric: ['Times (yrs)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['yrs'],
          Metric: ['yrs'],
        },
      },
      {
        keyword: 'PRES_HIST_1',
        colHeaders: {
          USCustomary: ['Pressure (psi)'],
          Metric: ['Pressure (MPa)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
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
    ],
    type: 'input',
    options: {
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
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
      stretchH: 'all',
    },
  },
  {
    name: 'pressureData2',
    keywords: [
      {
        keyword: 'PRES_TIME_2',
        colHeaders: {
          USCustomary: ['Times (yrs)'],
          Metric: ['Times (yrs)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['yrs'],
          Metric: ['yrs'],
        },
      },
      {
        keyword: 'PRES_HIST_2',
        colHeaders: {
          USCustomary: ['Pressure (psi)'],
          Metric: ['Pressure (MPa)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
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
    ],
    type: 'input',
    options: {
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
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
      stretchH: 'all',
    },
  },
  {
    name: 'axialProfileTable',
    keywords: [
      {
        keyword: 'AXIAL_POSITION',
        colHeaders: {
          USCustomary: ['Axial Position (in)'],
          Metric: ['Axial Position (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'AXIAL_WALL_DISP',
        colHeaders: {
          USCustomary: ['Wall Displacement (in)'],
          Metric: ['Wall Displacement (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
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
    ],
    type: 'input',
    options: {
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
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
      stretchH: 'all',
    },
  },
  {
    name: 'transverseProfileTable',
    keywords: [
      {
        keyword: 'TRANSVERSE_POSITION',
        colHeaders: {
          USCustomary: ['Transverse Position (in)'],
          Metric: ['Transverse Position (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'TRANSVERSE_WALL_DISP',
        colHeaders: {
          USCustomary: ['Wall Displacement (in)'],
          Metric: ['Wall Displacement (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
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
    ],
    type: 'input',
    options: {
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
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
      stretchH: 'all',
    },
  },
  {
    name: 'fatigueDetails',
    keywords: [
      {
        keyword: 'PRESSURE_RANGE_COL',
        colHeaders: {
          USCustomary: ['Pressure Range (psi)'],
          Metric: ['Pressure Range (MPa)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
        },
      },
      {
        keyword: 'PRESSURE_MEAN_COL',
        colHeaders: {
          USCustomary: ['Mean Pressure (psi)'],
          Metric: ['Mean Pressure (MPa)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
        },
      },
      {
        keyword: 'STRESS_RANGE_COL',
        colHeaders: {
          USCustomary: ['Stress Range (psi)'],
          Metric: ['Stress Range (MPa)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['MPa'],
        },
      },
      {
        keyword: 'NUMBER_OF_CYCLES_COL',
        colHeaders: {
          USCustomary: ['Cycles (n)'],
          Metric: ['Cycles (n)'],
          alignOptions: ['center'],
        },
      },
      {
        keyword: 'PF_COL',
        colHeaders: {
          USCustomary: ['PF'],
          Metric: ['PF'],
          alignOptions: ['center'],
        },
      },
      {
        keyword: 'R_COL',
        colHeaders: {
          USCustomary: ['R'],
          Metric: ['R'],
          alignOptions: ['center'],
        },
      },
      {
        keyword: 'SP_COL',
        colHeaders: {
          USCustomary: ['SP'],
          Metric: ['SP'],
          alignOptions: ['center'],
        },
      },
      {
        keyword: 'LOGA_COL',
        colHeaders: {
          USCustomary: ['Log10(A)'],
          Metric: ['Log10(A)'],
          alignOptions: ['center'],
        },
      },
      {
        keyword: 'B_COL',
        colHeaders: {
          USCustomary: ['B'],
          Metric: ['B'],
          alignOptions: ['center'],
        },
      },
    ],
    columnDisplayOptions: [
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'float' },
    ],
    type: 'output',
    options: {
      colWidths: [75, 75, 65, 65, 65, 65, 65, 75, 65],
      columns: [
        { type: 'numeric' },
        { type: 'numeric' },
        { type: 'numeric' },
        { type: 'numeric', numericFormat: { pattern: '0.0' } },
        { type: 'numeric' },
        { type: 'numeric' },
        { type: 'numeric' },
        { type: 'numeric' },
        { type: 'numeric' },
      ],
      stretchH: 'all',
    },
  },
  {
    name: 'q1GeometricParams',
    keywords: [
      {
        keyword: 'AXIAL_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'AXIAL_LENGTH_PARAMS_UPSTREAM',
        colHeaders: {
          USCustomary: ['Axial Length (in)'],
          Metric: ['Axial Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'AXIAL_AREA_PARAMS_UPSTREAM',
        colHeaders: {
          USCustomary: ['Axial Area (in^2)'],
          Metric: ['Axial Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
      {
        keyword: 'TRANSVERSE_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'TRANSVERSE_LENGTH_PARAMS_CW',
        colHeaders: {
          USCustomary: ['Transverse Length (in)'],
          Metric: ['Transverse Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'TRANSVERSE_AREA_PARAMS_CW',
        colHeaders: {
          USCustomary: ['Transverse Area (in^2)'],
          Metric: ['Transverse Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
    ],
    columnDisplayOptions: [
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
    ],
    type: 'output',
    options: {
      colWidths: [65, 85, 85, 65, 85, 85],
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
      cells(row, col) {
        if(col === 0 || col == 3) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            td.className = 'htCenter'
            td.textContent = value
            td.style.color = '#000'
            td.style.background = 'rgb(240,240,240)'
          }
        }
      },
      stretchH: 'all',
    },
  },
  {
    name: 'q2GeometricParams',
    keywords: [
      {
        keyword: 'AXIAL_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'AXIAL_LENGTH_PARAMS_UPSTREAM',
        colHeaders: {
          USCustomary: ['Axial Length (in)'],
          Metric: ['Axial Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'AXIAL_AREA_PARAMS_UPSTREAM',
        colHeaders: {
          USCustomary: ['Axial Area (in^2)'],
          Metric: ['Axial Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
      {
        keyword: 'TRANSVERSE_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'TRANSVERSE_LENGTH_PARAMS_CCW',
        colHeaders: {
          USCustomary: ['Transverse Length (in)'],
          Metric: ['Transverse Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'TRANSVERSE_AREA_PARAMS_CCW',
        colHeaders: {
          USCustomary: ['Transverse Area (in^2)'],
          Metric: ['Transverse Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
    ],
    columnDisplayOptions: [
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
    ],
    type: 'output',
    options: {
      colWidths: [65, 85, 85, 65, 85, 85],
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
      cells(row, col) {
        if(col === 0 || col == 3) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            td.className = 'htCenter'
            td.textContent = value
            td.style.color = '#000'
            td.style.background = 'rgb(240,240,240)'
          }
        }
      },
      stretchH: 'all',
    },
  },
  {
    name: 'q3GeometricParams',
    keywords: [
      {
        keyword: 'AXIAL_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'AXIAL_LENGTH_PARAMS_DOWNSTREAM',
        colHeaders: {
          USCustomary: ['Axial Length (in)'],
          Metric: ['Axial Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'AXIAL_AREA_PARAMS_DOWNSTREAM',
        colHeaders: {
          USCustomary: ['Axial Area (in^2)'],
          Metric: ['Axial Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
      {
        keyword: 'TRANSVERSE_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'TRANSVERSE_LENGTH_PARAMS_CW',
        colHeaders: {
          USCustomary: ['Transverse Length (in)'],
          Metric: ['Transverse Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'TRANSVERSE_AREA_PARAMS_CW',
        colHeaders: {
          USCustomary: ['Transverse Area (in^2)'],
          Metric: ['Transverse Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
    ],
    columnDisplayOptions: [
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
    ],
    type: 'output',
    options: {
      colWidths: [65, 85, 85, 65, 85, 85],
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
      cells(row, col) {
        if(col === 0 || col == 3) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            td.className = 'htCenter'
            td.textContent = value
            td.style.color = '#000'
            td.style.background = 'rgb(240,240,240)'
          }
        }
      },
      stretchH: 'all',
    },
  },
  {
    name: 'q4GeometricParams',
    keywords: [
      {
        keyword: 'AXIAL_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'AXIAL_LENGTH_PARAMS_DOWNSTREAM',
        colHeaders: {
          USCustomary: ['Axial Length (in)'],
          Metric: ['Axial Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'AXIAL_AREA_PARAMS_DOWNSTREAM',
        colHeaders: {
          USCustomary: ['Axial Area (in^2)'],
          Metric: ['Axial Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
      {
        keyword: 'TRANSVERSE_PERCENT',
        colHeaders: {
          USCustomary: ['Depth Percent (%)'],
          Metric: ['Depth Percent (%)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['%'],
          Metric: ['%'],
        },
      },
      {
        keyword: 'TRANSVERSE_LENGTH_PARAMS_CCW',
        colHeaders: {
          USCustomary: ['Transverse Length (in)'],
          Metric: ['Transverse Length (mm)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in'],
          Metric: ['mm'],
        },
      },
      {
        keyword: 'TRANSVERSE_AREA_PARAMS_CCW',
        colHeaders: {
          USCustomary: ['Transverse Area (in^2)'],
          Metric: ['Transverse Area (mm^2)'],
          alignOptions: ['center'],
        },
        units: {
          USCustomary: ['in^2'],
          Metric: ['mm^2'],
        },
      },
    ],
    columnDisplayOptions: [
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
      { dataType: 'integer' },
      { dataType: 'float' },
      { dataType: 'float' },
    ],
    type: 'output',
    options: {
      colWidths: [65, 85, 85, 65, 85, 85],
      columns: [
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
        { type: 'numeric', numericFormat: { pattern: '0.00' } },
      ],
      cells(row, col) {
        if(col === 0 || col == 3) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            td.className = 'htCenter'
            td.textContent = value
            td.style.color = '#000'
            td.style.background = 'rgb(240,240,240)'
          }
        }
      },
      stretchH: 'all',
    },
  },
]
