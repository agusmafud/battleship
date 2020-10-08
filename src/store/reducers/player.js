import {
  TOGGLE_SHIP_DIRECTION,
  PLACE_SHIP,
  UNPLACE_SHIP,
  START_GAME,
} from 'store/actionTypes';
import {
  EMPTY_SPACE,
  OK_SHIP_SPACE,
} from 'utils/constants';
import { shipsInitialSetting } from 'utils/config';
import {
  createEmptyBoard,
  toggleShipDirectionById,
  placeShipById,
  unplaceShipById,
  updateBoard,
} from 'utils/helpers';

const initialState = {
  name: '',
  board: createEmptyBoard(),
  ships: shipsInitialSetting,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SHIP_DIRECTION: {
      const { shipId } = action.payload;
      const { ships } = state;
      const newShips = toggleShipDirectionById(ships, shipId);
      return {
        ...state,
        ships: newShips,
      };
    }
    case PLACE_SHIP: {
      const { shipId, spacesCoordinates } = action.payload;
      const { board, ships } = state;
      const newBoard = updateBoard(board, spacesCoordinates, OK_SHIP_SPACE);
      const newShips = placeShipById(ships, shipId, spacesCoordinates);
      return {
        ...state,
        board: newBoard,
        ships: newShips,
      };
    }
    case UNPLACE_SHIP: {
      const { shipId, spacesCoordinates } = action.payload;
      const { board, ships } = state;
      const newBoard = updateBoard(board, spacesCoordinates, EMPTY_SPACE);
      const newShips = unplaceShipById(ships, shipId);
      return {
        ...state,
        board: newBoard,
        ships: newShips,
      };
    }

    case START_GAME: {
      const { playerName } = action.payload;
      return {
        ...state,
        name: playerName,
      };
    }
    default: return state;
  }
}
