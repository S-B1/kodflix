import React, { Component } from 'react';
import IronManLogo from './IronMan_logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={IronManLogo} alt='IronMan logo' />
      </div>
    );
  }
}

export default App;