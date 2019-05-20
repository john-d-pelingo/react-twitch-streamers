import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { css } from 'emotion'

import ErrorBoundary from '../../components/ErrorBoundary'
import { STREAMS, GAME, ROOT } from '../../constants/routes'
import GamesProvider from '../GamesProvider'
import StreamsProvider from '../StreamsProvider'
import HeaderNav from './components/HeaderNav'
import TwitchLogo from './components/TwitchLogo'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className={appCss}>
          <section>
            <TwitchLogo />
            <HeaderNav />
          </section>

          <Route exact path={ROOT} component={GamesProvider} />
          <Route exact path={STREAMS} component={StreamsProvider} />
          <Route
            exact
            path={`${GAME}/:gameId`}
            render={({ match }) => (
              <StreamsProvider gameId={match.params.gameId} />
            )}
          />
        </div>
      </ErrorBoundary>
    )
  }
}

const appCss = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  padding: 40px 20px;
`

export default App
