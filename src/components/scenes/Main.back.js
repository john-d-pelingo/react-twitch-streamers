import React, { Component } from 'react';
import { css } from 'emotion';

import Streamers from './components/Streamers';
import Loader from './components/Loader';

class Main extends Component {
  state = {
    isPending: true,
    streamers: []
  };

  // Fake loading from database
  componentDidMount() {
    this.fakeUploadId = setTimeout(() => {
      this.setState({
        isPending: false,
        streamers: [
          {
            id: 'neko-0',
            description:
              'The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo',
            image:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg',
            link: 'https://thebabas.babas',
            username: 'Neko'
          },
          {
            id: 'neko-1',
            description:
              'The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo',
            image:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg',
            link: 'https://thebabas.babas',
            username: 'Neko'
          },
          {
            id: 'neko-2',
            description:
              'The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo',
            image:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg',
            link: 'https://thebabas.babas',
            username: 'Neko'
          },
          {
            id: 'neko-3',
            description:
              'The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo',
            image:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg',
            link: 'https://thebabas.babas',
            username: 'Neko'
          },
          {
            id: 'neko-4',
            description:
              'The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo',
            image:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg',
            link: 'https://thebabas.babas',
            username: 'Neko'
          },
          {
            id: 'neko-5',
            description:
              'The cat is a lie booooooooooooooooooooooooooooooooooooooooooooooo',
            image:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/20aa6279-f4f6-40ca-a9a3-2cae5920fed7-profile_image-300x300.jpg',
            link: 'https://thebabas.babas',
            username: 'Neko'
          }
        ]
      });
    }, Math.random() * 1500);
  }

  componentWillUnmount() {
    if (this.fakeUploadId) {
      window.clearTimeout(this.fakeUploadId);
      this.fakeUploadId = null;
    }
  }

  fakeUploadId = null;

  render() {
    if (this.state.isPending) {
      return <Loader />;
    }

    return (
      <main className={main}>
        <Streamers streamers={this.state.streamers} />
      </main>
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
