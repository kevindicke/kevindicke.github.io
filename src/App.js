import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import logo from './Assets/Images/computer.svg';
import tools from './Components/Tools'
import home from './Components/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/'>
     <div>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/tools">Tools</Link>
     </nav>
      <Route exact path="/" component={Home} />
      <Route path="/tools" component={Tools} />
     </div>
    </BrowserRouter>
  );
}

const Home = () => home()
const Tools = () => tools()

export default App;
