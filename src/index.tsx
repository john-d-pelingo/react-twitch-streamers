import { injectGlobal } from 'emotion'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import { baseStyles } from './constants/baseStyles'
import { App } from './scenes/App'
import * as serviceWorker from './serviceWorker'

injectGlobal(baseStyles)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.unregister()
