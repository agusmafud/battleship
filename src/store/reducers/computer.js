import {
  START_GAME,
  COMPUTER_MISSILE_LAUNCH,
  PLAYER_MISSILE_LAUNCH,
} from 'store/actionTypes';

import {
  COMPUTER_HUNT_MODE,
} from 'utils/constants';

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
    case COMPUTER_MISSILE_LAUNCH: {
      const { attackMode } = action.payload;
      return {
        ...state,
        attackMode,
      };
    }
    case PLAYER_MISSILE_LAUNCH: {
      const { newComputerBoard, newComputerShips } = action.payload;
      return {
        ...state,
        board: newComputerBoard,
        ships: newComputerShips,
      };
    }
    default: return state;
  }
}
