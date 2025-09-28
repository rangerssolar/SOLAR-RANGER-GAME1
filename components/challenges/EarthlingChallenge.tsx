import React, { useState, useEffect } from 'react';

interface EarthlingChallengeProps {
  onComplete: (success: boolean) => void;
}

const EarthlingChallenge: React.FC<EarthlingChallengeProps> = ({ onComplete }) => {
  const [status, setStatus] = useState('Watching the night sky...');
  
  useEffect(() => {
    setStatus('The sky is lighting up with beautiful colors!');
    const timer = setTimeout(() => {
      setStatus('What a beautiful aurora! You captured it!');
      const successTimer = setTimeout(() => onComplete(true), 2000);
      return () => clearTimeout(successTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-full max-w-2xl p-8 bg-indigo-900 bg-opacity-50 rounded-2xl shadow-lg border-2 border-indigo-500 text-center">
      <h2 className="text-4xl font-bold text-yellow-300 mb-2">Catch the Auroras!</h2>
      <p className="text-lg text-indigo-200 mb-6">Solar wind is reaching Earth, creating the amazing Northern Lights. Enjoy the show!</p>
      <div className="text-6xl mb-6">🌌✨</div>
      <div className="w-full h-32 rounded-lg bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 animate-pulse mb-4"></div>
      <p className="text-2xl text-yellow-200 font-mono p-4 bg-slate-800 rounded-lg">{status}</p>
    </div>
  );
};

export default EarthlingChallenge;
