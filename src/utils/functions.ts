import _intersectionBy from 'lodash/intersectionBy'
import _takeRight from 'lodash/takeRight'
import _xorBy from 'lodash/xorBy'

import { GAMES_PER_CALL } from 'constants/twitchRoutes'

const getThumbnail = (
  thumbnailUrl: string,
  { height, width }: { height: number; width: number },
) => thumbnailUrl.replace(/{width}x{height}/i, `${width}x${height}`)

const getUsername = (thumbnailUrl: string) => {
  const liveUser = 'live_user_'
  const indexOfLiveUser = thumbnailUrl.indexOf(liveUser)

  const widthHeight = '-{width}x{height}'
  const indexOfWidthHeight = thumbnailUrl.indexOf(widthHeight)

  return thumbnailUrl.substring(
    indexOfLiveUser + liveUser.length,
    indexOfWidthHeight,
  )
}

// TODO: type any
const removeDuplicates = (
  oldData: any[],
  newData: any[],
  upTo = GAMES_PER_CALL,
) => {
  const intersectedData = _intersectionBy(
    _takeRight(oldData, upTo),
    newData,
    'id',
  )

  if (intersectedData.length > 0) {
    return _xorBy(newData, intersectedData, 'id')
  }

  return newData
}

export { getThumbnail, getUsername, removeDuplicates }
