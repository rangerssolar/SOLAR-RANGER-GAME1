import React from 'react';

export type CharacterRole = 'farmer' | 'pilot' | 'astronaut' | 'powergrid' | 'earthling';

export type GameScreen = 'title' | 'character-select' | 'game' | 'final-challenge' | 'credits';

export interface Badge {
  id: CharacterRole | 'guardian';
  name: string;
  // Fix: Use React.ReactElement instead of JSX.Element to avoid namespace error in a .ts file.
  icon: React.ReactElement;
  description: string;
}

export interface Character {
  id: CharacterRole;
  name: string;
  description: string;
  // Fix: Use React.ReactElement instead of JSX.Element to avoid namespace error in a .ts file.
  icon: React.ReactElement;
  challengeComponent: React.FC<{ onComplete: (success: boolean) => void }>;
  factTopic: string;
}

export interface GameState {
  screen: GameScreen;
  selectedCharacter: CharacterRole | null;
  earnedBadges: Set<CharacterRole>;
}

export interface SpaceWeatherFact {
  title: string;
  fact: string;
}

// Mocked NOAA Data for potential use
export interface KpIndexData {
  value: number; // 0-9
  timestamp: string;
  status: 'quiet' | 'unsettled' | 'storm';
}

export interface SolarFlareData {
  class: string; // e.g., 'X1.0'
  peakTime: string;
  region: number;
}
