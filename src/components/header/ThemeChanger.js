import React from 'react';
import './themechanger.css'

const ThemeChanger = () => {

  const handleClick = event => {
    let theme = event.target.innerText.toString()
    document.body.dataset.theme = 'theme-' + theme
    let slider = document.querySelector('#slider')
    slider.className = ''

    if (theme === '2') slider.className = 'pos-2'
    if (theme === '3') slider.className = 'pos-3'
  }
  return (
    <div id='changer'>
      <p>theme</p>
      <div className='themes'>
        <div>
          <button onClick={handleClick} className='theme-btn'>1</button>
          <button onClick={handleClick} className='theme-btn'>2</button>
          <button onClick={handleClick} className='theme-btn'>3</button>
        </div>
        <span id='slider'></span>
      </div>
    </div>
  )
}

export default ThemeChanger;
