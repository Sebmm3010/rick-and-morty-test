import { favoriteState } from './';

type favoriteActionType =
  | { type: '[favorite] - setActiveElement'; payload: number | null }
  // ?Characters
  | {
      type: '[favorite] - addCharacter';
      payload: { characterId: number | null; userId: string };
    }
  | {
      type: '[favorite] - deleteCharacter';
      payload: { characterId: number | null; userId: string };
    }
  // ?Episodes
  | {
      type: '[favorite] - addEpisode';
      payload: { episodeId: number | null; userId: string };
    }
  | {
      type: '[favorite] - deleteEpisode';
      payload: { episodeId: number | null; userId: string };
    }
  // ?Location
  | {
      type: '[favorite] - addLocation';
      payload: { locationId: number | null; userId: string };
    }
  | {
      type: '[favorite] - deleteLocation';
      payload: { locationId: number | null; userId: string };
    };
export const favoriteReducer = (
  state: favoriteState,
  action: favoriteActionType
): favoriteState => {
  switch (action.type) {
    case '[favorite] - setActiveElement':
      return {
        ...state,
        activeElement: action.payload
      };
    // ?Character
    case '[favorite] - addCharacter':
      state.favorites.character.push(action.payload.characterId as number);
      localStorage.setItem(
        `${action.payload.userId}Favorites`,
        JSON.stringify(state.favorites)
      );
      return {
        ...state
      };
    case '[favorite] - deleteCharacter':
      state.favorites.character = state.favorites.character.filter(
        (n) => n !== action.payload.characterId
      );
      localStorage.setItem(
        `${action.payload.userId}Favorites`,
        JSON.stringify(state.favorites)
      );
      return {
        ...state
      };
    // ?Episode
    case '[favorite] - addEpisode':
      state.favorites.episodes.push(action.payload.episodeId as number);
      localStorage.setItem(
        `${action.payload.userId}Favorites`,
        JSON.stringify(state.favorites)
      );
      return {
        ...state
      };
    case '[favorite] - deleteEpisode':
      state.favorites.episodes = state.favorites.episodes.filter(
        (n) => n !== action.payload.episodeId
      );
      localStorage.setItem(
        `${action.payload.userId}Favorites`,
        JSON.stringify(state.favorites)
      );
      return {
        ...state
      };
    // ?Location
    case '[favorite] - addLocation':
      state.favorites.location.push(action.payload.locationId as number);
      localStorage.setItem(
        `${action.payload.userId}Favorites`,
        JSON.stringify(state.favorites)
      );
      return {
        ...state
      };
    case '[favorite] - deleteLocation':
      state.favorites.location = state.favorites.location.filter(
        (n) => n !== action.payload.locationId
      );
      localStorage.setItem(
        `${action.payload.userId}Favorites`,
        JSON.stringify(state.favorites)
      );
      return {
        ...state
      };
    default:
      return state;
  }
};
