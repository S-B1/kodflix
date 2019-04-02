import React, { Component } from 'react';
import JScriptLogo from './Images/JSlogo.jpeg';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
            <img src={JScriptLogo} alt='Javascript logo'/>
            <br /><br /><br />
            <div className="container">
              <div className='item'>ReactJS</div>
              <div className='item'>HTML5</div>
              <div className='item'>CSS</div>
            </div>
            <div className="container">
              <div className='item'>NodeJS</div>
              <div className='item'>Mongo</div>
              <div className='item'>Heroku</div>
            </div>
          </div>
      );
  }
}

export default App;
