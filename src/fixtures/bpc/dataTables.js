module.exports = [
  {
    name: 'mainAssessmentTable',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'text',
      },
    ],
    keywords: [
      {
        keyword: 'mainAssessmentTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)', 'Allowable (psi)', 'Pass/Fail '],
          Metric: ['Calculated (kPa)', 'Allowable (kPa)', 'Pass/Fail '],
        },
        units: {
          USCustomary: ['psi', 'psi', 'DimensionlessEnglish'],
          Metric: ['kPa', 'kPa', 'DimensionlessMetric'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Hoop Stress due to Internal Pressure <br /> for Minimum Temperature', 'Hoop Stress due to Internal Pressure <br /> for Maximum Temperature', 'Total Effective Stress <br /> for Minimum Temperature (S<sub>eff,min</sub>)', 'Total Effective Stress <br /> for Maximum Temperature (S<sub>eff,max</sub>)', 'Girth Weld Cyclic Stress (&#916;S<sub>L</sub>)', 'Longitudinal Weld Cyclic Stress (&#916;S<sub>H</sub>)'],
      cells(row, col) {
        if(col === 2) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter htMiddle'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0 || parseFloat(value) === 6.895) {
              td.className = 'htCenter htMiddle'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
            if(parseFloat(value) === 2.0 || parseFloat(value) === 13.79) {
              td.className = 'htCenter htMiddle'
              td.textContent = ' '
            }
          }
        }
      },
      colWidths: [150, 150, 100],
      className: 'htCenter htMiddle',
      rowHeaderWidth: 300,
    },
  },
  {
    name: 'mainAssessmentTableReport',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'text',
      },
    ],
    keywords: [
      {
        keyword: 'mainAssessmentTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)', 'Allowable (psi)', 'Pass /Fail '],
          Metric: ['Calculated (kPa)', 'Allowable (kPa)', 'Pass /Fail '],
        },
        units: {
          USCustomary: ['psi', 'psi', 'DimensionlessEnglish'],
          Metric: ['kPa', 'kPa', 'DimensionlessMetric'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Hoop Stress due to Internal Pressure for Min. Temperature', 'Hoop Stress due to Internal Pressure for Max. Temperature', 'Total Effective Stress for Min. Temperature', 'Total Effective Stress for Max. Temperature', 'Girth Weld Cyclic Stress', 'Longitudinal Weld Cyclic Stress'],
      colWidths: [150, 150, 100],
      className: 'htCenter htMiddle',
      rowHeaderWidth: 300,
    },
  },
  {
    name: 'newMainAssessmentTable',
    columnDisplayOptions: [
      {
        dataType: 'text',
      },
      {
        dataType: 'text',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'text',
      },
    ],
    keywords: [
      {
        keyword: 'ASSESSMENTTYPE',
        colHeaders: {
          USCustomary: ['Assessment'],
          Metric: ['Assessment'],
        },
      },
      {
        keyword: 'DESCRIPTION',
        renderer: 'html',
        colHeaders: {
          USCustomary: ['Description'],
          Metric: ['Description'],
        },
      },
      {
        keyword: 'CALCULATED',
        colHeaders: {
          USCustomary: ['Calculated <br /> (psi)'],
          Metric: ['Calculated <br /> (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
      {
        keyword: 'ALLOWABLE',
        colHeaders: {
          USCustomary: ['Allowable <br /> (psi)'],
          Metric: ['Allowable <br /> (kPa)'],
        },
        units: {
          USCustomary: ['BTU/hr-ft^2'],
          Metric: ['W/m^2'],
        },
      },
      {
        keyword: 'PASS_FAIL',
        colHeaders: {
          USCustomary: ['Pass /Fail '],
          Metric: ['Pass /Fail '],
        },
      },
    ],
    type: 'output',
    options: {
      colWidths: [145, 205, 120, 120, 80],
      renderer: 'html',
      mergeCells: [
        { row: 0, col: 0, rowspan: 2, colspan: 1 },
        { row: 2, col: 0, rowspan: 2, colspan: 1 },
        { row: 4, col: 0, rowspan: 2, colspan: 1 },
      ],
      className: 'htCenter htMiddle',
      cell: [
        { row: 0, col: 0, className: 'htCenter htMiddle' },
        { row: 1, col: 0, className: 'htMiddle' },
        { row: 2, col: 0, className: 'htCenter htMiddle' },
        { row: 4, col: 0, className: 'htCenter htMiddle' },
        { row: 0, col: 1, className: 'htLeft htMiddle' },
        { row: 1, col: 1, className: 'htLeft htMiddle' },
        { row: 2, col: 1, className: 'htLeft htMiddle' },
        { row: 3, col: 1, className: 'htLeft htMiddle' },
        { row: 4, col: 1, className: 'htLeft htMiddle' },
        { row: 5, col: 1, className: 'htLeft htMiddle' },
      ],
      cells(row, col) {
        if(col === 4) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(value === 'Fail') {
              td.className = 'htCenter htMiddle'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(value === 'Pass') {
              td.className = 'htCenter htMiddle'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
          }
        }
      },
    },
  },
  {
    name: 'newMainAssessmentTableRP',
    columnDisplayOptions: [
      {
        dataType: 'text',
      },
      {
        dataType: 'text',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'float',
      },
      {
        dataType: 'text',
      },
    ],
    keywords: [
      {
        keyword: 'ASSESSMENTTYPE',
        colHeaders: {
          USCustomary: ['Assessment'],
          Metric: ['Assessment'],
        },
      },
      {
        keyword: 'DESCRIPTIONRP',
        renderer: 'html',
        colHeaders: {
          USCustomary: ['Description'],
          Metric: ['Description'],
        },
      },
      {
        keyword: 'CALCULATED',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
      {
        keyword: 'ALLOWABLE',
        colHeaders: {
          USCustomary: ['Allowable (psi)'],
          Metric: ['Allowable (kPa)'],
        },
        units: {
          USCustomary: ['BTU/hr-ft^2'],
          Metric: ['W/m^2'],
        },
      },
      {
        keyword: 'PASS_FAIL',
        colHeaders: {
          USCustomary: ['Pass /Fail '],
          Metric: ['Pass /Fail '],
        },
      },
    ],
    type: 'output',
    options: {
      colWidths: [145, 300, 120, 120, 100],
      renderer: 'html',
      mergeCells: [
        { row: 0, col: 0, rowspan: 2, colspan: 1 },
        { row: 2, col: 0, rowspan: 2, colspan: 1 },
        { row: 4, col: 0, rowspan: 2, colspan: 1 },
      ],
      className: 'htCenter htMiddle',
      cell: [
        { row: 0, col: 0, className: 'htCenter htMiddle' },
        { row: 1, col: 0, className: 'htMiddle' },
        { row: 2, col: 0, className: 'htCenter htMiddle' },
        { row: 4, col: 0, className: 'htCenter htMiddle' },
        { row: 0, col: 1, className: 'htLeft htMiddle' },
        { row: 1, col: 1, className: 'htLeft htMiddle' },
        { row: 2, col: 1, className: 'htLeft htMiddle' },
        { row: 3, col: 1, className: 'htLeft htMiddle' },
        { row: 4, col: 1, className: 'htLeft htMiddle' },
        { row: 5, col: 1, className: 'htLeft htMiddle' },
      ],
    },
  },
  {
    name: 'internalPressureTable',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
    ],
    keywords: [
      {
        keyword: 'internalPressureTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Barlow Stress (S<sub>Hi</sub>)', 'Allowable Hoop Stress due to <br /> Internal Pressure for Min. Temperature', 'Allowable Hoop Stress due to <br /> Internal Pressure for Max. Temperature', 'S<sub>Hi</sub> &lt Allowable Stress <br /> for Min. Temperature ', 'S<sub>Hi</sub> &lt Allowable Stress <br /> for Max. Temperature '],
      cells(row, col) {
        if(row === 3 || row === 4) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter htMiddle'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0 || parseFloat(value) === 6.895) {
              td.className = 'htCenter htMiddle'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
          }
        }
      },
      colWidths: [150],
      className: 'htCenter htMiddle',
      rowHeaderWidth: 300,
    },
  },
  {
    name: 'effectiveStressTable',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
    ],
    keywords: [
      {
        keyword: 'effectiveStressTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Circumferential Stress <br /> from Earth Load (S<sub>He</sub>)', 'Cyclic Circumferential Stress (&#916 S<sub>H</sub>)', 'Circumferential Stress due to <br /> Internal Pressure  (S<sub>Hi</sub>)', 'Maximum Circumferential Stress (S<sub>1</sub>)', '&#916; S<sub>L</sub>', 'E<sub>S</sub> &middot; &#945; &middot; (T<sub>min</sub> - T<sub>1</sub>)', 'E<sub>S</sub> &middot; &#945; &middot; (T<sub>max</sub> - T<sub>1</sub>)', '&#957; &middot; (S<sub>He</sub> + S<sub>Hi</sub>)', 'Maximum Longitudinal Stress <br /> for Min. Temperature (S<sub>2,min</sub>)', 'Maximum Longitudinal Stress <br /> for Max. Temperature (S<sub>2,max</sub>)', 'Maximum Radial Stress (S<sub>3</sub>)', 'Total Effective Stress <br /> for Min. Temperature (S<sub>eff,min</sub>)', 'Total Effective Stress <br /> for Max. Temperature (S<sub>eff,max</sub>)', 'Allowable Effective Stress', 'S<sub>eff,min</sub> &lt Allowable Effective Stress', 'S<sub>eff,max</sub> &lt Allowable Effective Stress'],
      cells(row, col) {
        if(row === 14 || row === 15) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter htMiddle'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0 || parseFloat(value) === 6.895) {
              td.className = 'htCenter htMiddle'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
          }
        }
      },
      colWidths: [150],
      className: 'htCenter htMiddle',
      rowHeaderWidth: 300,
    },
  },
  {
    name: 'girthWeldStressTable',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
    ],
    keywords: [
      {
        keyword: 'girthWeldTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Design Factor (F)', 'Fatigue Resistance of Girth Weld  (S<sub>FG</sub>)', 'Factored Fatigue Endurance Limit (S<sub>FG</sub> &middot; F)', 'Cyclic Logitudinal Stress (&#916 S<sub>L</sub>)', 'Double Track Factor (N<sub>L</sub>)', '&#916; S<sub>L</sub> &#8260; N<sub>L</sub> &lt S<sub>FG</sub> &middot; F'],
      cells(row, col) {
        if(row === 5) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0 || parseFloat(value) === 6.895) {
              td.className = 'htCenter'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
            if(parseFloat(value) === 2.0 || parseFloat(value) === 13.79) {
              td.className = 'htCenter'
              td.textContent = ' '
            }
          }
        }
      },
      colWidths: [150],
      className: 'htCenter',
      rowHeaderWidth: 350,
    },
  },
  {
    name: 'girthWeldStressTableH',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
    ],
    keywords: [
      {
        keyword: 'girthWeldTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Design Factor (F)', 'Fatigue Resistance of Girth Weld  (S<sub>FG</sub>)', 'Factored Fatigue Endurance Limit (S<sub>FG</sub> &middot; F)', 'Cyclic Logitudinal Stress (&#916 S<sub>L</sub>)', '&#916; S<sub>L</sub> &lt S<sub>FG</sub> &middot; F'],
      cells(row, col) {
        if(row === 4) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0 || parseFloat(value) === 6.895) {
              td.className = 'htCenter'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
            if(parseFloat(value) === 2.0 || parseFloat(value) === 13.79) {
              td.className = 'htCenter'
              td.textContent = ' '
            }
          }
        }
      },
      colWidths: [150],
      className: 'htCenter',
      rowHeaderWidth: 350,
    },
  },
  {
    name: 'longitudinalStressTableH',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
    ],
    keywords: [
      {
        keyword: 'longitudinalWeldTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Design Factor (F)', 'Fatigue Resistance of Longitudinal Weld  (S<sub>FL</sub>)', 'Factored Fatigue Endurance Limit (S<sub>FL</sub> &middot; F)', 'Cyclic Circumferential Stress (&#916 S<sub>H</sub>)', '&#916; S<sub>H</sub> &lt S<sub>FL</sub> &middot; F'],
      cells(row, col) {
        if(row === 4) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0 || parseFloat(value) === 6.895) {
              td.className = 'htCenter'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
            if(parseFloat(value) === 2.0 || parseFloat(value) === 13.79) {
              td.className = 'htCenter'
              td.textContent = ' '
            }
          }
        }
      },
      colWidths: [150],
      className: 'htCenter',
      rowHeaderWidth: 350,
    },
  },
  {
    name: 'longitudinalStressTable',
    columnDisplayOptions: [
      {
        dataType: 'float',
      },
    ],
    keywords: [
      {
        keyword: 'longitudinalWeldTable',
        colHeaders: {
          USCustomary: ['Calculated (psi)'],
          Metric: ['Calculated (kPa)'],
        },
        units: {
          USCustomary: ['psi'],
          Metric: ['kPa'],
        },
      },
    ],
    type: 'output',
    options: {
      rowHeaders: ['Design Factor (F)', 'Fatigue Resistance of Longitudinal Weld  (S<sub>FL</sub>)', 'Factored Fatigue Endurance Limit (S<sub>FL</sub> &middot; F)', 'Cyclic Circumferential Stress (&#916 S<sub>H</sub>)', 'Double Track Factor (N<sub>H</sub>)', '&#916; S<sub>H</sub> &#8260; N<sub>H</sub> &lt S<sub>FL</sub> &middot; F'],
      cells(row, col) {
        if(row === 5) {
          this.renderer = function colorize(instance, td, row, col, prop, value, cellProperties) {
            if(parseFloat(value) === 0.0) {
              td.className = 'htCenter'
              td.style.color = 'red'
              td.textContent = 'Fail'
            }
            if(parseFloat(value) === 1.0) {
              td.className = 'htCenter'
              td.style.color = 'green'
              td.textContent = 'Pass'
            }
            if(parseFloat(value) === 2.0) {
              td.className = 'htCenter'
              td.textContent = ' '
            }
          }
        }
      },
      colWidths: [150],
      className: 'htCenter',
      rowHeaderWidth: 350,
    },
  },
]
