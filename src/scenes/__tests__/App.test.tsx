import 'jest-dom/extend-expect'

import React from 'react'
import { render } from '@testing-library/react'

describe('Dummy component test', () => {
  it('renders', () => {
    const { getByLabelText } = render(
      <div aria-label="Dummy component">Hello World!</div>,
    )

    const dummyElement = getByLabelText('Dummy component')

    expect(dummyElement).toHaveTextContent('Hello World!')
  })
})
