import { UiState } from './';

type uiActionType = { type: '[ui] - showModal'; payload: boolean };

export const uiReducer = (state: UiState, action: uiActionType): UiState => {
  switch (action.type) {
    case '[ui] - showModal':
      return {
        ...state,
        showModal: action.payload
      };

    default:
      return state;
  }
};
