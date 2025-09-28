import React from 'react';
import { CharacterRole } from '../types';
import { CHARACTERS } from '../constants';

interface GameScreenProps {
  characterId: CharacterRole;
  onGameEnd: (success: boolean) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ characterId, onGameEnd }) => {
  const character = CHARACTERS[characterId];
  const ChallengeComponent = character.challengeComponent;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <ChallengeComponent onComplete={onGameEnd} />
    </div>
  );
};

export default GameScreen;
