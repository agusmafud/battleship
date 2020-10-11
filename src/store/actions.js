import {
  TOGGLE_SHIP_DIRECTION,
  PLACE_SHIP,
  UNPLACE_SHIP,
  START_GAME,
  SURRENDER,
  END_GAME,
  PLAYER_MISSILE_LAUNCH,
  COMPUTER_MISSILE_LAUNCH,
} from './actionTypes';

export const toggleShipDirection = (shipId) => ({
  type: TOGGLE_SHIP_DIRECTION,
  payload: { shipId },
});

export const placeShip = (shipId, spacesCoordinates) => ({
  type: PLACE_SHIP,
  payload: { shipId, spacesCoordinates },
});

export const unplaceShip = (shipId, spacesCoordinates) => ({
  type: UNPLACE_SHIP,
  payload: { shipId, spacesCoordinates },
});

export const startGame = (playerName, computer) => ({
  type: START_GAME,
  payload: { playerName, computer },
});

export const surrender = (turn) => ({
  type: SURRENDER,
  payload: { turn },
});

export const endGame = (gameResult) => ({
  type: END_GAME,
  payload: { gameResult },
});

export const playerMissileLaunch = (
  newComputerBoard,
  newComputerShips,
  computerAttemptFeedback,
) => ({
  type: PLAYER_MISSILE_LAUNCH,
  payload: { newComputerBoard, newComputerShips, computerAttemptFeedback },
});

export const computerMissileLaunch = (
  newPlayerBoard,
  newPlayerShips,
  playerAttemptFeedback,
  attackMode,
) => ({
  type: COMPUTER_MISSILE_LAUNCH,
  payload: {
    newPlayerBoard,
    newPlayerShips,
    playerAttemptFeedback,
    attackMode,
  },
});
