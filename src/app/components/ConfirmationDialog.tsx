// app/components/ConfirmationDialog.tsx

import React  from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { ConfirmationDialogProps } from '../types/types';
import { useEffect } from 'react';

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, secondaryMessage, onConfirm, onCancel }) => {
    
    const handleConfirmClick = () => {
        onConfirm(); 
    };

    const handleCancelClick = () => {
        if (onCancel) {
            onCancel();
        }
    };

    function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            if (onCancel) {
                onCancel(); 
            }
        }
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (onCancel) {
                    onCancel(); 
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onCancel]); 

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg"
            onClick={handleOverlayClick}
        >
            <div
                className="border border-black bg-orange-200 p-8 rounded-3xl w-full max-w-md flex flex-col items-center transition duration-300 shadow-2xl shadow-black/80"
            >
                <p className="text-2xl font-medium mb-2 text-center text-black">{message}</p>
                {secondaryMessage && (
                    <p className="text-lg text-center text-black mb-4">{secondaryMessage}</p>
                )}
                <div className="flex justify-center w-full gap-4">
                    <button
                        className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-xl flex items-center transition duration-300 shadow-lg"
                        onClick={handleCancelClick} 
                    >
                        <FaTimes className="mr-2" /> No
                    </button>
                    <button
                        className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl flex items-center transition duration-300 shadow-lg"
                        onClick={handleConfirmClick} 
                    >
                        <FaCheck className="mr-2" /> Sì
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;