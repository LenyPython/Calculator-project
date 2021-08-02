
import React from 'react';
import './display.css'

const Display = ({value}) => {
  return (
    <div id='display'>
      <p className='value'> {value}</p>
    </div>
  )
}

export default Display;
