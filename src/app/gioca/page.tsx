'use client';

import { availableIcons } from '../data';
import React, { useState } from 'react';
import { FaHome, FaPlayCircle, FaRedo, FaUser } from 'react-icons/fa'; 
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import { getComputerChoice, playRound } from '../utils/gameLogic';
import IconSelector from '../components/IconSelector';
import { Scelta } from '../types/types';
import InputNomeUtente from '../components/InputNomeUtente';
import BottoniGame from '../components/BottoniGame';
import RisultatoRound from '../components/RisultatoRound';
import RisultatoGame from '../components/RisultatoGame';
import EndGameMessage from '../components/EndGameMessage';

export const choiceToIcon = {
    carta: <GiPaper className="text-5xl text-gray-700 mb-2" />,
    pietra: <GiRock className="text-5xl text-gray-700 mb-2" />,
    forbici: <GiScissors className="text-5xl text-gray-700 mb-2" />,
};

const Gioca: React.FC = () => {
    const [playerChoice, setPlayerChoice] = useState<Scelta | null>(null);
    const [computerChoice, setComputerChoice] = useState<Scelta | null>(null);
    const [roundResult, setRoundResult] = useState<string | null>(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [inGame, setInGame] = useState(false);
    const [userName, setUserName] = useState("");
    const [selectedIcon, setSelectedIcon] = useState(availableIcons[0]);
    const [vittorie, setVittorie] = useState(0);
    const [pareggi, setPareggi] = useState(0);
    const [sconfitte, setSconfitte] = useState(0);
    const [isNameValid, setIsNameValid] = useState(false);
    const [endGameMessage, setEndGameMessage] = useState<string | null>(null);
    const [isWin, setIsWin] = useState(false);

    const handleStartGameClick = () => {
        if (isNameValid) {
            startGame();
        }
    };

    const handleNameChange = (name: string, isValid: boolean): void => {
        setUserName(name);
        setIsNameValid(isValid);
    };

    const startGame = () => {
        setInGame(true);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setRoundResult(null);
        setEndGameMessage(null); // Reset del messaggio di fine partita
        setIsWin(false); // Reset di isWin
    };

    const handleChoice = (choice: Scelta) => {
        setPlayerChoice(choice);
        const compChoice = getComputerChoice();
        setComputerChoice(compChoice);
        const result = playRound(choice, compChoice);
        setRoundResult(result);

        if (result === 'Hai vinto!') {
            setPlayerScore((prevScore) => prevScore + 1);
            setVittorie((prevVittorie) => prevVittorie + 1);
        } else if (result === 'Hai perso!') {
            setComputerScore((prevScore) => prevScore + 1);
            setSconfitte((prevSconfitte) => prevSconfitte + 1);
        } else if (result === 'Pareggio!') {
            setPareggi((prevPareggi) => prevPareggi + 1);
        }

        if (playerScore >= 10) { // Punteggio di vittoria
            setEndGameMessage("Hai vinto la partita!");
            setIsWin(true);
            setInGame(false);
        } else if (computerScore >= 10) { // Punteggio di sconfitta
            setEndGameMessage("Hai perso la partita!");
            setIsWin(false);
            setInGame(false);
        }
    };

    const calculatePercentage = (count: number): string => {
        const total = vittorie + pareggi + sconfitte;
        return total === 0 ? '0%' : `${Math.round((count / total) * 100)}%`;
    };

    const resetGame = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setRoundResult(null);
        setVittorie(0);
        setPareggi(0);
        setSconfitte(0);
    };

    const returnToCharacterSelection = () => {
        setInGame(false);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setRoundResult(null);
        setEndGameMessage(null);
        setIsWin(false);
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div className="flex flex-col items-center font-sans min-h-screen bg-gradient-to-b from-amber-100 to-orange-100 px-4 py-8 md:px-8 md:py-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800 drop-shadow-lg text-center">
                Morra Cinese
            </h2>

            {!inGame && endGameMessage && (
                <EndGameMessage message={endGameMessage} isWin={isWin} onReset={startGame} />
            )}

            {!inGame ? (
                <div className="flex flex-col items-center w-full">
                    <InputNomeUtente onNameChange={handleNameChange} onEnter={handleStartGameClick} />
                    <IconSelector icons={availableIcons} selectedIcon={selectedIcon} onIconSelect={setSelectedIcon} />

                    <button
                        onClick={handleStartGameClick}
                        disabled={!isNameValid}
                        className={`rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-xl 
                                transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 active:shadow-inner active:shadow-black 
                                active:translate-y-1 shadow-2xl shadow-black hover:shadow-xl hover:shadow-black flex flex-col items-center justify-center 
                                mt-4 p-2 md:p-8 w-full md:w-auto md:mt-5
                                ${isNameValid ? '' : 'opacity-50 cursor-not-allowed'}`}
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
                <div className="bg-white p-2 sm:p-10 rounded-3xl transition duration-500 ease-in-out transform hover:scale-102 active:scale-100 w-full max-w-md">
                    <BottoniGame handleChoice={handleChoice} />
                        {playerChoice && <RisultatoRound playerChoice={playerChoice} computerChoice={computerChoice} roundResult={roundResult} />}
                    <RisultatoGame
                        playerScore={playerScore}
                        computerScore={computerScore}
                        vittorie={vittorie}
                        pareggi={pareggi}
                        sconfitte={sconfitte}
                        endGameMessage={endGameMessage}
                        resetGame={resetGame}
                        calculatePercentage={calculatePercentage}
                        selectedIcon={selectedIcon}
                        userName={userName}
                    />
                    <div className="mt-4 flex justify-between items-center  gap-2"> {/* Contenitore per i bottoni */}
                        <div className="flex flex-col"> {/* Contenitore per i bottoni a sinistra */}
                        <button
                            onClick={returnToCharacterSelection}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md text-sm mb-2 flex items-center" // Aggiunto mb-2 e flex items-center
                        >
                            <FaUser className="mr-2" /> Selezione Personaggio {/* Icona a sinistra del testo */}
                        </button>
                        <button
                            onClick={returnToCharacterSelection}
                            className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-md text-sm flex items-center" // Aggiunto flex items-center
                        >
                            <FaHome className="mr-2" /> Menu Principale {/* Icona a sinistra del testo */}
                        </button>
                        </div>
                        <button
                        onClick={resetGame}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-sm flex items-center" // Cambiato colore e aggiunto flex items-center
                        >
                            <FaRedo className="mr-2" /> Reset Game {/* Icona a sinistra del testo */}
                        </button>
                    </div>
                </div>
                
            )}
        </div>
    );
};

export default Gioca;