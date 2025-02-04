// data.ts

import {ImageData} from './types/types'
import personaggio1 from './userIcon/personaggio1.png';
import personaggio2 from './userIcon/personaggio2.png';
import personaggio3 from './userIcon/personaggio3.png';
import personaggio4 from './userIcon/personaggio4.png';
import personaggio5 from './userIcon/personaggio5.png';
import personaggio6 from './userIcon/personaggio6.png';
import personaggio7 from './userIcon/personaggio7.png';
import personaggio8 from './userIcon/personaggio8.png';



export const availableIcons: ImageData[] = [
    { src: personaggio1.src , alt: 'Personaggio 1', id: 'personaggio1' },
    { src: personaggio2.src, alt: 'Personaggio 2', id: 'personaggio2' },
    { src: personaggio3.src, alt: 'Personaggio 3', id: 'personaggio3' },
    { src: personaggio4.src , alt: 'Personaggio 4', id: 'personaggio4' },
    { src: personaggio5.src, alt: 'Personaggio 5', id: 'personaggio5' },
    { src: personaggio6.src, alt: 'Personaggio 6', id: 'personaggio6' },
    { src: personaggio7.src , alt: 'Personaggio 7', id: 'personaggio7' },
    { src: personaggio8.src, alt: 'Personaggio 8', id: 'personaggio8' },
    // ... altre immagini per avatar
];

