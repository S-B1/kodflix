import React, { Component } from 'react';
import JScriptLogo from './Images/JSlogo.jpeg';

import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
            <img src={JScriptLogo} alt='Javascript logo' />
               </div>
      );
  }
}

export default App;