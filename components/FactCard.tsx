import React, { useState, useEffect } from 'react';
import { generateFunFact } from '../services/geminiService';

interface FactCardProps {
  topic: string;
}

const FactCard: React.FC<FactCardProps> = ({ topic }) => {
  const [fact, setFact] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFact = async () => {
      setIsLoading(true);
      const generatedFact = await generateFunFact(topic);
      setFact(generatedFact);
      setIsLoading(false);
    };

    fetchFact();
  }, [topic]);

  return (
    <div className="bg-indigo-900 bg-opacity-70 rounded-lg p-4 border border-indigo-600 min-h-[100px] flex items-center justify-center">
      {isLoading ? (
        <div className="text-indigo-300">Generating a fun fact...</div>
      ) : (
        <p className="text-lg text-yellow-200">{fact}</p>
      )}
    </div>
  );
};

export default FactCard;
