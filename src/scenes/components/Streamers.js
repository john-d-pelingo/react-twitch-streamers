import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import StreamerCard from './StreamerCard';

class Streamers extends Component {
  static propTypes = {
    streamers: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className={streamers}>
        {this.props.streamers.map(streamer => (
          <StreamerCard
            key={streamer.id}
            streamDescription={streamer.description}
            streamImage={streamer.image}
            streamLink={streamer.link}
            username={streamer.username}
          />
        ))}
      </div>
    );
  }
}

// =======
// STYLING
// =======

const streamers = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export default Streamers;
