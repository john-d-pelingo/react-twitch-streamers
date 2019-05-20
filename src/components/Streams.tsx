import React, { FC } from 'react'
import { css } from 'emotion'
import _flowRight from 'lodash/flowRight'

import { IStream } from '../entities/stream'
import withInfiniteScroll from '../hocs/withInfiniteScroll'
import { getThumbnail, getUsername } from '../utils/functions'
import { StreamCard } from './StreamCard'

interface IStreamsProps {
  streams: IStream[]
}

export const Streams: FC<IStreamsProps> = ({ streams }) => (
  <div className={streamsCss}>
    {streams.map(streamer => {
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

const streamsCss = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`

export const StreamsConnected = _flowRight(
  withInfiniteScroll({
    list: 'streams',
    onEndScroll: 'onEndScroll',
    wait: 1000,
  }),
)(Streams)
