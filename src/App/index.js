/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { css } from 'emotion';

import api from 'src/features/api/twitch-service';

import { ROOT } from '../features/constants/routes';
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
    const data = await api.getTopGames();

    this.setState({
      isPending: false,
      games: data.data
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
          {this.state.games.map(game => (
            <Route
              key={game.id}
              exact
              path={`${ROOT}/${game.id}`}
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

  @media only screen and (min-width: 730px) {
    max-width: 720px;
  }
`;

export default App;
