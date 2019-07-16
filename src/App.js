import React from 'react';
import logo from './Assets/Images/computer.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kevin Dicke<br/>Master Developer
        </p>
        <a href="/px-vw">PX to VW Converter</a>
      </header>
    </div>
  );
}

export default App;
