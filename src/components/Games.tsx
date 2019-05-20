import React, { FC } from 'react'
import { css } from 'emotion'
import _flowRight from 'lodash/flowRight'

import { IGame } from '../entities/game'
import withInfiniteScroll from '../hocs/withInfiniteScroll'
import { getThumbnail } from '../utils/functions'

import { GameCard } from './GameCard'

interface ICleanGamesProps {
  games: IGame[]
}

export const Games: FC<ICleanGamesProps> = ({ games }) => (
  <main className={main}>
    {games.map(game => (
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

const main = css`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

export const GamesConnected = _flowRight(
  withInfiniteScroll({
    list: 'games',
    onEndScroll: 'onEndScroll',
    wait: 1000,
  }),
)(Games)