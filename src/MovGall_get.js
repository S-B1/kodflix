
import Mulan from './Images/Mulan.jpeg';
import PatchAdams from './Images/PatchAdams.jpeg';
import Elf from './Images/Elf.jpeg';
import ShawshankRedemption from './Images/Shawshank.jpeg';
import StElmos from './Images/StElmos.jpeg';
import BfastClub from './Images/BfastClub.jpeg';

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