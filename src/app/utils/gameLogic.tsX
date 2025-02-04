// gameLogic.ts

// Definisci il tipo per le scelte (usando un tipo stringa letterale)
export type Scelta = 'carta' | 'pietra' | 'forbici';

/**
 * Genera una scelta casuale per il computer.
 * @returns {Scelta} La scelta casuale del computer.
 */
export function getComputerChoice(): Scelta {
    const choices: Scelta[] = ['carta', 'pietra', 'forbici'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Determina il risultato di un round del gioco.
 * @param {Scelta} playerSelection La scelta del giocatore.
 * @param {Scelta} computerSelection La scelta del computer.
 * @returns {string} Il risultato del round ("Hai vinto!", "Hai perso!", "Pareggio!").
 */
export function playRound(playerSelection: Scelta, computerSelection: Scelta): string {
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