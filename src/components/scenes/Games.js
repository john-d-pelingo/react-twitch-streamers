import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { getThumbnail } from 'src/utils/functions';

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
            id={game.id}
            name={game.name}
            thumbnail={getThumbnail(game.box_art_url, {
              height: 380,
              width: 285
            })}
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
