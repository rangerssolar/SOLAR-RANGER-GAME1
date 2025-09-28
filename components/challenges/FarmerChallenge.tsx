import React, { useState, useEffect } from 'react';

interface FarmerChallengeProps {
  onComplete: (success: boolean) => void;
}

const WEATHER_ICONS = {
  '☀️': 'Sunny',
  '🌧️': 'Rainy',
  '💨': 'Windy',
};

type WeatherSymbol = keyof typeof WEATHER_ICONS;

const FarmerChallenge: React.FC<FarmerChallengeProps> = ({ onComplete }) => {
  const [targetWeather, setTargetWeather] = useState<WeatherSymbol>('☀️');
  const [timeLeft, setTimeLeft] = useState(15);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const symbols = Object.keys(WEATHER_ICONS) as WeatherSymbol[];
    setTargetWeather(symbols[Math.floor(Math.random() * symbols.length)]);
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
      setMessage('Oh no, time ran out! The crops are confused.');
      setTimeout(() => onComplete(false), 2000);
    }
  }, [timeLeft, gameOver, onComplete]);

  const handleSelect = (symbol: WeatherSymbol) => {
    if (gameOver) return;
    
    if (symbol === targetWeather) {
      setMessage('Great job! The forecast is correct!');
      setGameOver(true);
      setTimeout(() => onComplete(true), 2000);
    } else {
      setMessage('Oops, that\'s not the right forecast! Try again!');
    }
  };

  return (
    <div className="w-full max-w-2xl p-8 bg-indigo-900 bg-opacity-50 rounded-2xl shadow-lg border-2 border-indigo-500 text-center">
      <h2 className="text-4xl font-bold text-yellow-300 mb-2">Save the Crops!</h2>
      <p className="text-lg text-indigo-200 mb-6">The satellite signal is scrambled! Choose the correct weather icon to match the forecast.</p>
      
      <div className="bg-slate-800 p-4 rounded-lg mb-6">
        <p className="text-xl">Satellite Forecast: <span className="font-bold text-2xl text-yellow-400">{WEATHER_ICONS[targetWeather]}</span></p>
      </div>

      <div className="flex justify-center gap-6 mb-6">
        {(Object.keys(WEATHER_ICONS) as WeatherSymbol[]).map((symbol) => (
          <button
            key={symbol}
            onClick={() => handleSelect(symbol)}
            disabled={gameOver}
            className="text-6xl p-4 bg-indigo-700 rounded-lg transform hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
          >
            {symbol}
          </button>
        ))}
      </div>

      <div className="text-3xl font-bold text-red-400 mb-4">Time Left: {timeLeft}</div>
      {message && <p className={`text-xl font-semibold ${gameOver && message.includes('Great') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>}
    </div>
  );
};

export default FarmerChallenge;
