import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Display from './components/display/Display'
import Keys from './components/keys/Keys'

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Keys />
    </div>
  );
}

export default App;
