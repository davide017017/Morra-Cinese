// types.ts 

import { ReactNode } from "react";

export interface Punteggio {
    nome: ReactNode;
    punteggio: any;
    name: string;
    score: number;
  }

export interface ScoreboardProps {
    punteggi: Punteggio[];
  }

export interface ImageData {
    src: string;
    alt: string;
    id: string; 
}

export type Scelta = 'carta' | 'pietra' | 'forbici';

export interface IconData {
  src: string;
  alt: string;
  id: string;
}
