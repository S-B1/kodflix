// #11 Improve Gallery Layout for lge screen
// user of lge screen (e.g. UHD, 4K)

import React from 'react';
import Stack from './Stack';
import Mulan from './Images/Mulan.jpeg';
import PatchAdams from './Images/PatchAdams.jpeg';
import Elf from './Images/Elf.jpeg';
import ShawshankRedemption from './Images/Shawshank.jpeg';
import StElmos from './Images/StElmos.jpeg';
import BfastClub from './Images/BfastClub.jpeg';

export default function MovieGallery() {
  return (
    <div>
      <div className="container">
        <Stack id='mulan' name='Mulan' logo={Mulan} />
        <Stack id='patch adams' name='Patch Adams' logo={PatchAdams} />
        <Stack id='elf' name='Elf' logo={Elf} />
        <Stack id='shawshank redemption' name='Shawshank Redemption' logo={ShawshankRedemption} />
        <Stack id='st elmos' name='St. Elmos Fire' logo={StElmos} />
        <Stack id='breakfast club' name='Breakfast Club' logo={BfastClub} />
      </div>
    </div >
  );
}