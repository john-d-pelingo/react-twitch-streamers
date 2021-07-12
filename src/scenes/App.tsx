import { css } from '@emotion/css'
import { FC } from 'react'
import { Route } from 'react-router-dom'

import { ErrorBoundary } from '../components/ErrorBoundary'
import { HeaderNav } from '../components/HeaderNav'
import { TwitchLogo } from '../components/TwitchLogo'
import { STREAMS, GAME, ROOT } from '../constants/routes'

import { GamesProvider } from './GamesProvider'
import { StreamsProvider } from './StreamsProvider'

export const App: FC = () => (
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
        render={({ match, ...rest }) => (
          <StreamsProvider
            gameId={match.params.gameId}
            match={match}
            {...rest}
          />
        )}
      />
    </div>
  </ErrorBoundary>
)

const appCss = css`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  padding: 40px 20px;
`
