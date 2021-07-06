// add some helpful assertions
// doing this locally will remove type problems
// import '@testing-library/jest-dom/extend-expect'

import * as emotion from 'emotion'
import { createSerializer } from 'jest-emotion'

expect.addSnapshotSerializer(createSerializer(emotion))

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message)
}
