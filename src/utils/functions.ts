// TODO: use ~ for route to know that it's not from node_modules
import { GAMES_PER_CALL } from 'constants/twitchRoutes'

import {
  intersectionBy as _intersectionBy,
  takeRight as _takeRight,
  xorBy as _xorBy,
} from 'lodash'

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

const removeDuplicates = (
  // TODO: fix any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  oldData: any[],
  // TODO: fix any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
