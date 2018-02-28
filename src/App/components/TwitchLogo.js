import React from 'react';
import { css } from 'emotion';

const TwitchLogo = () => (
  <div className={twitchLogo}>
    <a href="https://www.twitch.tv/" rel="noopener noreferrer" target="_blank">
      <svg
        className="svg-logo"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 255 86"
      >
        <defs />
        <title>Twitch</title>
        <path
          className="cls-1"
          fill="#6441A4"
          d="M331,79H315V66H287L274,79H260l-8,7V79H239V65H189V79H129L115,65H88v59l13,13,23,14h18v-4l7,4h36l6-8,1,8h23l1-8,8,8h21l1-8,7,8h23l9-8v8h11.89L308,143v8h14l21-16V91ZM123,101H109v14h14v16.11H104L94,121V71h15V85h14v16Zm66,19-10,11-50.11.11L129,85h16v30h6V85h16v30h6V85h16v35Zm22,11H195V85h16v46Zm0-52H195V71h16v8Zm35,22H233v14h13v16H227l-10-10V71h16V85h13v16Zm41,0H267v14h20v16H262l-10-10V95l10-10h25v16Zm50,30H323V101H308v30H293V72h16V85h19l9,10v36Z"
          transform="translate(-88 -65)"
        />
      </svg>
    </a>
  </div>
);

// =======
// STYLING
// =======

const twitchLogo = css`
  text-align: center;
  margin-bottom: 20px;

  .svg-logo {
    height: 50px;
  }
`;

export default TwitchLogo;
