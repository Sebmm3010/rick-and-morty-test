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

export interface validUser {
  _id: string;
  userName: string;
  email: string;
  password: string;
}

export interface favorite {
  character: number[];
  episodes: number[];
  location: number[];
}
