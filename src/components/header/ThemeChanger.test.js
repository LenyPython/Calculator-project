import {render, screen} from '@testing-library/react'
import ThemeChanger from './ThemeChanger'

const getThemeButtons = () => {
  render(<ThemeChanger />)
  return screen.getAllByRole('button')
}

test('Theme changer buttons exists', () => {
  const buttons = getThemeButtons()
  expect(buttons.length === 3).toBe(true)

})

test('Theme buttons are enabled', () => {
  const buttons = getThemeButtons()
  for (let button of buttons) {
    expect(button).toBeEnabled()
  }
})
