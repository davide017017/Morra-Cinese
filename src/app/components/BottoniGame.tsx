// components/BottoniGame.tsx
import React from 'react';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import { Scelta } from '../types/types'; 

interface Props {
    handleChoice: (choice: Scelta) => void; 
}
const BottoniGame: React.FC<Props> = ({ handleChoice }) => {
    return (
        <div className="flex flex-row md:flex-row gap-4 md:gap-12 mb-6 justify-center">
            <button
                onClick={() => handleChoice('pietra')}
                className="relative p-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 hover:from-gray-400 hover:to-gray-300
                            transition duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-md
                            group focus:outline-none"
            >
                <GiRock className="text-4xl md:text-6xl text-gray-700 transition duration-300 group-hover:text-gray-800" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 bg-gray-500"></div>
            </button>
            <button
                onClick={() => handleChoice('carta')}
                className="relative p-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 hover:from-gray-400 hover:to-gray-300
                            transition duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-md group focus:outline-none"
            >
                <GiPaper className="text-4xl md:text-6xl text-gray-700 transition duration-300 group-hover:text-gray-800" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 bg-gray-500"></div>
            </button>
            <button
                onClick={() => handleChoice('forbici')}
                className="relative p-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 hover:from-gray-400 hover:to-gray-300
                            transition duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-md group focus:outline-none"
            >
                <GiScissors className="text-4xl md:text-6xl text-gray-700 transition duration-300 group-hover:text-gray-800" />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 bg-gray-500"></div>
            </button>
        </div>
    );
};

export default BottoniGame;