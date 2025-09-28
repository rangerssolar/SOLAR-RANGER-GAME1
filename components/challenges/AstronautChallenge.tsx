import React, { useState, useEffect } from 'react';

interface AstronautChallengeProps {
  onComplete: (success: boolean) => void;
}

const AstronautChallenge: React.FC<AstronautChallengeProps> = ({ onComplete }) => {
    const [clicks, setClicks] = useState(0);
    const requiredClicks = 5;

    useEffect(() => {
        if(clicks >= requiredClicks) {
            setTimeout(() => onComplete(true), 1000);
        }
    }, [clicks, onComplete]);

    return (
        <div className="w-full max-w-2xl p-8 bg-indigo-900 bg-opacity-50 rounded-2xl shadow-lg border-2 border-indigo-500 text-center">
            <h2 className="text-4xl font-bold text-yellow-300 mb-2">Shield the Crew!</h2>
            <p className="text-lg text-indigo-200 mb-6">A solar flare is incoming! Click the button rapidly to get the astronauts to safety!</p>
            <div className="text-6xl mb-6">🚀🛡️</div>
            
            <button
                onClick={() => setClicks(c => c + 1)}
                disabled={clicks >= requiredClicks}
                className="px-10 py-5 bg-red-600 text-white text-2xl font-bold rounded-lg disabled:bg-green-600 disabled:cursor-not-allowed transform active:scale-95 transition-transform"
            >
                {clicks >= requiredClicks ? 'SAFE!' : `TO SHELTER! (${clicks}/${requiredClicks})`}
            </button>
            <div className="w-full bg-gray-600 rounded-full h-4 mt-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(clicks / requiredClicks) * 100}%` }}></div>
            </div>
        </div>
    );
};

export default AstronautChallenge;
