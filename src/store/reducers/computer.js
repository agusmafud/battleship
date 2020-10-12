import {
  START_GAME,
  COMPUTER_MISSILE_LAUNCH,
  PLAYER_MISSILE_LAUNCH,
} from 'store/actionTypes';
import {
  COMPUTER_HUNT_MODE,
} from 'utils/constants';
import { shipsInitialSetting } from 'utils/config';
import {
  createEmptyBoard,
} from 'utils/helpers';

const initialState = {
  attackMode: COMPUTER_HUNT_MODE,
  board: undefined,
  ships: undefined,
  attackBoard: createEmptyBoard(true),
  attackShips: shipsInitialSetting,
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
      const { attackMode, newAttackBoard, newAttackShips } = action.payload;
      return {
        ...state,
        attackMode,
        newAttackBoard,
        newAttackShips,
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
