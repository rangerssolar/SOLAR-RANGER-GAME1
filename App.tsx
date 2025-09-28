import React, { useState, useCallback, useMemo } from 'react';
import { GameScreen, CharacterRole, Badge } from './types';
import { CHARACTERS, BADGES } from './constants';
import TitleScreen from './components/TitleScreen';
import CharacterSelectionScreen from './components/CharacterSelectionScreen';
import GameScreenComponent from './components/GameScreen';
import BadgeNotification from './components/BadgeNotification';
import FinalBossChallenge from './components/challenges/FinalBossChallenge';

const App: React.FC = () => {
  const [screen, setScreen] = useState<GameScreen>('title');
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterRole | null>(null);
  const [earnedBadges, setEarnedBadges] = useState<Set<CharacterRole>>(new Set());
  const [activeNotification, setActiveNotification] = useState<{badge: Badge, topic: string} | null>(null);

  const startGame = useCallback(() => {
    setScreen('character-select');
  }, []);

  const selectCharacter = useCallback((role: CharacterRole) => {
    setSelectedCharacter(role);
    setScreen('game');
  }, []);
  
  const allBadgesEarned = useMemo(() => earnedBadges.size === Object.keys(CHARACTERS).length, [earnedBadges]);

  const handleGameComplete = useCallback((success: boolean) => {
    if (success && selectedCharacter) {
      const newBadges = new Set(earnedBadges);
      newBadges.add(selectedCharacter);
      setEarnedBadges(newBadges);

      const characterData = CHARACTERS[selectedCharacter];
      setActiveNotification({
        badge: BADGES[selectedCharacter],
        topic: characterData.factTopic,
      });
    }
    setSelectedCharacter(null);
    setScreen('character-select');
  }, [selectedCharacter, earnedBadges]);

  const handleFinalChallengeComplete = useCallback((success: boolean) => {
     if (success) {
        const newBadges = new Set(earnedBadges);
        newBadges.add('guardian');
        setEarnedBadges(newBadges);
        setActiveNotification({
            badge: BADGES['guardian'],
            topic: 'Solar Superstorms'
        });
     }
     setScreen('character-select');
  }, [earnedBadges]);

  const closeNotification = useCallback(() => {
    setActiveNotification(null);
  }, []);
  
  const startFinalChallenge = useCallback(() => {
    setScreen('final-challenge');
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 'title':
        return <TitleScreen onStart={startGame} />;
      case 'character-select':
        return <CharacterSelectionScreen onSelectCharacter={selectCharacter} earnedBadges={earnedBadges} allBadgesEarned={allBadgesEarned} onStartFinalChallenge={startFinalChallenge} />;
      case 'game':
        if (selectedCharacter) {
          return <GameScreenComponent characterId={selectedCharacter} onGameEnd={handleGameComplete} />;
        }
        // Fallback to character selection if no character is selected
        setScreen('character-select');
        return null;
      case 'final-challenge':
        return <FinalBossChallenge onComplete={handleFinalChallengeComplete} />
      default:
        return <TitleScreen onStart={startGame} />;
    }
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center font-sans bg-gradient-to-b from-slate-900 to-indigo-900 text-white p-4">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      {renderScreen()}
      {activeNotification && (
        <BadgeNotification
          badge={activeNotification.badge}
          factTopic={activeNotification.topic}
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default App;
