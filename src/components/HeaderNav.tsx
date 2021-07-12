import { css } from '@emotion/css'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { DARK_BLACK, TWITCH_PURPLE } from '../constants/colors'
import { STREAMS, ROOT } from '../constants/routes'

// TODO: Wait for Twitch to add more APIs e.g. online and offline streamers
export const HeaderNav: FC = () => (
  <ul className={headerNavCss}>
    <li>
      <NavLink exact to={ROOT}>
        Games
      </NavLink>
    </li>
    <li>
      <NavLink exact to={STREAMS}>
        Streams
      </NavLink>
    </li>
  </ul>
)

const headerNavCss = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  a {
    color: ${DARK_BLACK};
    margin: 0 5px;
    padding: 0 5px;
    text-decoration: none;
    transition: border-bottom 200ms;
  }

  a:hover {
    text-decoration: none;
    border-bottom: 3px solid ${TWITCH_PURPLE};
  }

  a.active {
    font-weight: 700;
    border-bottom: 3px solid ${TWITCH_PURPLE};
  }
`
