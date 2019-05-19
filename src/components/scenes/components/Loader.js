import React from 'react'
import { css, keyframes } from 'emotion'

import { TWITCH_PURPLE } from '../../../constants/colors'

const Loader = () => (
  <div className={loader} data-cy="loader">
    <div className={circle} />
  </div>
)

// =======
// STYLING
// =======

const circleKeyframe = keyframes`
  0%, 100% {
    transform: scale(0.8);
  }
  
  50% {
    transform: scale(1.2);
  }
`

const loader = css`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  width: 100%;
  height: 250px;
`

const circle = css`
  height: 13px;
  width: 13px;
  display: inline-block;
  background: ${TWITCH_PURPLE};
  border-radius: 50%;
  margin: 20px 5px;
  animation: ${circleKeyframe} 1s infinite ease-out;
`

export default Loader
