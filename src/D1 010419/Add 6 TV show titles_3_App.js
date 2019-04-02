import React, { Component } from 'react';
/*import JScriptLogo from './Images/JSlogo.jpeg';*/
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
            <br /><br /><br />
            <div className="container"> 
              <div className='item'><h1>Mulan</h1></div>
              <div className='item'><h1>Patch Adams</h1></div>
              <div className='item'><h1>Elf</h1></div>
            </div>
            <div className="container">
              <div className='item'><h1>Shawshank Redemption</h1></div>
              <div className='item'><h1>St Elmos Fire</h1></div>
              <div className='item'><h1>Breakfast Club</h1></div>
            </div>
          </div>
      );
  }
}

export default App;
/*h1 style = "font-size: 60px;"> Heading 1</h1></div>*/