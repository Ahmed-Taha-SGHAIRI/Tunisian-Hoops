import { 
  mockTeams, 
  mockPlayers, 
  mockGames, 
  mockStandings, 
  mockNews, 
  mockTransfers 
} from '../mock';

// Simulate network delay
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  teams: {
    getAll: async () => {
      await delay();
      return mockTeams;
    },
    getBySlug: async (slug: string) => {
      await delay();
      return mockTeams.find(t => t.slug === slug);
    },
    getById: async (id: string) => {
      await delay();
      return mockTeams.find(t => t.id === id);
    }
  },
  
  players: {
    getAll: async () => {
      await delay();
      return mockPlayers;
    },
    getByTeam: async (teamId: string) => {
      await delay();
      return mockPlayers.filter(p => p.teamId === teamId);
    },
    getBySlug: async (slug: string) => {
      await delay();
      return mockPlayers.find(p => p.slug === slug);
    }
  },

  games: {
    getAll: async () => {
      await delay();
      return mockGames;
    },
    getLive: async () => {
      await delay();
      return mockGames.filter(g => g.status === 'live');
    },
    getUpcoming: async () => {
      await delay();
      return mockGames.filter(g => g.status === 'scheduled');
    },
    getFinished: async () => {
      await delay();
      return mockGames.filter(g => g.status === 'finished');
    },
    getByTeam: async (teamId: string) => {
      await delay();
      return mockGames.filter(g => g.homeTeamId === teamId || g.awayTeamId === teamId);
    }
  },

  standings: {
    get: async () => {
      await delay();
      return [...mockStandings].sort((a, b) => a.rank - b.rank);
    }
  },

  news: {
    getLatest: async (limit: number = 5) => {
      await delay();
      return [...mockNews].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit);
    }
  },

  transfers: {
    getLatest: async (limit: number = 5) => {
      await delay();
      return [...mockTransfers].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
    }
  }
};
