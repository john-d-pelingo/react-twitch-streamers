import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import StreamCard from './components/StreamCard';

class Streams extends Component {
  static propTypes = {
    streams: PropTypes.array
  };

  static defaultProps = {
    streams: []
  };

  render() {
    return (
      <div className={streams}>
        {this.props.streams.map(streamer => (
          <StreamCard
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

const streams = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export default Streams;
