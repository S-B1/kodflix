// #10 Keep a unique detail URL for each TV show, to disting across multi-shows using routing

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
          <Route exact path='/' component={MovieGallery} />
          <Route exact path='/:details' component={Details} />
        </div >
      </Router>
    );
  }
}


export default App;