import { CharacterResult } from './charactersList';

export interface DataList {
  info: Info;
  results: Results;
}
export type Results = CharacterResult[];

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
}
