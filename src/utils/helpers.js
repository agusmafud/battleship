import {
  EMPTY_SPACE,
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
} from 'utils/constants';

export const createEmptyBoard = () => {
  const emptyBoard = [];
  for (let i = 0; i < 10; i += 1) {
    emptyBoard.push([]);
    emptyBoard[i].push(new Array(10));
    for (let j = 0; j < 10; j += 1) {
      emptyBoard[i][j] = {
        i,
        j,
        status: EMPTY_SPACE,
      };
    }
  }
  return emptyBoard;
};

export const toggleShipDirectionById = (ships, shipId) => (
  ships.map((ship) => (ship.id === shipId
    ? {
      ...ship,
      direction: ship.direction === SHIP_HORIZONTAL ? SHIP_VERTICAL : SHIP_HORIZONTAL,
    }
    : ship))
);
export const placeShipById = (ships, shipId, spacesCoordinates) => (
  ships.map((ship) => (ship.id === shipId
    ? { ...ship, spacesCoordinates }
    : ship))
);
export const unplaceShipById = (ships, shipId) => (
  ships.map((ship) => (ship.id === shipId
    ? { ...ship, spacesAssigned: [] }
    : ship))
);

export const updateBoard = (board, spacesCoordinates, spaceStatus) => {
  const newBoard = [...board];
  for (let index = 0; index < spacesCoordinates.length; index += 1) {
    newBoard[spacesCoordinates[index].i][spacesCoordinates[index].i].status = spaceStatus;
  }
};
