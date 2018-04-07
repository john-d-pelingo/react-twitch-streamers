/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api /*, { cancelTokenSource }*/ from 'src/api/twitch-service';
import { removeDuplicates } from 'src/utils/functions';

import Loader from './components/Loader';
import Streams from './components/Streams';

class StreamsProvider extends Component {
  static propTypes = {
    gameId: PropTypes.string
  };

  static defaultProps = {
    gameId: ''
  };

  state = {
    isPending: true,
    streams: []
  };

  async componentDidMount() {
    try {
      const gameIds = this.props.gameId !== '' ? [this.props.gameId] : [];
      const response = await api.getStreams({ gameIds });

      if (!this.unmounted && response !== undefined) {
        this.setState({
          cursor: response.pagination.cursor,
          isPending: false,
          streams: response.data
        });
      }
    } catch (error) {
      // TODO: Try with componentDidCatch
      console.error(`[${StreamsProvider.name} component]: ${error}`);
    }
  }

  componentWillUnmount() {
    // if (this.state.isPending) {
    //   // TODO: Try with componentDidCatch
    //   cancelTokenSource.cancel(
    //     `${StreamsProvider.name} will unmount while fetching data`
    //   );
    // }
    this.unmounted = true;
  }

  unmounted = false;

  handleEndScroll = async () => {
    try {
      const { cursor, streams } = this.state;

      if (cursor) {
        const gameIds = this.props.gameId !== '' ? [this.props.gameId] : [];
        const response = await api.getStreams({
          after: cursor,
          gameIds
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
      console.error(`[${StreamsProvider.name} component]: ${error}`);
    }
  };

  render() {
    const { isPending, streams } = this.state;

    // TODO: Try react async-rendering and suspense
    if (isPending) {
      return <Loader />;
    }

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
