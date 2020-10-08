import {
  TOGGLE_SHIP_DIRECTION,
  PLACE_SHIP,
  UNPLACE_SHIP,
  START_GAME,
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
