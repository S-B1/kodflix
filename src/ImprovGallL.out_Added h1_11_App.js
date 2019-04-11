// #11 Improve Gallery Layout for lge screen

import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MovieGallery from './MovieGallery';
import Details from './Details';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <h1>Welcome to my Movie Gallery</h1> 
          <Route exact path='/' component={MovieGallery} />
          <Route exact path='/:details' component={Details} />
        </div >
      </Router>
    );
  }
}
//added a <h1>

export default App;
