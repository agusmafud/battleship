import {
  START_GAME,
} from 'store/actionTypes';

import {
  START_SCREEN,
  GAME_SCREEN,
  PLAYER,
} from 'utils/constants';

const initialState = {
  activeScreen: START_SCREEN,
  attemptFeedback: undefined,
  turn: 1,
  activePlayer: PLAYER,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        activeScreen: GAME_SCREEN,
        attemptFeedback: undefined,
        turn: 1,
        activePlayer: PLAYER,
      };
    }

    default: return state;
  }
}
