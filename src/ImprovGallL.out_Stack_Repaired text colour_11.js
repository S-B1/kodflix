// #11 Improve Gallery Layout for lge screen


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
//due to the Link, the colours for the names were changed by the browser