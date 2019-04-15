// 13 Introduce component state
// Stateless Fn to stateful component.

import React, {Component} from 'react';

import { Link } from 'react-router-dom';

export default class Message extends Component {
  
  constructor() {
      super();
      this.state = {
        welcomeMessage: 'Hello, this will be the details page for each Movie & TV show :)'  //display welcome msg
      };
  }
  
  componentDidMount() {
      setTimeout(() => {
        this.setState ({
          welcomeMessage: 'Coming soon! :)'  //display updated msg
      });
  }, 3000);
}
  
render () {
    return (
        <div>
            <h1>{this.state.welcomeMessage}</h1>
            <Link to='/'>Back to home page</Link>
        </div>
    );
  }
}
