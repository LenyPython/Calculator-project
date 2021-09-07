import {render, screen} from '@testing-library/react'
import Header from '../Header'

test('If there is a calc heading', () => {
  render(<Header />)
  expect(screen.getByRole('heading', {name: 'calc'}))
})
