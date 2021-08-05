
import './keys.css'
import React from 'react';

const Keys = ({calcMemo: {value, setValue, prevValue, setPrevValue}}) => {

  const updateValue = event => setValue(value + event.target.innerText)

  const operationClick = event => {
    if (prevValue === '') setPrevValue(value + event.target.innerText)
    else setPrevValue(computeOperation + event.target.innerText)
    setValue('0')
  }

  const computeOperation = () => '555'

  const clear = () => {
    setValue('0')
    setPrevValue('')
  }

  return (
    <div id='keys'>
      <button id='one' onClick={updateValue}>1</button>
      <button id='two' onClick={updateValue}>2</button>
      <button id='three' onClick={updateValue}>3</button>
      <button id='four' onClick={updateValue}>4</button>
      <button id='five' onClick={updateValue}>5</button>
      <button id='six' onClick={updateValue}>6</button>
      <button id='seven' onClick={updateValue}>7</button>
      <button id='eight' onClick={updateValue}>8</button>
      <button id='nine' onClick={updateValue}>9</button>
      <button id='zero' onClick={updateValue}>0</button>
      <button id='decimal' onClick={updateValue}>.</button>

      <button id='add' onClick={operationClick}>+</button>
      <button id='subtract' onClick={operationClick}>-</button>
      <button id='multiply' onClick={operationClick}>x</button>
      <button id='divide' onClick={operationClick}>/</button>


      <button id='equals' data-equals>=</button>
      <button id='reset' onClick={clear} data-reset>Reset</button>
      <button id='del' data-delete>Del</button>

    </div>
  )
}

export default Keys;
