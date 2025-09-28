import React from 'react';

interface TitleScreenProps {
  onStart: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="relative mb-8">
        <div className="w-48 h-48 bg-yellow-400 rounded-full sun-animation"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-slate-900 drop-shadow-lg" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
          🌞
        </h1>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold mb-2 text-yellow-300 drop-shadow-md">
        Stellar Stories
      </h1>
      <p className="text-xl md:text-2xl text-indigo-200 mb-12 max-w-2xl">
        An interactive adventure into the amazing world of space weather!
      </p>
      <button
        onClick={onStart}
        className="px-12 py-4 bg-orange-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Start Adventure
      </button>
    </div>
  );
};

export default TitleScreen;
