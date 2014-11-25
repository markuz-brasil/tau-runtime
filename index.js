import 'setimmediate'
import 'es6-shim'
import 'regenerator/runtime'

import * as React from 'react/addons'
import * as PropTypes from 'react/lib/ReactPropTypes'
import * as CSSPropertyOperations from 'react/lib/CSSPropertyOperations'
import * as ReactTransitionChildMapping from 'react/lib/ReactTransitionChildMapping'

import * as di from 'di'
import * as c0 from 'c0'
import * as Famous from 'famous'

React.lib = {
  PropTypes: PropTypes,
  CSSPropertyOperations: CSSPropertyOperations,
  ReactTransitionChildMapping: ReactTransitionChildMapping,
}

export { c0, di, Famous, React}