
import './keys.css'
import React from 'react';

const Keys = ({calcMemo: {value, setValue, prevValue, setPrevValue}}) => {

  const numberClick = event => {
    let sign = event.target.innerText.toString()
    if (value.length > 9) return
    if (value === '0' || value == '') {
      if (sign === '.') setValue('0.')
      else setValue(sign)
    }
    else {
      if (sign === '.' & value.includes(sign)) return
      setValue(value + sign)
    }
  }

  const operationClick = event => {
    let operation = event.target.innerText.toString()
    if (prevValue === '') {
      setPrevValue(value + operation)
      setValue('')
      return
    }
    if (value == '' || value == '-') {
      if (operation == '-') {
        setValue('-')
        return
      } else {
        setValue('')
        setPrevValue(prevValue.slice(0, -1) + operation)
        return
      }
    }
    let result = computeOperation()
    setPrevValue(result + operation)
    setValue('')
  }

  const computeOperation = () => {
    let result
    let a = parseFloat(prevValue), b = parseFloat(value)
    if (isNaN(a) || isNaN(b)) return
    switch (prevValue[prevValue.length - 1]) {
      case '+':
        result = a + b
        break;
      case '-':
        result = a - b
        break;
      case 'x':
        result = a * b
        break;
      case '/':
        result = a / b
        break;
      default:
        return
    }
    return result.toString().slice(0, 10)
  }

  const handleEquals = () => {
    let result = computeOperation()
    if (result !== undefined) {
      setValue(result)
      setPrevValue('')
    }
  }

  const deleteNum = () => {
    setValue(value.slice(0, -1))
  }

  const reset = () => {
    setValue('0')
    setPrevValue('')
  }

  return (
    <div id='keys'>
      <button id='one' onClick={numberClick}>1</button>
      <button id='two' onClick={numberClick}>2</button>
      <button id='three' onClick={numberClick}>3</button>
      <button id='four' onClick={numberClick}>4</button>
      <button id='five' onClick={numberClick}>5</button>
      <button id='six' onClick={numberClick}>6</button>
      <button id='seven' onClick={numberClick}>7</button>
      <button id='eight' onClick={numberClick}>8</button>
      <button id='nine' onClick={numberClick}>9</button>
      <button id='zero' onClick={numberClick}>0</button>
      <button id='decimal' onClick={numberClick}>.</button>

      <button id='add' onClick={operationClick}>+</button>
      <button id='subtract' onClick={operationClick}>-</button>
      <button id='multiply' onClick={operationClick}>x</button>
      <button id='divide' onClick={operationClick}>/</button>


      <button id='equals' onClick={handleEquals}>=</button>
      <button id='clear' onClick={reset} data-reset>Reset</button>
      <button id='del' onClick={deleteNum}>Del</button>

    </div>
  )
}

export default Keys;
