import type { Game } from '@tunisian-hoops/shared';

export const mockGames: Game[] = [
  {
    id: 'g1',
    seasonId: 's1',
    round: 1,
    homeTeamId: 't1', // Carthage Eagles
    awayTeamId: 't2', // Medina Stars
    homeScore: 82,
    awayScore: 78,
    status: 'finished',
    date: '2026-10-01T17:00:00Z',
    venue: 'Salle Omnisports',
    venueAr: 'القاعة متعددة الرياضات',
    quarterScores: [
      { quarter: 1, home: 20, away: 18 },
      { quarter: 2, home: 22, away: 21 },
      { quarter: 3, home: 18, away: 22 },
      { quarter: 4, home: 22, away: 17 },
    ]
  },
  {
    id: 'g2',
    seasonId: 's1',
    round: 1,
    homeTeamId: 't3', // Sahel United
    awayTeamId: 't4', // Kairouan Falcons
    homeScore: 68,
    awayScore: 68,
    status: 'live',
    date: '2026-10-03T18:00:00Z',
    venue: 'Complexe Sportif',
    venueAr: 'المركب الرياضي',
    quarterScores: [
      { quarter: 1, home: 15, away: 16 },
      { quarter: 2, home: 18, away: 20 },
      { quarter: 3, home: 20, away: 15 },
      { quarter: 4, home: 15, away: 17 }, // currently in Q4
    ]
  },
  {
    id: 'g3',
    seasonId: 's1',
    round: 2,
    homeTeamId: 't5', // Sfax Lions
    awayTeamId: 't1', // Carthage Eagles
    homeScore: null,
    awayScore: null,
    status: 'scheduled',
    date: '2026-10-08T16:00:00Z',
    venue: 'Complexe Sportif Sfax',
    venueAr: 'المركب الرياضي صفاقس',
    quarterScores: []
  },
  {
    id: 'g4',
    seasonId: 's1',
    round: 2,
    homeTeamId: 't2', // Medina Stars
    awayTeamId: 't3', // Sahel United
    homeScore: null,
    awayScore: null,
    status: 'scheduled',
    date: '2026-10-09T17:30:00Z',
    venue: 'Palais des Sports',
    venueAr: 'قصر الرياضات',
    quarterScores: []
  }
];
