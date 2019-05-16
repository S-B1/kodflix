
import React, {Component} from 'react';
import { Link , Redirect} from 'react-router-dom';
import MovGall_get from './MovGall_get';

export default class Message extends Component {
  constructor() {
      super();
      this.state = {
          MovGall: {} 
      };
  }
  
  componentDidMount() { 
      fetch('/rest/shows')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });

      let MovieGallId = this.props.match.params.MovieGallId;
      let MovGall = MovGall_get()
        .find((MovGall) => MovGall.id === MovieGallId); 
      this.setState ({MovGall}); 
  }
  
  render () {
      if(this.state.MovGall === undefined) {
            return <Redirect to='/not-found' />;
      } else {
            return (
                <div className='Details'>
                    <h1>{this.state.MovGall.name}</h1>
                    <div className='container'>
                        <div>{this.state.MovGall.synopsis}</div>
                        <img
                            src={this.state.MovGall.logo}  
                            alt={this.state.MovGall.name} />
                    </div>
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }
    }
}
