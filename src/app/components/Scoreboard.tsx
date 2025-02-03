// app/components/Scoreboard.tsx
'use client'; // Necessario per usare localStorage e useState

import React, { useState, useEffect } from 'react';

import { Punteggio, ScoreboardProps } from '../types/types'; 

const Scoreboard: React.FC<ScoreboardProps> = ({ punteggi: initialPunteggi }) => {
  const [punteggi, setPunteggi] = useState<Punteggio[]>(initialPunteggi);

  useEffect(() => {
    // Carica i punteggi dal localStorage alMount
    const punteggiSalvati = localStorage.getItem('punteggi');
    if (punteggiSalvati) {
      setPunteggi(JSON.parse(punteggiSalvati));
    }
  }, []);

  useEffect(() => {
    // Salva i punteggi nel localStorage ogni volta che cambiano
    localStorage.setItem('punteggi', JSON.stringify(punteggi));
  }, [punteggi]);

  const ordinaPunteggi = (punteggi: Punteggio[]) => {
    return [...punteggi].sort((a, b) => b.punteggio - a.punteggio);
  };

  const aggiungiPunteggio = (nuovoPunteggio: Punteggio) => {
    setPunteggi([...punteggi, nuovoPunteggio]);
  };

  const mostraPunteggi = (punteggi: Punteggio[]) => {
    const punteggiOrdinati = ordinaPunteggi(punteggi);
    return punteggiOrdinati.slice(0, 10); // Mostra solo i primi 10
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-2xl font-bold mb-4">Classifica Punteggi</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Punteggio</th>
          </tr>
        </thead>
        <tbody>
          {mostraPunteggi(punteggi).map((punteggio, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{punteggio.nome}</td>
              <td className="px-4 py-2">{punteggio.punteggio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;