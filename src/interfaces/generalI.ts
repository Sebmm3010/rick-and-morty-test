import { CharacterResult } from './charactersList';
import { EpisodesResult } from './episodesList';
import { LocationResult } from './locationList';

export interface DataList {
  info: Info;
  results: Results;
}
export type Results = CharacterResult[] | EpisodesResult[] | LocationResult[];

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
}
