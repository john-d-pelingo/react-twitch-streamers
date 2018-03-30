/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'emotion';

import api from 'src/api/twitch-service';
import { GAME, ROOT } from 'src/constants/routes';

import HeaderNav from './components/HeaderNav';
import TwitchLogo from './components/TwitchLogo';
import Games from '../scenes/Games';
import Streams from '../scenes/Streams';

class App extends Component {
  state = {
    isPending: true,
    games: []
  };

  async componentDidMount() {
    const games = await api.getTopGames();

    this.setState({
      isPending: false,
      games: games.data
    });
  }

  render() {
    const { games, isPending } = this.state;

    return (
      <div className={app}>
        <section>
          <TwitchLogo />
          <HeaderNav />
        </section>

        <Switch>
          <Route
            exact
            path={ROOT}
            render={() => <Games isPending={isPending} games={games} />}
          />
          {games.map(game => (
            <Route
              key={game.id}
              exact
              path={`${GAME}/${game.id}`}
              render={() => <Streams gameId={game.id} />}
            />
          ))}
          {/* TODO: Add Route with dynamic path */}
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
`;

export default App;
