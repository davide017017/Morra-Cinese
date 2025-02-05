// app/types.ts 

export interface NumberRoundSelectorProps {
    onSelect: (round: number | null) => void; 
    initialRound: number | null; 
}

export interface ConfirmationDialogProps {
  message: string;
  secondaryMessage?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  showCancelButton?: boolean;
  showButtons?: boolean;
  onBackgroundClick?: () => void; 
}

export interface PropsResultRound {
    playerChoice: Choices | null;
    computerChoice: Choices | null;
    roundResult: string | null;
}

export interface PropsResultGame {
    playerScore: number;
    computerScore: number;
    vittorie: number;
    pareggi: number;
    sconfitte: number;
    selectedIcon: any;
    userName: string;
    numRound: number | null; 
}

export interface PropsInputUserName {
  onNameChange: (name: string, isValid: boolean) => void; 
  onEnter: () => void;
}

export interface PropsIconSelector {
  icons: IconData[];
  selectedIcon: IconData;
  onIconSelect: (icon: IconData) => void;
}

export interface PropsGameStats {
    vittorie: number;
    pareggi: number;
    sconfitte: number;
}

export interface PropsEndGameMessage {
    message: string | null;
    isWin: boolean;
    onReset: () => void;
    onReturnToMenu: () => void; 
}

export type PropsConfirmationDialog = {
  message: string;
  secondaryMessage?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  showCancelButton?: boolean;
};

export interface PropsButtonGame {
    handleChoice: (choice: Choices) => void; 
}

export interface Punteggio {
  userName: string;
  selectedIcon: { src: string; alt: string }; 
  playerScore: number;
  computerScore: number;
  vittorie: number;
  pareggi: number;
  sconfitte: number;
  timestamp: number; 
}

export interface ScoreboardProps {
    punteggi: Punteggio[];
  }

export interface ImageData {
    src: string;
    alt: string;
    id: string; 
}

export type Choices = 'carta' | 'pietra' | 'forbici';

export interface IconData {
  src: string;
  alt: string;
  id: string;
}
