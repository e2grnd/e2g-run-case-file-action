module.exports = [
  {
    keyword: 'OUTPUT',
    valueType: 0,
    fieldName: undefined,
    default: undefined,
    initializer: 'SC',
    type: 'input',
    keywordGroupName: 'CHARPYH',
  },
  {
    keyword: 'OPTIMIZE',
    valueType: 0,
    fieldName: 'optimizeFit',
    default: 'YES',
    initializer: 'YES',
    type: 'input',
    tooltip: 'Flag to modify hyperbolic coefficients based on an optimization technique',
    keywordGroupName: 'CHARPYH',
    label: 'Optimize Fit',
  },
  {
    keyword: 'LMMFLAG',
    valueType: 0,
    fieldName: 'levenbergMarquardtFlag',
    default: 'NO',
    initializer: 'NO',
    type: 'input',
    tooltip: 'Flag to perform Levenberg-Marquardt fit',
    keywordGroupName: 'CHARPYH',
  },
  {
    keyword: 'CVNMIN',
    valueType: 2,
    fieldName: 'cvnMin',
    default: 1,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'J',
    },
    type: 'input',
    tooltip: 'Constraint on the minimum possible value of the Charpy impact energy used to fit the coefficients of the hyperbolic tangent function, note that the actual minimum value may be greater than this value; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Minimum Permissible Impact Energy',
  },
  {
    keyword: 'CVNMAX',
    valueType: 2,
    fieldName: 'cvnMax',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'J',
    },
    type: 'input',
    tooltip: 'Constraint on the maximum possible value of the Charpy impact energy used to fit the coefficients of the hyperbolic tangent function, note that the actual maximum value may be small than this value; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Maximum Permissible Impact Energy',
  },
  {
    keyword: 'CVNTTEM',
    valueType: 2,
    fieldName: 'transitionWidth',
    default: { USCustomary: 320, Metric: 160 },
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'input',
    tooltip: 'Constraint on the width of the transition region used to fit the coefficients of hyperbolic tangent function; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Maximum Width of Transition Region',
  },
  {
    keyword: 'PHIIN',
    valueType: 2,
    fieldName: 'phiOtimizationParameter',
    default: undefined,
    initializer: undefined,
    type: 'input',
    tooltip: 'PHI Parameter used to adjust the CONMIN optimization algorithm',
    keywordGroupName: 'CHARPYH',
    label: 'Phi Optimization Parameter',
  },
  {
    keyword: 'THETAIN',
    valueType: 2,
    fieldName: 'thetaOtimizationParameter',
    default: undefined,
    initializer: undefined,
    type: 'input',
    tooltip: 'THETA Parameter used to adjust the CONMIN optimization algorithm',
    keywordGroupName: 'CHARPYH',
    label: 'Theta Optimization Parameter',
  },
  {
    keyword: 'CTTCON',
    valueType: 2,
    fieldName: 'constraintTemperature',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'input',
    tooltip: 'Temperature to establish a constraint on the transition region when fitting the coefficients of hyperbolic tangent function; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Constraint Temperature',
  },
  {
    keyword: 'CVNCON',
    valueType: 2,
    fieldName: 'constraintEnergy',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'N-m',
    },
    type: 'input',
    tooltip: 'Charpy impact value associated with CTTCON; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Constraint Energy',
  },
  {
    keyword: 'CVNLOW',
    valueType: 2,
    fieldName: 'lowerShelfConstraint',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'N-m',
    },
    type: 'input',
    tooltip: 'Constraint on value of the lower shelf impact energy, the hyperbolic tangent fit to the Charpy impact test results will be adjusted to give this value for the lower shelf of the transition curve; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Constrained Minimum Impact Energy',
  },
  {
    keyword: 'CVNUP',
    valueType: 2,
    fieldName: 'upperShelfConstraint',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'N-m',
    },
    type: 'input',
    tooltip: 'Constraint on the value of the upper shelf impact energy, the hyperbolic tangent fit to the Charpy impact test results will be adjusted to give this value for the upper shelf of the transition curve; used only if OPTIMIZE=yes',
    keywordGroupName: 'CHARPYH',
    label: 'Constrained Maximum Impact Energy',
  },
  {
    keyword: undefined,
    valueType: 2,
    fieldName: 'cvnData',
    default: [],
    initializer: undefined,
    type: 'input',
  },
  {
    keyword: 'TT_15',
    valueType: 2,
    fieldName: 'transitionTemp15ftlb',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    tooltip: '15 ft-lb transition temperature',
    keywordGroupName: 'CHARPYH',
    label: '15 ft-lb transition temperature',
  },
  {
    keyword: 'TT_20',
    valueType: 2,
    fieldName: 'transitionTemp20ftlb',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    tooltip: '20 ft-lb transition temperature',
    keywordGroupName: 'CHARPYH',
    label: '20 ft-lb transition temperature',
  },
  {
    keyword: 'TT_40',
    valueType: 2,
    fieldName: 'transitionTemp40ftlb',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    tooltip: '40 ft-lb transition temperature',
    keywordGroupName: 'CHARPYH',
    label: '40 ft-lb transition temperature',
  },
  {
    keyword: 'TT_20J',
    valueType: 2,
    fieldName: 'transitionTemp20J',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    tooltip: '20 J transition temperature',
    keywordGroupName: 'CHARPYH',
    label: '20 J transition temperature',
  },
  {
    keyword: 'TT_28J',
    valueType: 2,
    fieldName: 'transitionTemp28J',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    tooltip: '28 J transition temperature',
    keywordGroupName: 'CHARPYH',
    label: '28 J transition temperature',
  },
  {
    keyword: 'TT_54J',
    valueType: 2,
    fieldName: 'transitionTemp54J',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    tooltip: '54 J transition temperature',
    keywordGroupName: 'CHARPYH',
    label: '54 J transition temperature',
  },
  {
    keyword: 'MASTER_T0',
    valueType: 2,
    fieldName: 'masterCurveT0',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    tooltip: 'Master curve transition temperature',
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Master Curve Transition Temperature',
  },
  {
    keyword: 'A',
    valueType: 2,
    fieldName: 'coefficientA',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'J',
    },
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Hyperbolic Fitting Function, Parameter A',
  },
  {
    keyword: 'B',
    valueType: 2,
    fieldName: 'coefficientB',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft-lbs',
      Metric: 'J',
    },
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Hyperbolic Fitting Function, Parameter B',
  },
  {
    keyword: 'C',
    valueType: 2,
    fieldName: 'coefficientC',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Hyperbolic Fitting Function, Parameter C',
  },
  {
    keyword: 'D',
    valueType: 2,
    fieldName: 'coefficientD',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'F',
      Metric: 'C',
    },
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Hyperbolic Fitting Function, Parameter D',
  },
  {
    keyword: 'SSE',
    valueType: 2,
    fieldName: 'sumOfResidualsSquared',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft^2-lbs^2',
      Metric: 'J^2',
    },
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Sum of Residuals Squared',
  },
  {
    keyword: 'SSM',
    valueType: 2,
    fieldName: 'sumOfSquaresAboutMean',
    default: undefined,
    initializer: undefined,
    units: {
      USCustomary: 'ft^2-lbs^2',
      Metric: 'J^2',
    },
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Sum of Squares about Mean',
  },
  {
    keyword: 'RSQD',
    valueType: 2,
    fieldName: 'coefficeintOfDetermination',
    default: undefined,
    initializer: undefined,
    type: 'output',
    keywordGroupName: 'CHARPYH',
    label: 'Coefficient of Determination',
  },
]
