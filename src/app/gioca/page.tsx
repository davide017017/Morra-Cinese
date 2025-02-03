'use client';

import Image from 'next/image';

import React, { JSX, useState } from 'react';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import {FaRobot, FaPlayCircle, FaUser} from 'react-icons/fa';
import personaggio1 from '../userIcon/personaggio1.png';
import personaggio2 from '../userIcon/personaggio2.png';
import personaggio3 from '../userIcon/personaggio3.png';
import personaggio4 from '../userIcon/personaggio4.png';
import personaggio5 from '../userIcon/personaggio5.png';
import personaggio6 from '../userIcon/personaggio6.png';
import personaggio7 from '../userIcon/personaggio7.png';
import personaggio8 from '../userIcon/personaggio8.png';

import { getComputerChoice, playRound  } from '../gameLogic';
import IconSelector from '../components/IconSelector'; // Importa il componente

interface ImageData {
    src: string;
    alt: string;
    id: string; 
}
const availableIcons: ImageData[] = [
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

type Scelta = 'carta' | 'pietra' | 'forbici';

const choiceToIcon = {
    carta: <GiPaper className="text-5xl text-gray-700 mb-2" />,
    pietra: <GiRock className="text-5xl text-gray-700 mb-2" />,
    forbici: <GiScissors className="text-5xl text-gray-700 mb-2" />
};

const Gioca: React.FC = () => {
    const [playerChoice, setPlayerChoice] = useState<Scelta | null>(null);
    const [computerChoice, setComputerChoice] = useState<Scelta | null>(null);
    const [roundResult, setRoundResult] = useState<string | null>(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [inGame, setInGame] = useState(false);
    const [endGameMessage, setEndGameMessage] = useState<string | null>(null);
    const [userName, setUserName] = useState<string>("");
    const [selectedIcon, setSelectedIcon] = useState(availableIcons[0]); 
    const [vittorie, setVittorie] = useState(0);
    const [pareggi, setPareggi] = useState(0);
    const [sconfitte, setSconfitte] = useState(0);

    const choices: Scelta[] = ['carta', 'pietra', 'forbici'];

    const startGame = () => {
        setInGame(true);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setRoundResult(null);
        setEndGameMessage(null);
    };

    const handleChoice = (choice: Scelta) => {
        setPlayerChoice(choice);
        const compChoice = getComputerChoice();
        setComputerChoice(compChoice);
        const result = playRound(choice, compChoice);
        setRoundResult(result);

        if (result === 'Hai vinto!') {
            setPlayerScore(prevScore => prevScore + 1);
            setVittorie(prevVittorie => prevVittorie + 1);
        } else if (result === 'Hai perso!') {
            setComputerScore(prevScore => prevScore + 1);
            setSconfitte(prevSconfitte => prevSconfitte + 1); 
        } else if (result === 'Pareggio!') {
            setPareggi(prevPareggi => prevPareggi + 1); 
        }
    };

    const calculatePercentage = (count: number): string => {
        const total = vittorie + pareggi + sconfitte;
        return total === 0 ? '0%' : `${Math.round((count / total) * 100)}%`;
    };

    const endGame = () => {
        setInGame(false);
        const message = playerScore > computerScore ? "Hai vinto il game!" : "Hai perso il game.";
        setEndGameMessage(message);
    };

    const resetGame = () => {
        setInGame(false);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setRoundResult(null);
        setEndGameMessage(null);
    };



    const IconSelector: React.FC = () => {
        const [selectedIcon, setSelectedIcon] = useState<string | null>(availableIcons[0].id); 




        return (
            <div className="flex flex-wrap justify-center gap-4 p-8">
                {availableIcons.map((icon) => (
                    <div key={icon.id} className={`p-2 rounded-full ${selectedIcon === icon.id ? "bg-amber-700 shadow-inner scale-110": ""}`}>
                        <div className="rounded-full overflow-hidden bg-amber-700 w-full"> 
                            <Image src={icon.src} alt={icon.alt} width={400} height={400} />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            startGame();
        }
    };



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <div className="flex flex-col items-center font-sans min-h-screen bg-gradient-to-b from-amber-100 to-orange-100 
                        px-4 py-8 md:px-8 md:py-12"> 
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800 drop-shadow-lg text-center"> 
                Morra Cinese
            </h2>
    
            {!inGame ? (
                <div className="flex flex-col items-center w-full"> 
                    <div className="relative mb-6 w-auto justyfy-center">
                        <input
                            type="text"
                            placeholder="Inserisci il tuo nome"
                            className="border border-gray-300 rounded-lg px-9 py-3 focus:outline-none bg-gradient-to-l from-amber-100 to-white
                                    placeholder-gray-500 transition duration-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                    focus:bg-none focus:bg-white focus:shadow-lg focus:shadow-blue-500"
                            onChange={(e) => setUserName(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> 
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-2 w-full m:mb-8"> 
                        {availableIcons.map((icon) => (
                            <div
                            key={icon.id}
                            onClick={() => setSelectedIcon(icon)}
                            className={`relative rounded-full transition duration-300 ease-in-out cursor-pointer  ${ 
                                selectedIcon.id === icon.id
                                ? "scale-125 shadow-[0_0_30px_5px_rgba(5,148,85,0.9)] " 
                                : "shadow-[0_0_12px_0px_rgba(0,0,0,0.9)] hover:scale-110 hover:shadow-[0_0_16px_0px_rgba(0,0,0,0.9)]" 
                            }`}
                            >
                                <div className="rounded-full overflow-hidden relative w-[100px] h-[100px]"> 
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            {selectedIcon.id === icon.id && (
                                <div className="absolute inset-0 rounded-full border-8 border-green-400 animate-pulse"></div>
                            )}
                            </div>
                        ))}
                    </div>


                    <button
                        onClick={startGame}
                        className="rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-xl 
                        transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 active:shadow-inner active:shadow-black 
                        active:translate-y-1 shadow-2xl shadow-black hover:shadow-xl hover:shadow-black flex flex-col items-center justify-center 
                        mt-4 p-2 md:p-8 w-full md:w-auto md:mt-5"
                    >
                        <div className="flex justify-center items-center mb-3 md:mb-4">
                            <FaPlayCircle className="text-5xl md:text-7xl" /> 
                        </div>
                        <div className="flex w-full justify-center">
                            <GiRock className="text-2xl md:text-3xl mr-2 md:mr-3" />
                            <GiPaper className="text-2xl md:text-3xl mr-2 md:mr-3" />
                            <GiScissors className="text-2xl md:text-3xl mr-2 md:mr-3" />
                        </div>
                        <span className="text-lg md:text-xl">Inizia Partita</span> 
                    </button>
                </div>
            ) : (
                <div className="bg-white p-2 sm:p-10 rounded-3xl transition duration-500 ease-in-out transform 
                                hover:scale-102 active:scale-100 w-full max-w-md"> 
                    <div className="flex flex-row md:flex-row gap-4 md:gap-12 mb-6 justify-center"> 
                        <button
                            onClick={() => handleChoice('pietra')}
                            className="relative p-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 hover:from-gray-400 hover:to-gray-300 
                            transition duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-md 
                            group focus:outline-none "
                        >
                            <GiRock className="text-4xl md:text-6xl text-gray-700 transition duration-300 group-hover:text-gray-800" />
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 bg-gray-500"></div>
                        </button>
                        <button
                            onClick={() => handleChoice('carta')}
                            className="relative p-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 hover:from-gray-400 hover:to-gray-300 
                            transition duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-md group focus:outline-none "
                        >
                            <GiPaper className="text-4xl md:text-6xl text-gray-700 transition duration-300 group-hover:text-gray-800" />
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 bg-gray-500"></div>
                        </button>
                        <button
                            onClick={() => handleChoice('forbici')}
                            className="relative p-4 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 hover:from-gray-400 hover:to-gray-300 
                            transition duration-300 ease-in-out transform hover:scale-110 active:scale-95 shadow-md group focus:outline-none "
                        >
                            <GiScissors className="text-4xl md:text-6xl text-gray-700 transition duration-300 group-hover:text-gray-800" />
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-300 bg-gray-500"></div>
                        </button>
                    </div>
    
                    {playerChoice && (
                        <div
                            className={`p-4 md:p-6 rounded-xl mb-2  lg:mb-5 shadow-inner flex flex-col items-center w-full text-sm md:text-base
                                ${roundResult === 'Hai vinto!' ? 'bg-gradient-to-r from-green-300 to-green-50'
                                    : roundResult === 'Hai perso!' ? 'bg-gradient-to-l from-red-300 to-red-50'
                                    : roundResult === 'Pareggio!' ? 'bg-gradient-to-t from-gray-400 to-gray-200 ' 
                                    : 'bg-gray-100'}`} 
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 md:mb-3">Round:</h2> 
                            <div className="flex flex-row items-center justify-center w-full">
                                <div className="flex flex-col items-center mb-4 md:mb-0 text-center"> 
                                    {playerChoice && choiceToIcon[playerChoice]}
                                    {playerChoice && <div className="text-sm md:text-base capitalize">La tua scelta: {playerChoice}</div>} 
                                </div>
                                <span className="text-2xl md:text-3xl font-bold mx-3 md:mx-6">VS</span>
                                <div className="flex flex-col items-center text-center">
                                    {computerChoice && choiceToIcon[computerChoice]}
                                    {computerChoice && <div className="text-sm md:text-base capitalize">Computer: {computerChoice}</div>} 
                                </div>
                            </div>
                            <div
                                className={`text-base md:text-lg font-bold text-center mt-1 md:mt-3 w-full ${ 
                                    roundResult === 'Hai vinto!' ? 'text-green-600'
                                        : roundResult === 'Hai perso!' ? 'text-red-600'
                                        : 'text-blue-600'}`}
                            >
                                {roundResult}
                            </div>
                        </div>
                    )}
    
                    <div className={`flex flex-col items-center mb-4 p-2 bg-gray-200 rounded-lg shadow-md
                                    ${playerScore > computerScore ? 'bg-gradient-to-r from-green-300 to-green-50'
                                        : playerScore < computerScore ? 'bg-gradient-to-l from-red-300 to-red-50'
                                        : playerScore === computerScore ? 'bg-gradient-to-t from-gray-500 to-gray-200 '
                                        : 'bg-gray-100'}`} >
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">Game:</h2>

                        <div className="flex items-center">
                            <div className="flex items-center p-2">
                                <div className="flex items-center mr-2">
                                    <div className='p-2 flex flex-col items-center'> 
                                        <div className='overflow-hidden flex items-center mb-2 rounded-2xl border-2 border-gray-800 shadow-md'>
                                            <Image src={selectedIcon.src} alt={selectedIcon.alt} width={100} height={100} />
                                        </div>
                                        <div className="max-w-[100px] break-words font-bold p-1 text-sm transition-transform duration-300 ease-in-out transform 
                                                        ${playerScore > computerScore ? 'text-green-500 scale-125 text-4xl underline' : 'text-gray-600'}">
                                            {userName}
                                        </div>
                                    </div>

                                    <p
                                        className={`font-bold text-lg p-1 transition-transform duration-300 ease-in-out transform 
                                                        ${playerScore > computerScore ? 'text-green-500 scale-125 text-4xl underline p-2' : 'text-gray-600'}`}
                                    >
                                        {playerScore}
                                    </p>
                                </div>

                                <span className="text-4xl font-bold text-gray-700">:</span>

                                <div className="ml-2 flex flex-row items-center"> 
                                    <p
                                        className={`font-bold text-lg p-1 transition-transform duration-300 ease-in-out transform 
                                                        ${computerScore > playerScore ? 'text-red-500 scale-125 text-4xl underline p-2' : 'text-gray-600'}`}
                                    >
                                        {computerScore}
                                    </p>
                                    <FaRobot className="text-5xl ml-3 mt-2 text-red-500" /> 
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
                                transition duration-300 ease-in-out transform hover:scale-105 mt-6"
                            >
                                Nuova Partita
                            </button>
                        </div>
                    )}
                    <div className="bg-gradient-to-t from-yellow-400 to-yellow-100 p-4 rounded-lg shadow-md mt-6">
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
                </div>
            )}
        </div>
    );
};

export default Gioca;