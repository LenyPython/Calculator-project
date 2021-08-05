
import React from 'react';
import './display.css'

const Display = ({value, prevValue}) => {
  return (
    <div id='display'>
      <p className='prevValue'> {prevValue}</p>
      <p className='value'> {value}</p>
    </div>
  )
}

export default Display;
