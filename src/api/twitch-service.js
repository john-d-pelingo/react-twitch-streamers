/* eslint-disable camelcase */
import axios from 'axios';

import {
  API_GET_STREAMS,
  API_GET_TOP_GAMES,
  CLIENT_ID,
  GAMES_PER_CALL,
  STREAMS_PER_CALL
} from 'src/constants/twitch-routes';

const { CancelToken } = axios;
const cancelTokenSource = CancelToken.source();

const api = {
  getStreams: ({ after, first = STREAMS_PER_CALL, gameIds = [] } = {}) =>
    dispatch({
      url: API_GET_STREAMS,
      options: {
        after,
        first,
        game_id: gameIds.length > 0 ? gameIds.join(',') : null
      }
    }),

  getTopGames: ({ after, first = GAMES_PER_CALL } = {}) =>
    dispatch({
      url: API_GET_TOP_GAMES,
      options: {
        after,
        first
      }
    })
};

const dispatch = ({ options, url }, method = 'get') =>
  axios({
    headers: { 'Client-ID': CLIENT_ID },
    method,
    responseType: 'json',
    url,
    validateStatus(status) {
      return (status >= 200 && status < 300) || status === 404;
    },
    ...getDataOrParams(options, method),
    cancelToken: cancelTokenSource.token
  }).then(response => response.data);
// .then(response => response)
// TODO: Better Error Handling
// eslint-disable-next-line no-console
// Error will be handled by component with componentDidCatch
// .catch(error => console.error(`[Axios] ${error}`, new Error().stack));

const getDataOrParams = (options, method) => {
  switch (method) {
    case 'get':
      return {
        params: {
          ...options
        }
      };

    case 'post':
    case 'put':
      return {
        data: {
          ...options
        }
      };

    default:
      return {};
  }
};

// =======
// EXPORTS
// =======

export { cancelTokenSource, dispatch, getDataOrParams };
export default api;
