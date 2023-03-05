/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react';
import { favorite } from '../../interfaces';

interface ContextProps {
  activeElement: number | null;
  favorites: favorite;
  // *Metodos
  setActiveElement: (value: number | null) => void;
  // Characters
  addCharacter: (value: { characterId: number | null; userId: string }) => void;
  deleteCharacter: (value: {
    characterId: number | null;
    userId: string;
  }) => void;
  // Episodes
  addEpisode: (value: { episodeId: number | null; userId: string }) => void;
  deleteEpisode: (value: { episodeId: number | null; userId: string }) => void;
  // Locations
  addLocation: (value: { locationId: number | null; userId: string }) => void;
  deleteLocation: (value: {
    locationId: number | null;
    userId: string;
  }) => void;
}

export const FavoriteContext = createContext({} as ContextProps);
