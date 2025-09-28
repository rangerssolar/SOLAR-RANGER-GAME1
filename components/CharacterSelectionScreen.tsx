import React from 'react';
import { CharacterRole } from '../types';
import { CHARACTERS } from '../constants';

interface CharacterSelectionScreenProps {
  onSelectCharacter: (role: CharacterRole) => void;
  earnedBadges: Set<CharacterRole>;
  allBadgesEarned: boolean;
  onStartFinalChallenge: () => void;
}

const CharacterSelectionScreen: React.FC<CharacterSelectionScreenProps> = ({ onSelectCharacter, earnedBadges, allBadgesEarned, onStartFinalChallenge }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300">Choose Your Challenge!</h1>
      <p className="text-lg text-indigo-200 mb-8 text-center">Who do you want to be today? Each person experiences space weather differently.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 w-full">
        {Object.values(CHARACTERS).map((char) => (
          <div
            key={char.id}
            className={`relative p-6 bg-indigo-800 bg-opacity-50 rounded-2xl shadow-lg border-2 border-indigo-500 cursor-pointer text-center transform hover:-translate-y-2 transition-transform duration-300 ${earnedBadges.has(char.id) ? 'border-green-400' : ''}`}
            onClick={() => onSelectCharacter(char.id)}
          >
            {earnedBadges.has(char.id) && (
              <div className="absolute top-2 right-2 text-2xl" title="Completed!">✅</div>
            )}
            <div className="text-6xl mb-4 flex items-center justify-center h-20">{char.icon}</div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">{char.name}</h2>
            <p className="text-sm text-indigo-200">{char.description}</p>
          </div>
        ))}
      </div>
      {allBadgesEarned && (
          <button
            onClick={onStartFinalChallenge}
            className="mt-4 px-10 py-4 bg-red-600 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse"
          >
           🌞 Final Challenge: Solar Superstorm! 🏆
          </button>
      )}
    </div>
  );
};

export default CharacterSelectionScreen;
