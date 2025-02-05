// app/components/InputUserName.tsx

import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { PropsInputUserName } from '../types/types';

const InputUserName: React.FC<PropsInputUserName> = ({ onNameChange, onEnter }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false); 

  useEffect(() => {
    onNameChange(inputValue, isValid);
  }, [inputValue, isValid, onNameChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const isValidName = value.length >= 3 && value.length <= 20;
    setIsValid(isValidName);

    if (!isValidName) {
      setErrorMessage("Il nome deve avere tra 3 e 20 caratteri.");
    } else {
      setErrorMessage("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && isValid) { 
      onEnter();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setErrorMessage("");
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!isValid) {
      setErrorMessage("Il nome deve avere tra 3 e 20 caratteri.");
    }
  };

  const inputClassName = `text-center border ${
    errorMessage ? 'border-red-500 focus:ring-2 focus:ring-red-200 focus:shadow-lg focus:shadow-red-500'
      : (inputValue || isFocused ? 'border-green-500 focus:ring-2 focus:ring-green-200 focus:shadow-lg focus:shadow-green-500' 
      : 'border-gray-300 focus:ring-2 focus:ring-blue-200 focus:shadow-lg focus:shadow-blue-500')
  } rounded-lg px-9 py-3 focus:outline-none bg-gradient-to-l from-amber-100 to-white placeholder-gray-500 transition duration-300 shadow-sm w-full`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Benvenuto, avventuriero!<br />
        Scrivi il tuo nome e scegli il tuo fato!
      </h2>
      <div className="relative mb-3 w-full md:w-auto">
        <input
          type="text"
          placeholder="Inserisci il tuo nome"
          className={inputClassName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      {errorMessage && <p className="text-red-500 mt-1">{errorMessage}</p>}
    </div>
  );
};

export default InputUserName;