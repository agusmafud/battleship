import {
  START_GAME,
  COMPUTER_MISSILE_LAUNCH,
  PLAYER_MISSILE_LAUNCH,
  RESTART_GAME,
} from 'store/actionTypes';
import {
  COMPUTER_HUNT_MODE,
} from 'utils/constants';
import {
  createEmptyBoard,
  createShipsInitialSetting,
} from 'utils/helpers';

const initialState = {
  attackMode: COMPUTER_HUNT_MODE,
  board: undefined,
  ships: undefined,
  attackBoard: createEmptyBoard(true),
  attackShips: createShipsInitialSetting(),
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
    case RESTART_GAME: {
      const newAttackBoard = createEmptyBoard(true);
      const newAttackShips = createShipsInitialSetting();
      return {
        attackMode: COMPUTER_HUNT_MODE,
        board: undefined,
        ships: undefined,
        attackBoard: newAttackBoard,
        attackShips: newAttackShips,
      };
    }
    case RESTART_GAME: return initialState;
    default: return state;
  }
}
