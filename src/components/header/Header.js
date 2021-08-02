import './header.css'
import React from 'react';
import ThemeChanger from './ThemeChanger'

const Header = () => {
  return (
    <div id='name-and-themes'>
      <h1>calc</h1>
      <ThemeChanger />
    </div>
  )
}

export default Header;

