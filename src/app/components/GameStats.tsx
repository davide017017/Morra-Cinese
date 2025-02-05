// app/components/GameStats.tsx
'use client';

import React from 'react';
import { PropsGameStats } from '../types/types';

const GameStats: React.FC<PropsGameStats> = ({ vittorie, pareggi, sconfitte }) => {

    const calculatePercentage = (count: number): string => {
        const total = vittorie + pareggi + sconfitte;
        return total === 0 ? '0%' : `${Math.round((count / total) * 100)}%`;
    };

    return (
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
    );
};

export default GameStats;