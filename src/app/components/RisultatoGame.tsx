// components/RisultatoGame.tsx
import React from 'react';
import Image from 'next/image';
import { FaRobot } from 'react-icons/fa';

interface Props {
    playerScore: number;
    computerScore: number;
    vittorie: number;
    pareggi: number;
    sconfitte: number;
    endGameMessage: string | null;
    resetGame: () => void;
    calculatePercentage: (count: number) => string;
    selectedIcon: any;
    userName: string;
}

const RisultatoGame: React.FC<Props> = ({
    playerScore,
    computerScore,
    vittorie,
    pareggi,
    sconfitte,
    endGameMessage,
    resetGame,
    calculatePercentage,
    selectedIcon,
    userName,
}) => {
    return (
        <>
            <div className={`flex flex-col items-center mb-1 p-2 bg-gray-200 rounded-lg shadow-md
                            ${playerScore > computerScore ? 'bg-gradient-to-r from-green-300 to-green-50'
                                : playerScore < computerScore ? 'bg-gradient-to-l from-red-300 to-red-50'
                                : playerScore === computerScore ? 'bg-gradient-to-t from-gray-500 to-gray-200 '
                                : 'bg-gray-100'}`}>
                <h2 className="text-lg font-semibold text-gray-800">Game:</h2>
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

                            <div className="ml-2 flex flex-row items-center">
                                <p className={`font-bold text-lg p-1 transition-transform duration-300 ease-in-out transform
                                            ${computerScore > playerScore ? 'text-red-500 scale-125 text-4xl underline p-2' : 'text-gray-600'}`}>
                                    {computerScore}
                                </p>
                                <FaRobot className="text-5xl ml-3 mt-2 text-red-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {endGameMessage && (
                <div className="bg-green-100 p-8 rounded-xl mt-12 shadow-inner">
                    <p className="text-2xl font-bold text-green-600">{endGameMessage}</p>
                    <button
                        onClick={resetGame}
                        className="px-12 py-5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg
                                    transition duration-300 ease-in-out transform hover:scale-105 mt-6">
                        Nuova Partita
                    </button>
                </div>
            )}

            <div className="bg-gradient-to-t from-yellow-400 to-yellow-100 p-4 rounded-lg shadow-md mt-2">
                <h3 className="text-lg font-semibold mb-2">Statistiche Partita:</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <p className="font-medium">Vittorie:</p>
                        <p className="text-lg font-bold">{calculatePercentage(vittorie)}</p>
                    </div>
                    <div>
                        <p className="font-medium">Pareggi:</p>
                        <p className="text-lg font-bold">{calculatePercentage(pareggi)}</p>
                    </div>
                    <div>
                        <p className="font-medium">Sconfitte:</p>
                        <p className="text-lg font-bold">{calculatePercentage(sconfitte)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RisultatoGame;