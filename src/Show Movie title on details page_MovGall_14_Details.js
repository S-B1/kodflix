// 14 Show the TV show title on the details page

import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import MovGall_get from './MovGall_get';

export default class Message extends Component {
  
  constructor() {
      super();
      this.state = {
          MovGall: {}
      };
  }
  
  componentDidMount() { //renaming Details to Movie Gallery (MovieGallId)
      let MovieGallId = this.props.match.params.MovieGallId;
      let MovGall = MovGall_get()
        .find((MovGall) => MovGall.id === MovieGallId); //callback Fn invoked until found
      this.setState ({
          MovGall: MovGall //obj same for k:v (shorthand MovGall)
      });
  }
  
  render () {
      return (
          <div>
              <h1>{this.state.MovGall.name}</h1> 
              <Link to='/'>Back to home page</Link>
          </div>
      );
  }
}
