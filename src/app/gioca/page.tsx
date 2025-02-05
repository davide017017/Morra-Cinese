// app/gioca/page.tsx
'use client';

import { availableIcons } from '../data';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaHome, FaPlayCircle, FaRedo, FaUser, FaSave, } from 'react-icons/fa';
import { GiRock, GiPaper, GiScissors } from 'react-icons/gi';
import { getComputerChoice, playRound } from '../utils/gameLogic';
import IconSelector from '../components/IconSelector';
import { Choices } from '../types/types';
import InputNomeUtente from '../components/InputUserName';
import ButtonsGame from '../components/ButtonsGame';
import RisultatoRound from '../components/ResultRound';
import RisultatoGame from '../components/ResultGame';
import EndGameMessage from '../components/EndGameMessage';
import ConfirmationDialog from '../components/ConfirmationDialog';
import NumberRoundSelector from '../components/NumberRoundSelector';


const Gioca: React.FC = () => {
    const router = useRouter();

    const [playerChoice, setPlayerChoice] = useState<Choices | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choices | null>(null);
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
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [numRound, setNumRound] = useState<number | null>(null);

    const [confirmationType, setConfirmationType] = useState<'mainMenu' | 'reset' | 'character' | null>(null);

    const showConfirmationDialog = (type: 'mainMenu' | 'reset' | 'character') => {
        setConfirmationType(type);
        setShowConfirmation(true);
    };
    const handleConfirm = () => {
        setShowConfirmation(false);
        switch (confirmationType) {
            case 'mainMenu':
                router.push('/');
                break;
            case 'reset':
                restartConfirm();
                break;
            case 'character':
                returnToCharacterSelection();
                break;
            default:
                break;
        }
        setConfirmationType(null); 
    };

    const handleCancel = () => {
        setShowConfirmation(false);
        setConfirmationType(null); 
    };

    useEffect(() => {
        if (numRound !== null && (playerScore >= numRound || computerScore >= numRound)) {
            setEndGameMessage(playerScore >= numRound ? "Hai vinto la partita!" : "Hai perso la partita!");
            setIsWin(playerScore >= numRound);
            setShowMessage(true);
            }
    }, [playerScore, computerScore, numRound]); 


    const handleStartGameClick = () => {
        if (isNameValid ) { 
            startGame();
        }
    };

    const handleNameChange = (name: string, isValid: boolean): void => {
        setUserName(name);
        setIsNameValid(isValid);
    };

    const handleNumRoundSelect = (round: number | null) => {
        setNumRound(round);
    };

    const startGame = () => {
        setInGame(true);
        setPlayerScore(0);
        setComputerScore(0);
        setPlayerChoice(null);
        setComputerChoice(null);
        setRoundResult(null);
        setEndGameMessage(null); 
        setIsWin(false); 
    };

    const handleChoice = (choice: Choices) => {
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
    
    const restartConfirm = () => {
        resetGame(); 
        setEndGameMessage(null); 
    };

    const returnToCharacterSelection = () => {
        resetGame();
        setIsWin(false);
        setEndGameMessage(null);
        setInGame(false);
    };

    const handleConfirmMainMenu = () => {
        setShowConfirmation(false); 
        router.push('/'); 
    };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="flex flex-col items-center font-sans min-h-screen bg-gradient-to-b from-amber-100 to-orange-100 px-4 py-8 md:px-8 md:py-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 md:mb-12 text-gray-800 drop-shadow-lg text-center">
                Morra Cinese
            </h2>
    
            {showMessage && endGameMessage && (
                <EndGameMessage
                    message={endGameMessage}
                    isWin={isWin}
                    onReset={restartConfirm}
                    onReturnToMenu={handleConfirmMainMenu}
                />
            )}
    
            {!inGame ? (
                <div className="flex flex-col items-center w-full">
                    <InputNomeUtente onNameChange={handleNameChange} onEnter={handleStartGameClick} />
                    <IconSelector icons={availableIcons} selectedIcon={selectedIcon} onIconSelect={setSelectedIcon} />
                    <NumberRoundSelector 
                        onSelect={handleNumRoundSelect}
                        initialRound={numRound} 
                    />
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
                    <button
                        onClick={() => { window.location.href = "/"; }}
                        className="m-6 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-md text-sm flex items-center"
                    >
                    <FaHome className="mr-2" /> Menu Principale
                    </button>
                </div>
            ) : (
                <div className="bg-white p-2 sm:p-10 rounded-3xl transition duration-500 ease-in-out transform hover:scale-102 active:scale-100 w-full max-w-md">
                    <ButtonsGame handleChoice={handleChoice} />
                    {playerChoice && <RisultatoRound playerChoice={playerChoice} computerChoice={computerChoice} roundResult={roundResult} />}
                    <RisultatoGame
                        playerScore={playerScore}
                        computerScore={computerScore}
                        vittorie={vittorie}
                        pareggi={pareggi}
                        sconfitte={sconfitte}
                        selectedIcon={selectedIcon}
                        userName={userName}
                        numRound={numRound} 
                    />
                    <div className="mt-4 flex justify-between items-center  gap-2">
                        <div className="flex flex-col  gap-2">
                            <button
                                onClick={() => showConfirmationDialog('character')}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md text-sm mb-2 flex items-center"
                            >
                                <FaUser className="mr-2" /> Selezione Personaggio
                            </button>
                            <button
                                onClick={() => showConfirmationDialog('mainMenu')}
                                className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-md text-sm flex items-center"
                            >
                                <FaHome className="mr-2" /> Menu Principale
                            </button>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <button
                                onClick={() => showConfirmationDialog('reset')}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-sm flex items-center"
                            >
                                <FaRedo className="mr-2" /> Reset Game
                            </button>
                        </div>
                        {showConfirmation && (
                            <ConfirmationDialog
                                message={
                                    confirmationType === 'mainMenu'
                                        ? `Sei sicuro di voler uscire e tornare al Menu principale?`
                                        : confirmationType === 'reset'
                                        ? `Sei sicuro di voler resettare la partita?`
                                        : `Sei sicuro di voler tornare alla selezione del personaggio?`
                                }
                                secondaryMessage="I progressi di questa partita andranno persi."
                                onConfirm={handleConfirm}
                                onCancel={handleCancel}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};

export default Gioca;
