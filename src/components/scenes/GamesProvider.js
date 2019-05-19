import React, { Component } from 'react'

import { api /*, cancelTokenSource */ } from '../../api/twitch-service'
import { removeDuplicates } from '../../utils/functions'

import Games from './components/Games'
import Loader from './components/Loader'

class GamesProvider extends Component {
  state = {
    isPending: true,
    games: [],
  }

  async componentDidMount() {
    try {
      const response = await api.getTopGames()

      if (!this.unmounted && response !== undefined) {
        this.setState({
          cursor: response.pagination.cursor,
          games: response.data,
          isPending: false,
        })
      }
    } catch (error) {
      // Error happens in a Promise callback which throws and then gets
      // swallowed. Thus, The ErrorBoundary component cannot catch the error.
      // See: https://github.com/facebook/react/issues/11334
      console.error(`[${GamesProvider.name} component]: ${error}`)
    }
  }

  componentWillUnmount() {
    // if (this.state.isPending) {
    //   cancelTokenSource.cancel(
    //     `${GamesProvider.name} will unmount while fetching data`
    //   );
    // }
    this.unmounted = true
  }

  unmounted = false

  handleEndScroll = async () => {
    try {
      const { cursor, games } = this.state

      if (cursor) {
        const response = await api.getTopGames({ after: cursor })

        this.setState(prevState => ({
          cursor: response.pagination.cursor,
          games: [
            ...prevState.games,
            ...removeDuplicates(games, response.data, 20),
          ],
        }))
      }
    } catch (error) {
      // Error happens in a Promise callback which throws and then gets
      // swallowed. Thus, The ErrorBoundary component cannot catch the error.
      // See: https://github.com/facebook/react/issues/11334
      console.error(`[${GamesProvider.name} component]: ${error}`)
    }
  }

  render() {
    const { games, isPending } = this.state

    // TODO: Try react async-rendering and suspense
    if (isPending) {
      return <Loader />
    }

    return (
      <Games
        isPending={isPending}
        games={games}
        onEndScroll={this.handleEndScroll}
      />
    )
  }
}

export default GamesProvider
