import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import Header from './components/header/Header'
import Display from './components/display/Display'
import Keys from './components/keys/Keys'

function App() {
  const [value, setValue] = useState('0')
  useEffect(() => null, [])


  return (
    <div className="App">
      <Header />
      <Display
        value={value}
      />
      <Keys
        setValue={setValue}
      />
    </div>
  );
}

export default App;
