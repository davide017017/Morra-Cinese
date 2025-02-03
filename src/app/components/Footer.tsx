// app/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Il tuo nome. Tutti i diritti riservati.</p>
        {/* Puoi aggiungere qui altre informazioni, link, ecc. */}
        <div className="mt-2">
          <a href="/portfolio" className="text-gray-300 hover:text-white mr-4">Portfolio</a>
          <a href="/contatti" className="text-gray-300 hover:text-white">Contatti</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;