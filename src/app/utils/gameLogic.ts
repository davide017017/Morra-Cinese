// app/gameLogic.ts

import { Choices } from '../types/types';

export function getComputerChoice(): Choices {
    const choices: Choices[] = ['carta', 'pietra', 'forbici'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export function playRound(playerSelection: Choices, computerSelection: Choices): string {
    if (playerSelection === computerSelection) {
        return "Pareggio!";
    } else if (
        (playerSelection === 'carta' && computerSelection === 'pietra') ||
        (playerSelection === 'pietra' && computerSelection === 'forbici') ||
        (playerSelection === 'forbici' && computerSelection === 'carta')
    ) {
        return "Hai vinto!";
    } else {
        return "Hai perso!";
    }
}