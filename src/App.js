import React, { Component } from 'react';
import Mulan from './Images/Mulan.jpeg';
import PatchAdams from './Images/PatchAdams.jpeg';
import Elf from './Images/Elf.jpeg';
import ShawshankRedemption from './Images/Shawshank.jpeg';
import StElmos from './Images/StElmos.jpeg';
import BfastClub from './Images/BfastClub.jpeg';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
            <b /><b /><b />
            <div className="container">
              <div className='item'>
                <img src={Mulan} alt='Mulan logo' />
               </div>
               <div className='item'>
                  <img src={PatchAdams} alt='Patch Adams logo' />
               </div>
                  <div className='item'>
                      <img src={Elf} alt='Elf logo' />
                   </div>
                  </div>
                  <div className="container">
                    <div className='item'>
                      <img src={ShawshankRedemption} alt='Shawshank Redemption logo' />
                    </div>
                    <div className='item'>
                      <img src={StElmos} alt='St Elmos Fire logo' />
                    </div>
                    <div className='item'>
                      <img src={BfastClub} alt='Breakfast Club logo' />
                  </div>
              </div>
          </div >
      );
  }
}

export default App;
