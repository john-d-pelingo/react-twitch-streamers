/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';

import { DARK_BLACK, TWITCH_PURPLE } from 'src/constants/colors';
import { ALL, ROOT } from 'src/constants/routes';

// TODO: Wait for Twitch to add more APIs
// E.g. online and offline streamers
class HeaderNav extends Component {
  render() {
    return (
      <ul className={headerNav}>
        <li>
          <NavLink exact to={ROOT}>
            Games
          </NavLink>
        </li>
        <li>
          <NavLink exact to={ALL}>
            All Streamers
          </NavLink>
        </li>
      </ul>
    );
  }
}

// =======
// STYLING
// =======

const headerNav = css`
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
`;

export default HeaderNav;
