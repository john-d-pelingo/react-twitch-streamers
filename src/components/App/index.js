/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { css } from 'emotion';

import { GAME, ROOT } from 'src/constants/routes';

import HeaderNav from './components/HeaderNav';
import TwitchLogo from './components/TwitchLogo';
import GamesProvider from '../scenes/GamesProvider';
import StreamsProvider from '../scenes/StreamsProvider';

class App extends Component {
  render() {
    return (
      <div className={app}>
        <section>
          <TwitchLogo />
          <HeaderNav />
        </section>

        <Route exact path={ROOT} component={GamesProvider} />
        <Route
          path={`${GAME}/:gameId`}
          render={({ match }) => (
            <StreamsProvider gameId={match.params.gameId} />
          )}
        />
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
`;

export default App;
