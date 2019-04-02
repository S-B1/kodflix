import React, { Component } from 'react';
import ReactJS from './Images/React icon.svg';
import HTML5 from './Images/HTML icon.svg';
import CSS from './Images/CSS icon.svg';
import Nodejs from './Images/nodejs icon.svg';
import Mongo from './Images/MongoDB icon.png';
import Heroku from './Images/Heroku icon.svg';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
            <b /><b /><b />
            <div className="container">
              <div className='item'>
                <img src={ReactJS} alt='ReactJs logo' />
               </div>
               <div className='item'>
                  <img src={HTML5} alt='HTML5 logo' />
               </div>
                  <div className='item'>
                      <img src={CSS} alt='CSS logo' />
                   </div>
                  </div>
                  <div className="container">
                    <div className='item'>
                    <img src={Nodejs} alt='Node JS logo' />
                    </div>
                    <div className='item'>
                      <img src={Mongo} alt='Mongo DB logo' />
                    </div>
                    <div className='item'>
                      <img src={Heroku} alt='Heroku logo' />
                  </div>
              </div>
          </div >
      );
  }
}

export default App;
