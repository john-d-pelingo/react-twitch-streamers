import { css, keyframes } from '@emotion/css'
import { FC } from 'react'

import { TWITCH_PURPLE } from '../constants/colors'

export const Loader: FC = () => (
  <div className={loaderCss} data-cy="loader">
    <div className={circleCss} />
  </div>
)

const circleKeyframeCss = keyframes`
  0%, 100% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.2);
  }
`

const loaderCss = css`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  width: 100%;
  height: 250px;
`

const circleCss = css`
  height: 13px;
  width: 13px;
  display: inline-block;
  background: ${TWITCH_PURPLE};
  border-radius: 50%;
  margin: 20px 5px;
  animation: ${circleKeyframeCss} 1s infinite ease-out;
`
