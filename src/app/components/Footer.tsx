// app/components/Footer.tsx
import React from 'react';
import { FaGithub, FaBriefcase } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 w-full border-t border-gray-300 bg-gradient-to-t from-orange-300 to-orange-100">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-6 mb-2">
            <a
              href="https://davide-martinico-portfolio.netlify.app/"
              className="text-gray-700 hover:text-green-800 flex items-center transition duration-300 hover:scale-105 active:scale-95 group" // Added "group" class
            >
              <FaBriefcase className="mr-2 text-gray-600 group-hover:text-green-800" size={18} /> Portfolio {/* Modified icon color change */}
            </a>
            <a
              href="https://github.com/davide017017"
              className="text-gray-700 hover:text-green-800 flex items-center transition duration-300 hover:scale-105 active:scale-95 group" // Added "group" class
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2 text-gray-600 group-hover:text-green-800" size={18} /> GitHub {/* Modified icon color change */}
            </a>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-700 mr-2">
              &copy; {currentYear}
            </p>
            <span className="text-gray-600">|</span>
            <p className="text-gray-700 ml-2">Made by davide017017</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;