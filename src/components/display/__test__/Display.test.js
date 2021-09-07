import {render, screen} from '@testing-library/react'
import Display from '../Display'

const value = '5'
const prevValue = '10+'
test("If element with id 'display' exists", () => {
  const dom = render(<Display calcMemo={{value, prevValue}} />)
  const wrapper = dom.container.querySelector('#display')
  expect(wrapper).toBeInTheDocument()
}
)

test('If correct values are displayed', () => {
  render(<Display calcMemo={{value, prevValue}} />)
  expect(screen.getByText(value)).toBeInTheDocument()
  expect(screen.getByText(prevValue)).toBeInTheDocument()
}
)
