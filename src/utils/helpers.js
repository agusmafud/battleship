import {
  EMPTY_SPACE,
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
  OK_SHIP_SPACE,
  HIT_SHIP_SPACE,
  DESTROYED_SHIP_SPACE,
  SHOT_MISSED_SPACE,
  SHIP_HIT,
  SHIP_DESTROYED,
} from 'utils/constants';
import { shipsInitialSetting } from 'utils/config';

export const createEmptyBoard = (heatMap = false) => {
  const emptyBoard = [];
  for (let i = 0; i < 10; i += 1) {
    emptyBoard.push([]);
    emptyBoard[i].push(new Array(10));
    for (let j = 0; j < 10; j += 1) {
      emptyBoard[i][j] = {
        i,
        j,
        status: !heatMap ? EMPTY_SPACE : 0,
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

export const canPlaceShipbyDirection = (
  board,
  spaceSelectedCoordinates,
  ship,
  direction,
  heatMap = false,
) => {
  const spacesCoordinates = [];
  let { i, j } = spaceSelectedCoordinates;
  let hitShipSpaceCounter = 0;

  const noFitCriteria = (status) => (
    !heatMap
      ? status !== EMPTY_SPACE
      : status !== DESTROYED_SHIP_SPACE && status !== SHOT_MISSED_SPACE
  );
  const breakCondition = (index) => (
    !heatMap
      ? index < ship.spacesLeft
      : index < ship.spacesAssigned.length && hitShipSpaceCounter < ship.spacesAssigned.length
  );

  for (let index = 0; breakCondition(index); index += 1) {
    if (
      i < 0 || i > 9
      || j < 0 || j > 9
      || noFitCriteria(board[i][j].status)
    ) {
      return { canPlace: false, spacesCoordinates: [] };
    }
    if (heatMap && board[i][j].status === HIT_SHIP_SPACE) {
      hitShipSpaceCounter += 1;
    }
    spacesCoordinates.push({ i, j });
    if (direction === SHIP_VERTICAL) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return { canPlace: true, spacesCoordinates };
};

export const canPlaceShipbyId = (board, ships, spaceSelectedCoordinates, shipId) => {
  const ship = ships.find((s) => s.id === shipId);
  const { canPlace, spacesCoordinates } = canPlaceShipbyDirection(
    board,
    spaceSelectedCoordinates,
    ship,
    ship.direction,
  );
  return { canPlace, spacesCoordinates };
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
      i = direction === SHIP_VERTICAL ? getRandomInt(0, 9 - ship.spacesLeft) : getRandomInt(0, 9);
      j = direction === SHIP_HORIZONTAL ? getRandomInt(0, 9 - ship.spacesLeft) : getRandomInt(0, 9);
    } while (board[i][j].status !== EMPTY_SPACE);

    for (let index = 0; index < ship.spacesLeft; index += 1) {
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

const hitShipsByCoordinate = (ships, hitCoordinates) => (
  ships.reduce((acc, ship) => {
    const spaceIndex = ship.spacesAssigned.findIndex(
      (space) => areEqualCoordinates(space, hitCoordinates),
    );
    if (spaceIndex === -1) {
      return {
        ...acc,
        newShips: [...acc.newShips, ship],
      };
    }
    if (ship.spacesLeft > 1) {
      return {
        ...acc,
        attemptFeedback: {
          ...acc.attemptFeedback,
          status: HIT_SHIP_SPACE,
        },
        newShips: [
          ...acc.newShips,
          {
            ...ship,
            status: SHIP_HIT,
            spacesLeft: ship.spacesLeft - 1,
          },
        ],
      };
    }
    return {
      ...acc,
      attemptFeedback: {
        ...acc.attemptFeedback,
        status: DESTROYED_SHIP_SPACE,
        sunkenShip: ship.type,
      },
      alteredCoordinates: ship.spacesAssigned,
      newShips: [
        ...acc.newShips,
        {
          ...ship,
          status: SHIP_DESTROYED,
          spacesLeft: 0,
        },
      ],
    };
  }, {
    attemptFeedback: {
      status: SHOT_MISSED_SPACE,
      coordinate: hitCoordinates,
      sunkenShip: null,
    },
    alteredCoordinates: [hitCoordinates],
    newShips: [],
  })
);

export const launchPlayerMissile = (board, ships, spaceCoordinates) => {
  const {
    attemptFeedback,
    alteredCoordinates,
    newShips,
  } = hitShipsByCoordinate(ships, spaceCoordinates);
  const newBoard = updateBoard(board, alteredCoordinates, attemptFeedback.status);
  return { newBoard, newShips, attemptFeedback };
};

const calculateAttackPosition = (board, attackMode) => {
  const spaceCoordinates = { i: getRandomInt(0, 9), j: getRandomInt(0, 9) };
  const newAttackMode = attackMode;
  return {
    spaceCoordinates,
    newAttackMode,
  };
};

export const launchComputerMissile = (board, ships, attackMode) => {
  const { spaceCoordinates, newAttackMode } = calculateAttackPosition(board, attackMode);
  const {
    attemptFeedback,
    alteredCoordinates,
    newShips,
  } = hitShipsByCoordinate(ships, spaceCoordinates);
  const newBoard = updateBoard(board, alteredCoordinates, attemptFeedback.status);
  return {
    newBoard,
    newShips,
    attemptFeedback,
    newAttackMode,
  };
};
