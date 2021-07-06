import {
  API_GET_STREAMS,
  API_GET_TOP_GAMES,
  CLIENT_ID,
  GAMES_PER_CALL,
  STREAMS_PER_CALL,
} from 'constants/twitchRoutes'

import axios from 'axios'

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
      options: {
        after,
        first,
        game_id: gameIds.length > 0 ? gameIds.join(',') : null,
      },
      url: API_GET_STREAMS,
    }),

  getTopGames: (
    { after = '', first = GAMES_PER_CALL }: IGetTopGamesOptions = {
      after: '',
      first: STREAMS_PER_CALL,
    },
  ) =>
    dispatch({
      options: {
        after,
        first,
      },
      url: API_GET_TOP_GAMES,
    }),
}

const dispatch = ({ options, url }: IDispatchOptions, method = 'get') =>
  // @ts-ignore TODO: fix types
  axios({
    headers: { 'Client-ID': CLIENT_ID },
    method,
    responseType: 'json',
    url,
    validateStatus(status: number) {
      return (status >= 200 && status < 300) || status === 404
    },
    ...getDataOrParams(options, method),
    cancelToken: cancelTokenSource.token,
    // TODO: fix types
  }).then((response: any) => response.data)
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
