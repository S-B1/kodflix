
import Mulan from './Images/Mulan.jpeg';
import PatchAdams from './Images/PatchAdams.jpeg';
import Elf from './Images/Elf.jpeg';
import ShawshankRedemption from './Images/Shawshank.jpeg';
import StElmos from './Images/StElmos.jpeg';
import BfastClub from './Images/BfastClub.jpeg';

export default function getMovieGallery() {
  return [
    { id:'Mulan', name: 'Mulan', logo: Mulan, synopsis: 'Mulan is a girl, the only child of her honored family. When the Huns invade China, one man from every family is called to arms. Mulan\'s father, who has an old wound and cannot walk properly, decides to fight for his country and the honor of his family though it is clear that he will not survive an enemy encounter.'
  },
    { id:'PatchAdams', name: 'Patch Adams', logo: PatchAdams, synopsis: 'The true story of a heroic man, Hunter "Patch" Adams, determined to become a medical doctor because he enjoys helping people. He ventured where no doctor had ventured before, using humour and pathos.' },
    { id:'Elf', name: 'Elf', logo: Elf, synopsis: 'Buddy (Will Ferrell) was accidentally transported to the North Pole as a toddler and raised to adulthood among Santa\'s elves. Unable to shake the feeling that he doesn\'t fit in, the adult Buddy travels to New York, in full elf uniform, in search of his real father. As it happens, this is Walter Hobbs (James Caan), a cynical businessman. After a DNA test proves this, Walter reluctantly attempts to start a relationship with the childlike Buddy with increasingly chaotic results.' },
    { id:'Shawshank', name: 'Shawshank Redemption', logo: ShawshankRedemption, synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
    { id:'StElmos', name: 'St. Elmos Fire', logo: StElmos, synopsis: 'A group of friends, just out of college, struggle with adulthood. Featuring an ensemble full of beautiful and talented young actors, this comedy drama centers an a septet of Georgetown graduates who fret about their futures.' },
    { id:'BfastClub', name: 'Breakfast Club', logo: BfastClub, synopsis: 'Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.' }
  ];
}
