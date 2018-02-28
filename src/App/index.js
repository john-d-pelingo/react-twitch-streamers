import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { css } from 'emotion';

import { ALL, OFFLINE, ONLINE } from '../features/constants/routes';
import HeaderNav from './components/HeaderNav';
import TwitchLogo from './components/TwitchLogo';

class App extends Component {
  render() {
    return (
      <div className={app}>
        <TwitchLogo />
        <HeaderNav />

        <Switch>
          <Route exact path={ALL} render={() => <div>all</div>} />
          <Route exact path={OFFLINE} render={() => <div>offline</div>} />
          <Route exact path={ONLINE} render={() => <div>online</div>} />
          <Redirect to={ALL} />
        </Switch>
      </div>
    );
  }
}

// =======
// STYLING
// =======

const app = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  padding: 40px 20px;

  @media only screen and (min-width: 730px) {
    max-width: 720px;
  }
`;

export default App;
