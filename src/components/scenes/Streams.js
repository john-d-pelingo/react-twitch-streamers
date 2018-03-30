/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import api from 'src/api/twitch-service';
import { getThumbnail, getUsername } from 'src/utils/functions';

import StreamCard from './components/StreamCard';
import Loader from './components/Loader';

class Streams extends Component {
  static propTypes = {
    gameId: PropTypes.string.isRequired
  };

  state = {
    isPending: true,
    streams: []
  };

  async componentDidMount() {
    const streams = await api.getStreams({ gameIds: [this.props.gameId] });

    this.setState({
      isPending: false,
      streams: streams.data
    });
  }

  render() {
    // TODO: Try react async-rendering and suspense
    if (this.state.isPending) {
      return <Loader />;
    }

    return (
      <div className={streams}>
        {this.state.streams.map(streamer => {
          const username = getUsername(streamer.thumbnail_url);
          return (
            <StreamCard
              key={streamer.id}
              link={`https://www.twitch.tv/${username}`}
              thumbnail={getThumbnail(streamer.thumbnail_url, {
                height: 200,
                width: 340
              })}
              title={streamer.title}
              username={username}
            />
          );
        })}
      </div>
    );
  }
}

// =======
// STYLING
// =======

const streams = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export default Streams;
