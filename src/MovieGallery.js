// 12 Move the covers data model to a proper front-end data
// To maintain data for UI, using data model using arr of items to layout component. 
// It will iterate on list of components.
// Rtn list 
// In JS easy to work in arr

import React from 'react';
import Stack from './Stack';
import getMovieGallery from './MovGall_get';

export default function MovieGallery() {
  return (
    <div>
      <div className="container">
        {
          getMovieGallery().map(stack => (
            <Stack 
            key={stack.id}
            id={stack.id} 
            name={stack.name} 
            logo={stack.logo} />
            //could use <div></div>
            //render stack component. Ref stack obj, can be replaced with id, name and logo.
          ))
        }
      </div>
    </div >
  );
}

