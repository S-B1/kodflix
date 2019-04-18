// 14 Show the TV show title on the details page
//React component JS Fns-stateless components

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
          <Route exact path='/:MovieGallId' component={Details} /> 
        </div >
      </Router>
    );
  }
}

export default App;
