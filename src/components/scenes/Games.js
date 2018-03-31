import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import _flowRight from 'lodash/flowRight';

import { getThumbnail } from 'src/utils/functions';
import withInfiniteScroll from 'src/hocs/withInfiniteScroll';

import GameCard from './components/GameCard';
import Loader from './components/Loader';

class CleanGames extends Component {
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
  flex-flow: row wrap;
`;

// =======
// CONNECT
// =======

const Games = _flowRight(
  withInfiniteScroll({
    list: 'games',
    onEndScroll: 'onEndScroll',
    wait: 1000
  })
)(CleanGames);

// =======
// EXPORTS
// =======

export { CleanGames };
export default Games;
