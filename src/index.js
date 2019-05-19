import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'emotion'

import App from './components/App'
import * as serviceWorker from './serviceWorker'
import baseStyle from './constants/base-style'

injectGlobal(baseStyle)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
