/* eslint-disable camelcase */
import axios from 'axios';

import {
  API_GET_STREAMS,
  API_GET_TOP_GAMES,
  CLIENT_ID,
  GAMES_PER_CALL,
  STREAMS_PER_CALL
} from 'src/constants/twitch-routes';

const api = {
  getStreams: ({ first = STREAMS_PER_CALL, gameIds } = {}) =>
    dispatch({
      url: API_GET_STREAMS,
      options: {
        first,
        game_id: gameIds.join(',')
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
    ...getDataOrParams(options, method)
  })
    .then(response => response.data)
    // .then(response => response)
    // eslint-disable-next-line no-console
    .catch(error => console.error(error, new Error().stack));

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

export { dispatch, getDataOrParams };
export default api;
