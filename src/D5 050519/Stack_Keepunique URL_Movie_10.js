// #10 Keep a unique detail URL for each TV show, to disting across multi-shows using routing
//Disting using props.id OR use templ literal {`/${props.id}`}

import React from 'react';
import {Link} from 'react-router-dom';

export default function Stack(props) {
    return(
        <Link to={'/' + props.id} className='item'> 
           <img src={props.logo} alt={props.name + ' logo'} />
           <div className='overlay'>
              <h2>{props.name}</h2>
           </div>
        </Link>
    );
}
