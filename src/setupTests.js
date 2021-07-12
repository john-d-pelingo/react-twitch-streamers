// add some helpful assertions
// doing this locally will remove type problems
// import '@testing-library/jest-dom/extend-expect'

import * as emotion from '@emotion/css'
import { createSerializer } from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer(emotion))

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message)
}
