import axios from 'axios'

import {
  API_GET_STREAMS,
  API_GET_TOP_GAMES,
  CLIENT_ID,
  GAMES_PER_CALL,
  STREAMS_PER_CALL,
} from 'constants/twitchRoutes'

export interface IGetStreamsOptions {
  after?: string
  first?: number
  gameIds?: string[]
}

export interface IGetTopGamesOptions {
  after?: string
  first?: number
}

export interface IDispatchOptions {
  options: {
    after: string
    first: number
    game_id?: string | null
  }
  url: string
}

const { CancelToken } = axios
const cancelTokenSource = CancelToken.source()

const api = {
  getStreams: (
    {
      after = '',
      first = STREAMS_PER_CALL,
      gameIds = [],
    }: IGetStreamsOptions = {
      after: '',
      first: STREAMS_PER_CALL,
      gameIds: [],
    },
  ) =>
    dispatch({
      url: API_GET_STREAMS,
      options: {
        after,
        first,
        game_id: gameIds.length > 0 ? gameIds.join(',') : null,
      },
    }),

  getTopGames: (
    { after = '', first = GAMES_PER_CALL }: IGetTopGamesOptions = {
      after: '',
      first: STREAMS_PER_CALL,
    },
  ) =>
    dispatch({
      url: API_GET_TOP_GAMES,
      options: {
        after,
        first,
      },
    }),
}

const dispatch = ({ options, url }: IDispatchOptions, method = 'get') =>
  axios({
    headers: { 'Client-ID': CLIENT_ID },
    method,
    responseType: 'json',
    url,
    validateStatus(status) {
      return (status >= 200 && status < 300) || status === 404
    },
    ...getDataOrParams(options, method),
    cancelToken: cancelTokenSource.token,
  }).then(response => response.data)
// .then(response => response)
// Error will be handled by the component calling this
// Since we don't have a state management library, this .catch essentiailly does
// nothing
// .catch(error => console.error(`[Axios] ${error}`, new Error().stack));

const getDataOrParams = (
  options: IDispatchOptions['options'],
  method: string,
) => {
  switch (method) {
    case 'get':
      return {
        params: {
          ...options,
        },
      }

    case 'post':
    case 'put':
      return {
        data: {
          ...options,
        },
      }

    default:
      return {}
  }
}

export { api, cancelTokenSource, dispatch, getDataOrParams }