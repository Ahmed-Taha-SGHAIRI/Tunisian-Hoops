export type TransferType = 'signing' | 'loan' | 'return' | 'release';

export interface Transfer {
  id: string;
  playerId: string;
  playerName: string;
  playerNameAr: string;
  fromTeamId: string | null;
  toTeamId: string | null;
  date: string;
  type: TransferType;
  seasonId: string;
}
