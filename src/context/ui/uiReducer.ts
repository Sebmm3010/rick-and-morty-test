import { UiState } from './';

type uiActionType =
  | { type: '[ui] - showModal'; payload: boolean }
  | { type: '[ui] - setPath'; payload: string }
  | { type: '[ui] - setPageCollection'; payload: number[] };

export const uiReducer = (state: UiState, action: uiActionType): UiState => {
  switch (action.type) {
    case '[ui] - showModal':
      return {
        ...state,
        showModal: action.payload
      };
    case '[ui] - setPath':
      return {
        ...state,
        pathName: action.payload
      };
    case '[ui] - setPageCollection':
      return {
        ...state,
        pageCollection: action.payload
      };
    default:
      return state;
  }
};
