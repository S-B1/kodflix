
import React from 'react';
import {Link} from 'react-router-dom';

export default function Stack(props) {
    return(
        <Link to={`/${props.id}`} className='item'> 
           <img className='stack-img' src={require(`./Images/${this.props.id}.jpeg`)} alt={props.name + ' logo'} />
           <div className='overlay'>
              <h2>{props.name}</h2>
           </div>
        </Link>
    );
}
