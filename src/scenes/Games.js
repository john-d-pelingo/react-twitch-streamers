import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import GameCard from './components/GameCard';
import Loader from './components/Loader';

class Games extends Component {
  static propTypes = {
    isPending: PropTypes.bool,
    games: PropTypes.array.isRequired
  };

  static defaultProps = {
    isPending: true
  };

  render() {
    // TODO: Try react async-rendering and suspense
    if (this.props.isPending) {
      return <Loader />;
    }

    return (
      <main className={main}>
        {this.props.games.map(game => (
          <GameCard
            key={game.id}
            imageLink={game.box_art_url}
            name={game.name}
          />
        ))}
      </main>
    );
  }
}

// =======
// STYLING
// =======

const main = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (min-width: 730px) {
    max-width: 720px;
  }
`;

export default Games;
