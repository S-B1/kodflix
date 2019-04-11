// 12 Move the covers data model to a proper front-end data
// To maintain data for UI, using data model using arr of items to layout component. 
// It will iterate on list of components.
// Rtn list 



// 13 Introduce component state
// 14 Show the TV show title on the details page



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
