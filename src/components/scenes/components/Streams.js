import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import _flowRight from 'lodash/flowRight'

import withInfiniteScroll from '../../../hocs/withInfiniteScroll'
import { getThumbnail, getUsername } from '../../../utils/functions'

import StreamCard from './StreamCard'

class CleanStreams extends Component {
  static propTypes = {
    streams: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className={streams}>
        {this.props.streams.map(streamer => {
          const username = getUsername(streamer.thumbnail_url)
          return (
            <StreamCard
              key={streamer.id}
              link={`https://www.twitch.tv/${username}`}
              thumbnail={getThumbnail(streamer.thumbnail_url, {
                height: 200,
                width: 340,
              })}
              title={streamer.title}
              username={username}
            />
          )
        })}
      </div>
    )
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
`

// =======
// CONNECT
// =======

const Streams = _flowRight(
  withInfiniteScroll({
    list: 'streams',
    onEndScroll: 'onEndScroll',
    wait: 1000,
  }),
)(CleanStreams)

// =======
// EXPORTS
// =======

export default Streams
