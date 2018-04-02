/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';

import api, { cancelTokenSource } from 'src/api/twitch-service';
import { removeDuplicates } from 'src/utils/functions';

import Games from './components/Games';

class GamesProvider extends Component {
  state = {
    isPending: true,
    games: []
  };

  async componentDidMount() {
    try {
      const response = await api.getTopGames();

      if (response !== undefined) {
        this.setState({
          cursor: response.pagination.cursor,
          games: response.data,
          isPending: false
        });
      }
    } catch (error) {
      // TODO: Try with componentDidCatch
      console.error(error);
    }
  }

  componentWillUnmount() {
    if (this.state.isPending) {
      // TODO: Try with componentDidCatch
      cancelTokenSource.cancel(
        `${GamesProvider.name} will unmount while fetching data`
      );
    }
  }

  handleEndScroll = async () => {
    try {
      const { cursor, games } = this.state;

      if (cursor) {
        const response = await api.getTopGames({ after: cursor });

        this.setState(prevState => ({
          cursor: response.pagination.cursor,
          games: [
            ...prevState.games,
            ...removeDuplicates(games, response.data, 20)
          ]
        }));
      }
    } catch (error) {
      // TODO: Try with componentDidCatch
      console.error(error);
    }
  };

  render() {
    const { games, isPending } = this.state;

    return (
      <Games
        isPending={isPending}
        games={games}
        onEndScroll={this.handleEndScroll}
      />
    );
  }
}

export default GamesProvider;
