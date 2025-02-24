'use client';

import Link from 'next/link';
import React from 'react';
import Footer from './components/Footer';

const Menu: React.FC = () => {

    const isScoreboardDisabled = true; 

    return (
        <div className="flex min-h-screen flex-col"> 
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-orange-100 
                    px-4 py-8 md:px-8 md:py-12">
                <div className="text-center mb-12 md:mb-16"> 
                    <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 drop-shadow-lg">
                        Morra Cinese
                    </h1>
                    <p className="text-3xl md:text-4xl font-bold text-gray-700 mt-4"> 
                        Carta, Pietra, Forbici
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 w-full md:w-auto">
                    <Link
                        href="/gioca"
                        className="px-10 py-5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 shadow-[0_10px_20px_rgba(0,0,0,0.9)]
                        text-white font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 
                        hover:shadow-lg flex items-center justify-center" 
                    >
                        Gioca
                    </Link>
                    <button // Cambiato in <button>
                        onClick={() => { if (!isScoreboardDisabled) window.location.href = "/score"; }} 
                        disabled={isScoreboardDisabled}
                        className={`px-10 py-5 ${isScoreboardDisabled ? 'bg-gray-400 cursor-not-allowed opacity-40 shadow-inner shadow-black' : 'bg-green-500 hover:bg-green-600 active:bg-green-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg'}
                        text-white font-bold rounded-lg transition duration-300 ease-in-out  flex items-center justify-center`}
                    >
                        Scoreboard
                    </button>
                    {/* <Link
                    
                        href="/score"
                        className="px-10 py-5 bg-green-500 hover:bg-green-600 active:bg-green-700 
                        text-white font-bold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 
                        shadow-md hover:shadow-lg flex items-center justify-center" 
                    >
                        Scoreboard
                    </Link> */}
                </div>
            </main>
            <div className=" w-full md:w-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Menu;