import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { css, keyframes } from 'emotion'

import { GAME } from '../../../constants/routes'

class GameCard extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }

  render() {
    const { id, name, thumbnail } = this.props

    return (
      <Link
        to={`${GAME}/${id}`}
        className={gameCard}
        data-cy="game-card"
        title={name}
      >
        <img src={thumbnail} alt={name} />
      </Link>
    )
  }
}

// =======
// STYLING
// =======

const coloredToGrayScaleKeyframe = keyframes`
  0%    { filter: grayscale(100%); }
  25%   { filter: grayscale(75%); }
  50%   { filter: grayscale(50%); }
  75%   { filter: grayscale(25%); }
  100%  { filter: grayscale(0%); }
`

const grayScaleToColoredKeyframe = keyframes`
  0%    { filter: grayscale(0%); }
  25%   { filter: grayscale(25%); }
  50%   { filter: grayscale(50%); }
  75%   { filter: grayscale(75%); }
  100%  { filter: grayscale(100%); }
`

const gameCard = css`
  width: 100%;

  &:hover img {
    animation: ${coloredToGrayScaleKeyframe} 150ms;
    filter: grayscale(0);
  }

  img {
    animation: ${grayScaleToColoredKeyframe} 500ms;
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

export default GameCard
