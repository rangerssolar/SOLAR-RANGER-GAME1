import React from 'react';
import { Character, Badge, CharacterRole } from './types';
import FarmerChallenge from './components/challenges/FarmerChallenge';
import PilotChallenge from './components/challenges/PilotChallenge';
import AstronautChallenge from './components/challenges/AstronautChallenge';
import PowerGridChallenge from './components/challenges/PowerGridChallenge';
import EarthlingChallenge from './components/challenges/EarthlingChallenge';

// SVG Icons
const FarmerIcon: React.FC = () => <span className="text-3xl">🌾</span>;
const PilotIcon: React.FC = () => <span className="text-3xl">✈️</span>;
const AstronautIcon: React.FC = () => <span className="text-3xl">🚀</span>;
const PowerGridIcon: React.FC = () => <span className="text-3xl">⚡</span>;
const EarthlingIcon: React.FC = () => <span className="text-3xl">🌍</span>;
const GuardianIcon: React.FC = () => <span className="text-3xl">🏆</span>;

export const CHARACTERS: Record<CharacterRole, Character> = {
  farmer: {
    id: 'farmer',
    name: 'Farmer',
    description: 'Solar storms can affect weather satellites. Help the farmer get the right forecast to protect the crops!',
    icon: <FarmerIcon />,
    challengeComponent: FarmerChallenge,
    factTopic: 'Solar storms and weather satellites'
  },
  pilot: {
    id: 'pilot',
    name: 'Pilot',
    description: 'Space weather can disrupt GPS and radio signals. Guide the plane safely through the turbulence!',
    icon: <PilotIcon />,
    challengeComponent: PilotChallenge,
    factTopic: 'Space weather impact on aviation'
  },
  astronaut: {
    id: 'astronaut',
    name: 'Astronaut',
    description: 'Solar radiation is dangerous for astronauts. Help them get to the shielded room in time!',
    icon: <AstronautIcon />,
    challengeComponent: AstronautChallenge,
    factTopic: 'Solar radiation and astronaut safety'
  },
  powergrid: {
    id: 'powergrid',
    name: 'Power Grid Operator',
    description: 'Massive solar storms can overload power grids. Balance the circuits to prevent a blackout!',
    icon: <PowerGridIcon />,
    challengeComponent: PowerGridChallenge,
    factTopic: 'Geomagnetic storms and power grids'
  },
  earthling: {
    id: 'earthling',
    name: 'Aurora Explorer',
    description: 'One of the most beautiful effects of space weather is the aurora. Let\'s watch the sky!',
    icon: <EarthlingIcon />,
    challengeComponent: EarthlingChallenge,
    factTopic: 'The Aurora Borealis and Australis'
  }
};

export const BADGES: Record<CharacterRole | 'guardian', Badge> = {
  farmer: {
    id: 'farmer',
    name: 'Crop Protector',
    icon: <FarmerIcon />,
    description: 'You protected the crops from unpredictable weather!'
  },
  pilot: {
    id: 'pilot',
    name: 'Sky Navigator',
    icon: <PilotIcon />,
    description: 'You navigated safely through radio static!'
  },
  astronaut: {
    id: 'astronaut',
    name: 'Radiation Defender',
    icon: <AstronautIcon />,
    description: 'You kept the crew safe from harmful solar radiation!'
  },
  powergrid: {
    id: 'powergrid',
    name: 'Grid Guardian',
    icon: <PowerGridIcon />,
    description: 'You prevented a city-wide blackout!'
  },
  earthling: {
    id: 'earthling',
    name: 'Aurora Explorer',
    icon: <EarthlingIcon />,
    description: 'You witnessed the beauty of a solar storm!'
  },
  guardian: {
    id: 'guardian',
    name: 'Solar Guardian',
    icon: <GuardianIcon />,
    description: 'You saved Earth from a solar superstorm!'
  }
};
