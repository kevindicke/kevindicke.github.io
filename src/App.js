import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
// import logo from './Assets/Images/computer.svg';
import pxvw from './Components/px-vw'
import home from './Components/Home'
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
     <div>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/convert">PX-VW</Link>
     </nav>
      <Route exact path="/" component={Home} />
      <Route path="/convert" component={Convert} />
     </div>
    </HashRouter>
  );
}

const Home = () => home()
const Convert = () => pxvw()

export default App;
