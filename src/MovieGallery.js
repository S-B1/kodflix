
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
          ))
        }
      </div>
    </div >
  );
}

