
import React from 'react';
// import Stack from './Stack';
// import getMovieGallery from './MovGall_get';
import { Redirect, Link } from 'react-router-dom';

export default class MovieGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      MovGalls: []
    };
}
componentDidMount() { 
  fetch('/rest/MovGall')
    .then(response => response.json())
    .then((result) => {
       this.setState({ 
        // isLoaded: true,
        MovGalls: result}); 
    });
}
  // (error) => {
  //   this.setState({
  //     isLoaded: true,
  //     error: error
  //   });

render() {
  const{MovGalls} = this.state;
  if(MovGalls === undefined) {
    return <Redirect to='/not-found' />
  } else {
    return(
      <div className="MovGall">{MovGalls.map((MovGall) =>
      <div className="stack" key={MovGall.id}>
        <h2>{MovGall.title}</h2>
        <Link to={MovGall.id} exact>
          <img src={require(`./Images/${MovGall.id}.jpeg`)} alt={`${MovGall.title} stack`} />
        </Link>
       </div>)}
    </div>)
  }
  }
};


// if(this.state.MovGall && this.state.MovGall.length > 0) {
//     return (
//       <div>
//         <div className="container">
//           {
//             this.state.MovGall.map(stack => {
//               return (
//               <Stack 
//               key={stack.id}
//               id={stack.id} 
//               name={stack.name} />
//             ))
//           }
//         </div>
//       </div> 

//     ) 
// }