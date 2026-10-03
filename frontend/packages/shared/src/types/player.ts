export type PlayerPosition = 'PG' | 'SG' | 'SF' | 'PF' | 'C';

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  firstNameAr: string;
  lastNameAr: string;
  slug: string;
  teamId: string;
  position: PlayerPosition;
  number: number;
  height: number; // cm
  weight: number; // kg
  dateOfBirth: string;
  nationality: string;
}

export interface PlayerSeasonStats {
  playerId: string;
  seasonId: string;
  gamesPlayed: number;
  minutesPerGame: number;
  pointsPerGame: number;
  reboundsPerGame: number;
  assistsPerGame: number;
  stealsPerGame: number;
  blocksPerGame: number;
  fgPercentage: number;
  threePointPercentage: number;
  ftPercentage: number;
}
