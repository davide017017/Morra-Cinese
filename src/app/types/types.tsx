import { ReactNode } from "react";

// types.d.ts (o types.ts)
export interface Punteggio {
    nome: ReactNode;
    punteggio: any;
    name: string;
    score: number;
    // ... altre proprietà che hai nel tuo oggetto Punteggio
  }

export interface ScoreboardProps {
    punteggi: Punteggio[];
  }