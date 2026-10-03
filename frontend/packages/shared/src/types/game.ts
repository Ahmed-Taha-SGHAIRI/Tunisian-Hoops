export type GameStatus = 'scheduled' | 'live' | 'finished';

export interface QuarterScore {
  quarter: number;
  home: number;
  away: number;
}

export interface Game {
  id: string;
  seasonId: string;
  round: number;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number | null;
  awayScore: number | null;
  status: GameStatus;
  date: string; // ISO string
  venue: string;
  venueAr: string;
  quarterScores: QuarterScore[];
}

export interface GameStats {
  gameId: string;
  homeFieldGoalPct: number;
  awayFieldGoalPct: number;
  homeThreePointPct: number;
  awayThreePointPct: number;
  homeFreeThrowPct: number;
  awayFreeThrowPct: number;
  homeRebounds: number;
  awayRebounds: number;
  homeAssists: number;
  awayAssists: number;
  homeTurnovers: number;
  awayTurnovers: number;
}
