import { render } from '@testing-library/react'

import Home from './'

test('renders component correctly', () => {
  const { getByText } = render(<Home />)
  const textElement = getByText('Disney')
  expect(textElement).toBeInTheDocument()
})
