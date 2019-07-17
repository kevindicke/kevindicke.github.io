import React from 'react';
import logo from './Assets/Images/computer.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/px-vw">PX-VW</a>
      </nav>
      <header className="App-header">
        <img src="http://giphygifs.s3.amazonaws.com/media/13HBDT4QSTpveU/giphy.gif" className="App-logo" alt="logo" />
        <p>
          Kevin Dicke<br/>Master Developer
        </p>
      </header>
    </div>
  );
}

export default App;
