import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import Header from './components/header/Header'
import Display from './components/display/Display'
import Keys from './components/keys/Keys'

function App() {
  const calcMemo = useCalcMemo('0');
  useEffect(() => null, [])


  return (
    <div className="App">
      <Header />
      <Display
        calcMemo={calcMemo}
      />
      <Keys
        calcMemo={calcMemo}
      />
    </div>
  );
}

export default App;

const useCalcMemo = (state) => {
  const [value, setValue] = useState(state)
  const [prevValue, setPrevValue] = useState('')

  return {
    value,
    setValue,
    prevValue,
    setPrevValue
  }
}
