// app/components/ResultRound.tsx

import React from 'react';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import { PropsResultRound } from '../types/types'; 

const choiceToIcon = {
    carta: <GiPaper className="text-5xl text-gray-700 mb-2" />,
    pietra: <GiRock className="text-5xl text-gray-700 mb-2" />,
    forbici: <GiScissors className="text-5xl text-gray-700 mb-2" />,
};

const ResultRound: React.FC<PropsResultRound> = ({ playerChoice, computerChoice, roundResult }) => {
    if (!playerChoice || !computerChoice || !roundResult) {
        return null; 
    }

    return (
        <div className={`p-2 md:p-5 rounded-xl mb-2 lg:mb-5 shadow-inner flex flex-col items-center w-full text-sm md:text-base
                        ${roundResult === 'Hai vinto!' ? 'bg-gradient-to-r from-green-300 to-green-50'
                            : roundResult === 'Hai perso!' ? 'bg-gradient-to-l from-red-300 to-red-50'
                            : roundResult === 'Pareggio!' ? 'bg-gradient-to-t from-gray-400 to-gray-200 '
                            : 'bg-gray-100'}`}>
            <div className='flex flex-row text-base md:text-2xl text-center md:my-1 gap-2'>
                <h2 className="font-semibold text-gray-800 md:mb-3">Round:</h2>
                <div className={`font-bold text-center   w-full ${
                    roundResult === 'Hai vinto!' ? 'text-green-600'
                    : roundResult === 'Hai perso!' ? 'text-red-600'
                    : 'text-blue-600'}`}>
                    {roundResult}
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full">
                <div className="flex flex-col items-center mb-4 md:mb-0 text-center">
                    {choiceToIcon[playerChoice]} 
                    <div className="text-sm md:text-base capitalize">La tua scelta: {playerChoice}</div>
                </div>
                <span className="text-2xl md:text-3xl font-bold mx-3 md:mx-6">VS</span>
                <div className="flex flex-col items-center text-center">
                    {choiceToIcon[computerChoice]} 
                    <div className="text-sm md:text-base capitalize">Computer: {computerChoice}</div>
                </div>
            </div>
            
        </div>
    );
};

export default ResultRound;