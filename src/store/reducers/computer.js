import {
  START_GAME,
  COMPUTER_HUNT_MODE,
} from 'store/actionTypes';

const initialState = {
  attackMode: COMPUTER_HUNT_MODE,
  board: undefined,
  ships: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      const { computer } = action.payload;
      return {
        ...state,
        attackMode: COMPUTER_HUNT_MODE,
        ...computer,
      };
    }
    default: return state;
  }
}
