// app/score/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Punteggio } from '../types/types'; // Importa il tipo Punteggio

const ScorePage: React.FC = () => {
    const [punteggi, setPunteggi] = useState<Punteggio[]>([]);

    useEffect(() => {
        const punteggiSalvati = localStorage.getItem('gameScores'); // Usa 'gameScores'
        if (punteggiSalvati) {
          try {
            const parsedScores: Punteggio[] = JSON.parse(punteggiSalvati);

            const sortedScores = [...parsedScores].sort((a, b) => {
                const timestampA = a.timestamp || 0;
                const timestampB = b.timestamp || 0;
                const dateA = new Date(timestampA);
                const dateB = new Date(timestampB);
                return dateB.getTime() - dateA.getTime();
            });

            setPunteggi(sortedScores);
        } catch (error) {
            console.error("Errore durante il parsing dei punteggi:", error);
            setPunteggi([]);
        }
      }
    }, []);

    const handleExit = () => {
        window.location.href = "/";
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Classifica</h1>

            <div className="w-full max-w-3xl overflow-x-auto"> {/* Contenitore per la tabella */}
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Utente</th>
                            <th className="border border-gray-300 px-4 py-2">Icona</th>
                            <th className="border border-gray-300 px-4 py-2">Punteggio Giocatore</th>
                            <th className="border border-gray-300 px-4 py-2">Punteggio Computer</th>
                            <th className="border border-gray-300 px-4 py-2">Vittorie</th>
                            <th className="border border-gray-300 px-4 py-2">Pareggi</th>
                            <th className="border border-gray-300 px-4 py-2">Sconfitte</th>
                            <th className="border border-gray-300 px-4 py-2">Data</th> {/* Colonna per la data */}
                        </tr>
                    </thead>
                    <tbody>
                        {punteggi.map((punteggio, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}> {/* Righe alternate */}
                                <td className="border border-gray-300 px-4 py-2">{punteggio.userName}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={punteggio.selectedIcon.src} alt={punteggio.selectedIcon.alt} width={50} height={50} />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{punteggio.playerScore}</td>
                                <td className="border border-gray-300 px-4 py-2">{punteggio.computerScore}</td>
                                <td className="border border-gray-300 px-4 py-2">{punteggio.vittorie}</td>
                                <td className="border border-gray-300 px-4 py-2">{punteggio.pareggi}</td>
                                <td className="border border-gray-300 px-4 py-2">{punteggio.sconfitte}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {punteggio.timestamp ? new Date(punteggio.timestamp).toLocaleString() : '-'} {/* Formatta la data */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <button onClick={handleExit} className="px-6 py-3 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">
                    Menu
                </button>
            </div>
        </main>
    );
};

export default ScorePage;