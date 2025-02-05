// app/components/ResultGame.tsx

import React from 'react';
import Image from 'next/image';
import CPU_icon from '../userIcon/CPU_icon/CPU_icon.png'
import GameStats from './GameStats'; 
import { PropsResultGame } from '../types/types';

const ResultGame: React.FC<PropsResultGame> = ({
    playerScore,
    computerScore,
    vittorie,
    pareggi,
    sconfitte,
    selectedIcon,
    userName,
    numRound, 
}) => {
    return (
        <>
            <div className={`flex flex-col items-center mb-1 p-2 bg-gray-200 rounded-lg shadow-md
                            ${playerScore > computerScore ? 'bg-gradient-to-r from-green-300 to-green-50'
                                : playerScore < computerScore ? 'bg-gradient-to-l from-red-300 to-red-50'
                                : playerScore === computerScore ? 'bg-gradient-to-t from-gray-500 to-gray-200 '
                                : 'bg-gray-100'}`}>
                <h2 className="text-lg font-semibold text-gray-800">
                    Game to WIN: {numRound === null ? "∞" : numRound}
                </h2>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="flex items-center mr-2">
                            <div className='p-2 flex flex-col items-center'>
                                <div className='overflow-hidden flex items-center mb-2 rounded-2xl border-2 border-gray-800 shadow-md'>
                                    <Image src={selectedIcon.src} alt={selectedIcon.alt} width={100} height={100} />
                                </div>
                                <div className={`capitalize max-w-[100px] break-words font-bold p-1 text-sm transition-transform duration-300 ease-in-out transform
                                                ${playerScore > computerScore ? 'text-green-500 scale-125 text-4xl underline' : 'text-black'}`}>
                                    {userName}
                                </div>
                            </div>

                            <p className={`font-bold text-lg p-1 mr-2 transition-transform duration-300 ease-in-out transform
                                        ${playerScore > computerScore ? 'text-green-500 scale-125 text-4xl underline p-2' : 'text-gray-600'}`}>
                                {playerScore}
                            </p>
                            <span className="text-4xl font-bold text-gray-700">:</span>
                            <p className={`font-bold text-lg ml-2 p-1 transition-transform duration-300 ease-in-out transform
                                ${computerScore > playerScore ? 'text-red-500 scale-125 text-4xl underline p-2' : 'text-gray-600'}`}>
                                {computerScore}
                            </p>
                            <div className="ml-2 flex flex-col items-center">
                                <div className='overflow-hidden flex items-center mb-2 rounded-2xl border-2 border-gray-800 shadow-md'>
                                    <Image src={CPU_icon} alt="CPU Icon" width={100} height={100} />
                                </div>
                                <div className={`font-bold p-1 text-sm transition-transform duration-300 ease-in-out transform
                                    ${computerScore > playerScore ? 'text-red-500 scale-125 text-4xl underline p-2' : 'text-black'}`}>
                                        <p>
                                            Computer
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GameStats vittorie={vittorie} pareggi={pareggi} sconfitte={sconfitte} /> 
        </>
    );
};

export default ResultGame;