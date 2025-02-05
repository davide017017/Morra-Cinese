[![Netlify Status](https://api.netlify.com/api/v1/badges/b870311d-eeed-4a7c-9720-17c092d2d1e6/deploy-status)](https://app.netlify.com/sites/morra-cinese-davide017017/deploys)

# Morra Cinese

Un divertente gioco di Morra Cinese (Carta, Pietra, Forbici) sviluppato con Next.js e Tailwind CSS.

## Descrizione

Questa applicazione web permette di giocare a Morra Cinese contro il computer. L'interfaccia è intuitiva e offre un'esperienza di gioco coinvolgente.

## Tecnologie utilizzate

*   **Next.js:** Framework React per il rendering lato server (SSR) e la generazione di siti statici (SSG), ottimizzando le prestazioni e la SEO.
*   **React:** Libreria JavaScript per la creazione di interfacce utente dinamiche e interattive.
*   **Tailwind CSS:** Framework CSS utility-first per uno sviluppo rapido e personalizzabile, senza la necessità di scrivere CSS personalizzato.
*   **Font personalizzati:** Utilizzo di font Geist per un'estetica moderna e distintiva.
*   **Responsive Design:** L'applicazione è progettata per adattarsi a diverse dimensioni di schermo, offrendo un'esperienza utente ottimale su   desktop, tablet e dispositivi mobili.
*   **SEO di base:** Implementazione di meta tag e ottimizzazioni di base per migliorare la visibilità sui motori di ricerca.
*   **Progressive Web App (PWA):** Supporto per PWA con file manifest per un'esperienza utente simile a un'app nativa.

## Funzionalità

*   Gioca contro il computer.
*   Interfaccia utente intuitiva e user-friendly.
*   Design responsive per diverse dimensioni di schermo.
*   Statistiche di gioco (vittorie, pareggi, sconfitte).
*   Selezione del numero di round per la vittoria.
*   Scelta dell'icona utente.
*   Supporto per Progressive Web App (PWA).

## Installazione

1.  Clona il repository:

    ```bash
    git clone [https://github.com/tuo-username/morra-cinese.git](https://www.google.com/search?q=https://github.com/tuo-username/morra-cinese.git)
    ```

2.  Installa le dipendenze:

    ```bash
    cd morra-cinese
    npm install
    ```

3.  Avvia l'applicazione:

    ```bash
    npm run dev
    ```

## Come giocare

1.  Apri l'applicazione nel tuo browser.
2.  Inserisci il tuo nome utente.
3.  Seleziona un'icona.
4.  Scegli il numero di round per vincere.
5.  Clicca su "Inizia partita".
6.  Seleziona la tua mossa (carta, pietra o forbici).
7.  Il computer farà la sua mossa automaticamente.
8.  Il risultato del round verrà visualizzato.
9.  Continua a giocare finché non raggiungi il numero di round selezionato per la vittoria.

## Struttura del codice

*   `components/`: Contiene i componenti riutilizzabili dell'applicazione (es: `NumberRoundSelector`, `ConfirmationDialog`, `Footer`).
*   `pages/`: Contiene le pagine dell'applicazione (es: `gioca.tsx`, `score.tsx`, `index.tsx`).
*   `public/`: Contiene le risorse statiche (es: immagini, icone, file manifest).
*   `styles/`: Contiene i file CSS globali (`globals.css`).
*   `types/`: Contiene le definizioni dei tipi TypeScript.
*   `utils/`: Contiene le funzioni di utilità (es: `gameLogic.ts`).

## Tecniche di coding rilevanti

*   **Gestione dello stato con React Hooks:** Utilizzo di `useState` per gestire lo stato dei componenti e aggiornare l'interfaccia utente in modo reattivo.
*   **Rendering condizionale:** Utilizzo di rendering condizionale per mostrare o nascondere elementi dell'interfaccia utente in base allo stato dell'applicazione.
*   **Comunicazione tra componenti:** Passaggio di props e utilizzo di callback per la comunicazione tra componenti.
*   **Utilizzo di Next.js per ottimizzare le prestazioni:** Implementazione di tecniche di ottimizzazione come il precaricamento delle pagine e l'utilizzo di immagini ottimizzate.
*   **Stilizzazione con Tailwind CSS:** Utilizzo di classi utility per una stilizzazione rapida e personalizzabile.
*   **Implementazione del pattern di "toggle" per i bottoni:** Utilizzo di classi condizionali per cambiare l'aspetto dei bottoni in base al loro stato (selezionato/non selezionato).

## Miglioramenti futuri

*   Implementazione di un sistema di autenticazione per salvare i punteggi degli utenti.
*   Integrazione con un database per la gestione dei punteggi.
*   Aggiunta di animazioni e transizioni per migliorare l'esperienza utente.
*   Implementazione di test unitari e di integrazione.

## Autore

davide017017

## Licenza

MIT License

Copyright (c) 2025 Davide

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.