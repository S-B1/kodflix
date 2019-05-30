
import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
// import MovGall_get from './MovGall_get';
import './Details.css';

export default class Details extends Component {
  constructor() {
      super();
      this.state = {
          MovGall: {} 
      };
  }
  
  componentDidMount() { 
      fetch('/rest/MovGall')
        .then(response => response.json())
        .then(MovGalls => {
            let MovGallId = this.props.match.params.MovGallId;
            let MovGall = MovGalls.find(MovGall => MovGallId === MovGall.id); 
            this.setState ({ MovGall }); 
        });
  }
  
  render () {
    let MovGall = this.state.MovGall;  
    if(MovGall) {
            return MovGall.id ?
                <DetailsList MovGall={MovGall} /> :
                <div />;
    } else {
        return <Redirect to='/not-found' />;
    }
}
}

function DetailsList({ MovGall }) {
    return (
        <div className='details'>
            <h1>{MovGall.title}</h1>
            <div className='details_list'>
                <h3 className='details_list_synopsis'>
                    { MovGall.synopsis }
                </h3>
                <div className='details_list_cover'>
                <img
                    src={require(`./Images/${MovGall.id}.svg`)}  
                    alt={MovGall.title} />
                </div>
            </div>
        </div>
    );
}
