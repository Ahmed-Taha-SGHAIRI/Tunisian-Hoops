export interface League {
  id: string;
  name: string;
  slug: string;
  country: string;
}

export interface Season {
  id: string;
  leagueId: string;
  name: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}
