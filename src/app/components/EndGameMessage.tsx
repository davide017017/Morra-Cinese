import React from 'react';
import { FaTrophy, FaSkull } from 'react-icons/fa';

interface Props {
    message: string | null;
    isWin: boolean;
    onReset: () => void;
}

const EndGameMessage: React.FC<Props> = ({ message, isWin, onReset }) => {
    if (!message) {
        return null;
    }

    const icon = isWin ? (
        <FaTrophy className="text-6xl text-yellow-600 animate-pulse mb-6" />
    ) : (
        <FaSkull className="text-6xl text-gray-700 animate-rotate mb-6" />
    );

    const bgColor = isWin
        ? 'bg-gradient-to-r from-green-200 to-green-400'
        : 'bg-gradient-to-r from-red-200 to-red-400';

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md flex justify-center items-center z-50">
            <div
                className={`bg-white p-12 rounded-lg text-center shadow-2xl border-4 border-black ${bgColor} flex flex-col items-center`} // Aggiunto flex flex-col items-center
            >
                {icon}
                <p className={`text-3xl font-bold mb-6 ${isWin ? 'text-green-700' : 'text-red-700'}`}>
                    {message}
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-xl"
                    onClick={onReset}
                >
                    Gioca di nuovo
                </button>
            </div>
        </div>
    );
};

export default EndGameMessage;