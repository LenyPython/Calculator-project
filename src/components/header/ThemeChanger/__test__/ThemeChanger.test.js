import {render, screen} from '@testing-library/react'
import ThemeChanger from '../ThemeChanger'

const getThemeButtons = () => {
  render(<ThemeChanger />)
  return screen.getAllByRole('button')
}

const getElement = query => {
  const component = render(<ThemeChanger />)
  const element = component.container.querySelector(query)
  return element

}

test('Check if there is an theme changer container with id "changer"',
  () => {
    expect(getElement('#changer')).toBeInTheDocument()
  })

test('Check if slider with id "slider" exits', () => {
  expect(getElement('#slider')).toBeInTheDocument()


})

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

test('Buttons have correct labels', () => {
  render(<ThemeChanger />)
  let currentButton = screen.getByRole('button', {name: '1'})
  expect(currentButton).toBeInTheDocument()
  currentButton = screen.getByRole('button', {name: '2'})
  expect(currentButton).toBeInTheDocument()
  currentButton = screen.getByRole('button', {name: '3'})
  expect(currentButton).toBeInTheDocument()
})

