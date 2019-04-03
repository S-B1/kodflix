// #9 Create a Gallery component to show the covers.

import React, { Component } from 'react';
import MovieGallery from './MovieGallery';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <b /><b /><b />
        <MovieGallery />
      </div >
    );
  }
}


export default App;
