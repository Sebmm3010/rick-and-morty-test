import { favoriteState } from './';

type favoriteActionType =
  | { type: '[favorite] - setActiveElement'; payload: number | null }
  | {
      type: '[favorite] - addCharacter';
      payload: { characterId: number | null; userId: string };
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
    case '[favorite] - addCharacter':
      state.favorites.character.push(action.payload.characterId as number);
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
