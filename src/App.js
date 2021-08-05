import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import Header from './components/header/Header'
import Display from './components/display/Display'
import Keys from './components/keys/Keys'

function App() {
  const calcMemo = useCalcMemo('0');

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);


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
