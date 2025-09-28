import React, { useState, useEffect } from 'react';

interface PilotChallengeProps {
  onComplete: (success: boolean) => void;
}

const PilotChallenge: React.FC<PilotChallengeProps> = ({ onComplete }) => {
  const [status, setStatus] = useState('Navigating...');
  
  useEffect(() => {
    setStatus('GPS signal lost! Radio static detected!');
    const timer = setTimeout(() => {
      // Simulate player action
      setStatus('Manual navigation engaged... Cleared turbulence!');
      const successTimer = setTimeout(() => onComplete(true), 2000);
      return () => clearTimeout(successTimer);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-full max-w-2xl p-8 bg-indigo-900 bg-opacity-50 rounded-2xl shadow-lg border-2 border-indigo-500 text-center">
      <h2 className="text-4xl font-bold text-yellow-300 mb-2">Clear the Static!</h2>
      <p className="text-lg text-indigo-200 mb-6">The radio is full of static from the solar storm. We must navigate safely!</p>
      <div className="text-6xl mb-6 animate-pulse">✈️</div>
      <p className="text-2xl text-yellow-200 font-mono p-4 bg-slate-800 rounded-lg">{status}</p>
    </div>
  );
};

export default PilotChallenge;
