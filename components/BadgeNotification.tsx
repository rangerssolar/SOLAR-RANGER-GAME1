import React from 'react';
import { Badge } from '../types';
import FactCard from './FactCard';

interface BadgeNotificationProps {
  badge: Badge;
  factTopic: string;
  onClose: () => void;
}

const BadgeNotification: React.FC<BadgeNotificationProps> = ({ badge, factTopic, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-indigo-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-yellow-400 p-8 max-w-lg w-full text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-yellow-300 mb-2">Challenge Complete!</h2>
        <p className="text-indigo-200 mb-6">You've earned the</p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-6xl">{badge.icon}</div>
          <h3 className="text-4xl font-bold text-white">{badge.name}</h3>
        </div>
        <p className="italic text-indigo-300 mb-6">{badge.description}</p>
        
        <FactCard topic={factTopic} />

        <button
          onClick={onClose}
          className="mt-8 px-8 py-3 bg-green-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BadgeNotification;
