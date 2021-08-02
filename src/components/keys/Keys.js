
import './keys.css'
import React from 'react';

const Keys = ({setValue}) => {
  return (
    <div id='keys'>
      <button id='one' data-number>1</button>
      <button id='two' data-number>2</button>
      <button id='three' data-number>3</button>
      <button id='four' data-number>4</button>
      <button id='five' data-number>5</button>
      <button id='six' data-number>6</button>
      <button id='seven' data-number>7</button>
      <button id='eight' data-number>8</button>
      <button id='nine' data-number>9</button>
      <button id='zero' data-number>0</button>

      <button id='add' data-operation>+</button>
      <button id='subtract' data-operation>-</button>
      <button id='multiply' data-operation>*</button>
      <button id='divide' data-operation>/</button>

      <button id='decimal' data-operation>.</button>

      <button id='equals' data-operation>=</button>
      <button id='reset' data-operation>Reset</button>
      <button id='del' data-operation>Del</button>

    </div>
  )
}

export default Keys;
