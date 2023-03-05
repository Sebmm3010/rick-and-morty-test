/* eslint-disable @typescript-eslint/naming-convention */
import { FC, ReactNode, useContext, useReducer } from 'react';
import { FavoriteContext, favoriteReducer } from './';
import { AuthContext } from '../auth-context/AuthContext';
import { favorite } from '../../interfaces';

export interface favoriteState {
  activeElement: number | null;
  favorites: favorite;
}

interface Props {
  children: ReactNode;
}
export const FavoriteProvider: FC<Props> = ({ children }) => {
  const { user } = useContext(AuthContext);

  const initFavorites = localStorage.getItem(`${user._id}Favorites`)
    ? {
        activeElement: null,
        favorites: JSON.parse(
          localStorage.getItem(`${user._id}Favorites`) as string
        )
      }
    : {
        activeElement: null,
        favorites: { character: [], episodes: [], location: [] }
      };
  const Favorite_INITIAL_STATE: favoriteState = {
    activeElement: initFavorites.activeElement,
    favorites: initFavorites.favorites
  };

  const [state, dispatch] = useReducer(favoriteReducer, Favorite_INITIAL_STATE);

  const setActiveElement = (value: number | null) => {
    dispatch({ type: '[favorite] - setActiveElement', payload: value });
  };

  // ?Character
  const addCharacter = (value: {
    characterId: number | null;
    userId: string;
  }) => {
    dispatch({ type: '[favorite] - addCharacter', payload: value });
  };

  const deleteCharacter = (value: {
    characterId: number | null;
    userId: string;
  }) => {
    dispatch({ type: '[favorite] - deleteCharacter', payload: value });
  };

  // ?Character
  const addEpisode = (value: { episodeId: number | null; userId: string }) => {
    dispatch({ type: '[favorite] - addEpisode', payload: value });
  };

  const deleteEpisode = (value: {
    episodeId: number | null;
    userId: string;
  }) => {
    dispatch({ type: '[favorite] - deleteEpisode', payload: value });
  };
  // ?Location
  const addLocation = (value: {
    locationId: number | null;
    userId: string;
  }) => {
    dispatch({ type: '[favorite] - addLocation', payload: value });
  };

  const deleteLocation = (value: {
    locationId: number | null;
    userId: string;
  }) => {
    dispatch({ type: '[favorite] - deleteLocation', payload: value });
  };

  return (
    <FavoriteContext.Provider
      value={{
        ...state,
        // *Metodos
        setActiveElement,
        // ?Character
        addCharacter,
        deleteCharacter,
        // ?Episode
        addEpisode,
        deleteEpisode,
        // ?Location
        addLocation,
        deleteLocation
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
