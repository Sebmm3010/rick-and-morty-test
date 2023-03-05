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
  const addCharacter = (value: {
    characterId: number | null;
    userId: string;
  }) => {
    dispatch({ type: '[favorite] - addCharacter', payload: value });
  };

  return (
    <FavoriteContext.Provider
      value={{
        ...state,
        setActiveElement,
        addCharacter
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
