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

export { getThumbnail, getUsername };
