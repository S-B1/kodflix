// Transform the TV show element into a single component, and move it to a new file for scalability purposes.

import React, { Component } from 'react';
import Stack from './Stack';
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
      <div className = "App">
        <b /><b /><b />
        <div className="container">
          <Stack name='Mulan' logo={Mulan} />
          <Stack name='Patch Adams' logo={PatchAdams} />
          <Stack name='Elf' logo={Elf} />
        </div>
        <div className="container">
          <Stack name='Shawshank Redemption' logo={ShawshankRedemption} />
          <Stack name='St. Elmos Fire' logo={StElmos} />
          <Stack name='Breakfast Club' logo={BfastClub} />
        </div>
      </div >
    );
  }
}


export default App;
