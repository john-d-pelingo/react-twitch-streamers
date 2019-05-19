import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import _flowRight from 'lodash/flowRight'

import withInfiniteScroll from '../../../hocs/withInfiniteScroll'
import { getThumbnail } from '../../../utils/functions'

import GameCard from './GameCard'

class CleanGames extends Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
  }

  render() {
    return (
      <main className={main}>
        {this.props.games.map(game => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            thumbnail={getThumbnail(game.box_art_url, {
              height: 380,
              width: 285,
            })}
          />
        ))}
      </main>
    )
  }
}

// =======
// STYLING
// =======

const main = css`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

// =======
// CONNECT
// =======

const Games = _flowRight(
  withInfiniteScroll({
    list: 'games',
    onEndScroll: 'onEndScroll',
    wait: 1000,
  }),
)(CleanGames)

// =======
// EXPORTS
// =======

export { CleanGames }
export default Games
