import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap';
import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import MemoryGame from "./components/Game/Main.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbo/>
         {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
        {/* </header> */}
        <Container>
          <MemoryGame/>
       </Container>
      </div>
    );
  }
}

export default App;
