import _intersectionBy from 'lodash/intersectionBy';
import _takeRight from 'lodash/takeRight';
import _xorBy from 'lodash/xorBy';

import { GAMES_PER_CALL } from 'src/constants/twitch-routes';

const getThumbnail = (thumbnailUrl, { height, width }) =>
  thumbnailUrl.replace(/{width}/i, width).replace(/{height}/i, height);

const getUsername = thumbnailUrl => {
  const liveUser = 'live_user_';
  const indexOfLiveUser = thumbnailUrl.indexOf(liveUser);

  const widthHeight = '-{width}x{height}';
  const indexOfWidthHeight = thumbnailUrl.indexOf(widthHeight);

  return thumbnailUrl.substring(
    indexOfLiveUser + liveUser.length,
    indexOfWidthHeight
  );
};

const removeDuplicates = (oldData, newData, upTo = GAMES_PER_CALL) => {
  const intersectedData = _intersectionBy(
    _takeRight(oldData, upTo),
    newData,
    'id'
  );

  if (intersectedData.length > 0) {
    return _xorBy(newData, intersectedData, 'id');
  }

  return newData;
};

export { getThumbnail, getUsername, removeDuplicates };
