/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';

import { DARK_BLACK, TWITCH_PURPLE } from 'src/features/constants/colors';
import { ALL, OFFLINE, ONLINE } from 'src/features/constants/routes';

class HeaderNav extends Component {
  render() {
    return (
      <ul className={headerNav}>
        <li>
          <NavLink to={ALL}>All</NavLink>
        </li>
        <li>
          <NavLink to={ONLINE}>Online</NavLink>
        </li>
        <li>
          <NavLink to={OFFLINE}>Offline</NavLink>
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
