export type FormResult = 'W' | 'L';

export interface Standing {
  teamId: string;
  rank: number;
  played: number;
  won: number;
  lost: number;
  points: number;
  pointsFor: number;
  pointsAgainst: number;
  diff: number;
  form: FormResult[];
}
