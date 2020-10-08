import {
  START_GAME,
} from 'store/actionTypes';

import {
  START_SCREEN,
  GAME_SCREEN,
} from 'utils/constants';

const initialState = {
  activeScreen: START_SCREEN,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        activeScreen: GAME_SCREEN,
      };
    }

    default: return state;
  }
}
