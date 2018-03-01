import React, { Component } from 'react';
import { css } from 'emotion';

import StreamerCard from './components/StreamerCard';

class Main extends Component {
  render() {
    return (
      <div className={main}>
        <StreamerCard
          streamDescription="The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo"
          streamImage="https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg"
          streamLink="https://thebabas.babas"
          username="Neko"
        />
      </div>
    );
  }
}

// =======
// STYLING
// =======

const main = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (min-width: 730px) {
    max-width: 720px;
  }
`;

export default Main;
