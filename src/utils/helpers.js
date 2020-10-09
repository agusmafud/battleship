import {
  EMPTY_SPACE,
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
  OK_SHIP_SPACE,
} from 'utils/constants';
import { shipsInitialSetting } from 'utils/config';

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

export const toggleShipDirection = (ships, shipId) => (
  ships.map((ship) => (ship.id === shipId
    ? {
      ...ship,
      direction: ship.direction === SHIP_HORIZONTAL ? SHIP_VERTICAL : SHIP_HORIZONTAL,
    }
    : ship))
);
export const placeShip = (ships, shipId, spacesAssigned) => (
  ships.map((ship) => (ship.id === shipId
    ? { ...ship, spacesAssigned }
    : ship))
);
export const unplaceShip = (ships, shipId) => (
  ships.map((ship) => (ship.id === shipId
    ? { ...ship, spacesAssigned: [] }
    : ship))
);

export const canPlaceShip = (board, ships, spaceSelectedCoordinates, shipSelectedId) => {
  const spacesCoordinates = [];
  if (shipSelectedId === undefined || !spaceSelectedCoordinates) {
    return { shouldPlace: false, spacesCoordinates };
  }
  const shipSelected = ships.find((ship) => ship.id === shipSelectedId);
  let { i, j } = spaceSelectedCoordinates;
  for (let index = 0; index < shipSelected.spaces; index += 1) {
    if (i < 0 || i > 9 || j < 0 || j > 9 || board[i][j].status !== EMPTY_SPACE) {
      return { shouldPlace: false, spacesCoordinates: [] };
    }
    spacesCoordinates.push({ i, j });
    if (shipSelected.direction === SHIP_VERTICAL) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return { shouldPlace: true, spacesCoordinates };
};
export const areEqualCoordinates = (coordinate1, coordinate2) => (
  coordinate1.i === coordinate2.i && coordinate1.j === coordinate2.j
);
export const getUnplacedShipAndSpaces = (ships, spaceSelectedCoordinates) => {
  const ship = ships.find((s) => s.spacesAssigned.find(
    (space) => areEqualCoordinates(space, spaceSelectedCoordinates),
  ));
  return { shipId: ship.id, spacesCoordinates: ship.spacesAssigned };
};

export const updateBoard = (board, spacesCoordinates, spaceStatus) => {
  const newBoard = [...board];
  for (let index = 0; index < spacesCoordinates.length; index += 1) {
    newBoard[spacesCoordinates[index].i][spacesCoordinates[index].j].status = spaceStatus;
  }
  return newBoard;
};

export const getRandomInt = (min, max) => {
  const top = max + 1;
  return Math.floor(Math.random() * (top - min)) + min;
};

export const getBoardAvailablePosition = (board, ship, direction) => {
  let i;
  let j;
  let spacesCoordinates = [];

  while (!spacesCoordinates.length) {
    do {
      i = direction === SHIP_VERTICAL ? getRandomInt(0, 9 - ship.spaces) : getRandomInt(0, 9);
      j = direction === SHIP_HORIZONTAL ? getRandomInt(0, 9 - ship.spaces) : getRandomInt(0, 9);
    } while (board[i][j].status !== EMPTY_SPACE);

    for (let index = 0; index < ship.spaces; index += 1) {
      if (board[i][j].status !== EMPTY_SPACE) {
        spacesCoordinates = [];
        break;
      }
      spacesCoordinates.push({ i, j });
      if (direction === SHIP_VERTICAL) {
        i += 1;
      } else {
        j += 1;
      }
    }
  }
  return spacesCoordinates;
};
export const createComputer = () => {
  const directions = [SHIP_HORIZONTAL, SHIP_VERTICAL];
  const computerBoard = createEmptyBoard();
  const computerShips = shipsInitialSetting;

  for (let shipIndex = 0; shipIndex < computerShips.length; shipIndex += 1) {
    const randomDirection = directions[getRandomInt(0, 1)];
    const spaces = getBoardAvailablePosition(
      computerBoard, computerShips[shipIndex], randomDirection,
    );

    for (let spaceIndex = 0; spaceIndex < spaces.length; spaceIndex += 1) {
      computerBoard[spaces[spaceIndex].i][spaces[spaceIndex].j].status = OK_SHIP_SPACE;
    }
    computerShips[shipIndex].direction = randomDirection;
    computerShips[shipIndex].spacesAssigned = [...spaces];
  }
  return { computerBoard, computerShips };
};
