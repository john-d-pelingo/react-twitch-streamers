import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'emotion'

import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { baseStyles } from './constants/baseStyles'

injectGlobal(baseStyles)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
