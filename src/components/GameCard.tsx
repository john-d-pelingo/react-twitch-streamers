import { css, keyframes } from 'emotion'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { GAME } from '../constants/routes'

interface IGameCardProps {
  id: string
  name: string
  thumbnail: string
}

export const GameCard: FC<IGameCardProps> = ({ id, name, thumbnail }) => (
  <Link
    to={`${GAME}/${id}`}
    className={gameCardCss}
    data-cy="game-card"
    title={name}
  >
    <img src={thumbnail} alt={name} />
  </Link>
)

const coloredToGrayScaleKeyframeCss = keyframes`
  0%    { filter: grayscale(100%); }
  25%   { filter: grayscale(75%); }
  50%   { filter: grayscale(50%); }
  75%   { filter: grayscale(25%); }
  100%  { filter: grayscale(0%); }
`

const grayScaleToColoredKeyframeCss = keyframes`
  0%    { filter: grayscale(0%); }
  25%   { filter: grayscale(25%); }
  50%   { filter: grayscale(50%); }
  75%   { filter: grayscale(75%); }
  100%  { filter: grayscale(100%); }
`

const gameCardCss = css`
  width: 100%;

  &:hover img {
    animation: ${coloredToGrayScaleKeyframeCss} 150ms;
    filter: grayscale(0);
  }

  img {
    animation: ${grayScaleToColoredKeyframeCss} 500ms;
    filter: grayscale(100%);
  }

  @media only screen and (min-width: 560px) {
    width: 100%;
    max-width: 250px;
  }

  @media only screen and (min-width: 320px) {
    width: 50%;
  }
`
