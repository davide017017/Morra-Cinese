'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // Importa useState e useEffect
import Scoreboard from '../components/Scoreboard';
import { Punteggio } from '../types/types'; // Importa il tipo Punteggio

const ScorePage: React.FC = () => {
  const [punteggi, setPunteggi] = useState<Punteggio[]>([]); // Definisci punteggi con il tipo corretto

  useEffect(() => {
    // Carica i punteggi dal localStorage
    const punteggiSalvati = localStorage.getItem('punteggi');
    if (punteggiSalvati) {
      setPunteggi(JSON.parse(punteggiSalvati));
    }
  }, []);

  const handleExit = () => {
    window.location.href = "/";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Classifica</h1>
      <Scoreboard punteggi={punteggi} /> {/* Passa i punteggi come prop */}
      <div className="mt-8">
        <button onClick={handleExit} className="px-6 py-3 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">
          Menu
        </button>
      </div>
    </main>
  );
};

export default ScorePage;