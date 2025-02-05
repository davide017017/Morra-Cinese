 // app/components/NumberRoundSelector.tsx
'use client'

import React, { useState } from "react";
import { NumberRoundSelectorProps } from "../types/types";

const NumberRoundSelector: React.FC<NumberRoundSelectorProps> = ({ onSelect, initialRound }) => {
    const [selectedRound, setSelectedRound] = useState<number | null>(initialRound || null);

    const handleNumRoundSelect = (round: number | null) => {
        setSelectedRound(round);
        onSelect(round);
    };

    const buttons = [3, 5, 10, null];

    return (
        <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
                Seleziona il numero di round per vincere:
            </label>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {buttons.map((round) => (
                    <button
                        key={round === null ? 'infinity' : round}
                        onClick={() => handleNumRoundSelect(round)}
                        className={`rounded-full relative 
                            ${selectedRound === round ? 'bg-amber-600/90 text-white shadow-lg scale-110' 
                                : 'bg-amber-500/50 text-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:scale-105 hover:bg-amber-500/70 active:scale-90 active:shadow-inner active:shadow-black/80'}
                            font-bold text-xl transition duration-200 ease-in-out p-2 md:p-4
                            flex items-center justify-center w-full
                            ${round === null ? 'w-16' : ''}
                            bg-gradient-to-b ${selectedRound === round ? 'from-amber-500 to-amber-600 scale-90 text-white shadow-[0_0px_40px_rgba(218,119,6,0.9)]' : 'from-amber-600 to-amber-700'}
                            border-2 border-amber-900
                        `}
                    >
                        {round === null ? '∞' : round}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NumberRoundSelector;