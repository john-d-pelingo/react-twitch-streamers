/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from 'src/api/twitch-service';
import { removeDuplicates } from 'src/utils/functions';

import Streams from './components/Streams';

class StreamsProvider extends Component {
  static propTypes = {
    gameId: PropTypes.string.isRequired
  };

  state = {
    isPending: true,
    streams: []
  };

  async componentDidMount() {
    try {
      const response = await api.getStreams({ gameIds: [this.props.gameId] });

      this.setState({
        cursor: response.pagination.cursor,
        isPending: false,
        streams: response.data
      });
    } catch (error) {
      // TODO: Try with componentDidCatch
      console.error(error);

      this.setState({
        isPending: false
      });
    }
  }

  handleEndScroll = async () => {
    try {
      const { cursor, streams } = this.state;

      if (cursor) {
        const response = await api.getStreams({
          after: cursor,
          gameIds: [this.props.gameId]
        });

        this.setState(prevState => ({
          cursor: response.pagination.cursor,
          streams: [
            ...prevState.streams,
            ...removeDuplicates(streams, response.data, 20)
          ]
        }));
      }
    } catch (error) {
      // TODO: Try with componentDidCatch
      console.error(error);
    }
  };

  render() {
    const { isPending, streams } = this.state;

    return (
      <Streams
        isPending={isPending}
        onEndScroll={this.handleEndScroll}
        streams={streams}
      />
    );
  }
}

export default StreamsProvider;
