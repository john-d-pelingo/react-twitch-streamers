import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { injectGlobal } from 'emotion';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import baseStyle from './constants/base-style';

injectGlobal(baseStyle);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
