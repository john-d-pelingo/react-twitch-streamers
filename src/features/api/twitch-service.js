import axios from 'axios';

import {
  API_GET_TOP_GAMES,
  CLIENT_ID
} from 'src/features/constants/twitch-routes';

const api = {
  getTopGames: first =>
    dispatch({
      url: API_GET_TOP_GAMES,
      options: {
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
