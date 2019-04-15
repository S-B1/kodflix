// 12 Move the covers data model to a proper front-end data
//UI improved and can easily be changed in the future
//New arr utility component

//Don't need to import React
//Ensure the logo and import name match

import Mulan from './Images/Mulan.jpeg';
import PatchAdams from './Images/PatchAdams.jpeg';
import Elf from './Images/Elf.jpeg';
import ShawshankRedemption from './Images/Shawshank.jpeg';
import StElmos from './Images/StElmos.jpeg';
import BfastClub from './Images/BfastClub.jpeg';

//Create a Fn to get the MovieGallery
//replicate data model with pure JS arr. Bce easy to edit.
//From static to dynamic list of items
//Typical for react, a list of items from arr using .map to loop over arr. 
//Each indiv elem

export default function getMovieGallery() {
  return [
    { id:'mulan', name: 'Mulan', logo: Mulan },
    { id:'patch adams', name: 'Patch Adams', logo: PatchAdams },
    { id:'elf', name: 'Elf', logo: Elf },
    { id:'shawshank redemption', name: 'Shawshank Redemption', logo: ShawshankRedemption },
    { id:'st elmos', name: 'St. Elmos Fire', logo: StElmos },
    { id:'breakfast club', name: 'Breakfast Club', logo: BfastClub }
  ];
}