import {render, fireEvent} from '@testing-library/react'
import App from '../App'
import numValues from './keyValues'

const testOperation = (el1, el2, operation) => {
  let DOM = render(<App />)
  let btn1 = DOM.container.querySelector(el1.id)
  let btn2 = DOM.container.querySelector(el2.id)
  let btnAdd = DOM.container.querySelector(operation.id)
  let btnEquals = DOM.container.querySelector('#equals')
  let displayValue = DOM.container.querySelector('.value')
  let displayPrevValue = DOM.container.querySelector('.prevValue')
  fireEvent.click(btn1)
  expect(displayValue.textContent).toBe(el1.value)
  fireEvent.click(btnAdd)
  expect(displayValue.textContent).toBe('')
  expect(displayPrevValue.textContent).toBe(el1.value + operation.sign)
  fireEvent.click(btn2)
  expect(displayValue.textContent).toBe(el2.value)
  fireEvent.click(btnEquals)
  let result = ''
  switch (operation.sign) {
    case '+':
      result = `${parseInt(el1.value) + parseInt(el2.value)}`
      break
    case '-':
      result = `${parseInt(el1.value) - parseInt(el2.value)}`
      break
    case 'x':
      result = `${parseInt(el1.value) * parseInt(el2.value)}`
      break
    case '/':
      result = `${parseInt(el1.value) / parseInt(el2.value)}`
      break
  }
  expect(displayValue.textContent).toBe(result)
  expect(displayPrevValue.textContent).toBe('')
}


describe('Simple App integration tests', () => {
  describe('Single operation tests', () => {
    test('Number clicks should display correct value and be deleted afterwards', () => {
      let DOM = render(<App />)
      let displayValue = DOM.container.querySelector('.value')
      let clearBtn = DOM.container.querySelector('#del')
      for (let button of numValues) {
        let btn = DOM.container.querySelector(button.id)
        fireEvent.click(btn)
        expect(displayValue.textContent).toBe(button.value)
        fireEvent.click(clearBtn)
        expect(displayValue.textContent).toBe('')
      }
    })
    test('1 + 2 = 3', () => {
      let op = {id: '#add', sign: '+'}
      testOperation(numValues[0], numValues[1], op)
    })
    test('9 / 3 = 3', () => {
      let op = {id: '#divide', sign: '/'}
      testOperation(numValues[8], numValues[2], op)
    })
    test('5 * 6 = 30', () => {
      let op = {id: '#multiply', sign: 'x'}
      testOperation(numValues[4], numValues[5], op)
    })
    test('8 - 7 = 1', () => {
      let op = {id: '#subtract', sign: '-'}
      testOperation(numValues[7], numValues[6], op)
    })
  })
})
