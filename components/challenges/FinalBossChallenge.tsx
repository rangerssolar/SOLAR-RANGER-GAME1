import React, { useState, useEffect } from 'react';
import { CHARACTERS } from '../../constants';

interface FinalBossChallengeProps {
  onComplete: (success: boolean) => void;
}

const challenges = Object.values(CHARACTERS).map(c => ({ id: c.id, name: c.name, icon: c.icon }));

const FinalBossChallenge: React.FC<FinalBossChallengeProps> = ({ onComplete }) => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (gameOver) return;

    if (timeLeft === 0) {
      setGameOver(true);
      setMessage('Time ran out! The superstorm hit Earth!');
      setTimeout(() => onComplete(false), 2000);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, onComplete]);

  const handleSuccess = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(c => c + 1);
    } else {
      setGameOver(true);
      setMessage('You did it! Earth is safe!');
      setTimeout(() => onComplete(true), 2000);
    }
  };

  const current = challenges[currentChallenge];

  return (
    <div className="w-full max-w-3xl p-8 bg-red-900 bg-opacity-50 rounded-2xl shadow-lg border-2 border-red-500 text-center">
      <h2 className="text-5xl font-bold text-yellow-300 mb-2 animate-pulse">SOLAR SUPERSTORM!</h2>
      <p className="text-xl text-indigo-200 mb-6">A massive CME is approaching! Use all your skills to protect Earth!</p>

      <div className="text-4xl font-bold text-red-300 mb-4">Time Left: {timeLeft}s</div>

      <div className="bg-slate-800 p-6 rounded-lg mb-6 flex flex-col items-center">
        <p className="text-2xl mb-4">Current Task: <span className="font-bold text-yellow-400">{current.name}</span></p>
        <div className="text-8xl mb-4">{current.icon}</div>
        <button
          onClick={handleSuccess}
          disabled={gameOver}
          className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded-lg transform hover:scale-105 transition-transform disabled:opacity-50"
        >
          Complete Task!
        </button>
      </div>

      <div className="flex justify-center gap-4">
        {challenges.map((c, index) => (
          <div key={c.id} className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl ${index < currentChallenge ? 'bg-green-500' : index === currentChallenge ? 'bg-yellow-500 animate-pulse' : 'bg-slate-700'}`}>
            {c.icon}
          </div>
        ))}
      </div>
      
      {message && <p className={`mt-6 text-2xl font-semibold ${message.includes('safe') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>}
    </div>
  );
};

export default FinalBossChallenge;
