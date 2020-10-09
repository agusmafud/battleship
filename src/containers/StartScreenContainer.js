import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPlayerShips,
  getPlayerBoard,
} from 'store/selectors';
import {
  toggleShipDirection,
  placeShip,
  unplaceShip,
  startGame,
} from 'store/actions';
import {
  canPlaceShip,
  getUnplacedShipAndSpaces,
  createComputer,
} from 'utils/helpers';
import StartScreen from 'views/StartScreen';

const StartScreenContainer = () => {
  const dispatch = useDispatch();
  const ships = useSelector((state) => getPlayerShips(state));
  const board = useSelector((state) => getPlayerBoard(state));

  const [playerName, setPlayerName] = useState('');
  const [shipSelectedId, setShipSelected] = useState(undefined);

  const shipsUnplaced = ships.filter((ship) => !ship.spacesAssigned.length);
  const startGameEnabled = !shipsUnplaced.length && !!playerName;

  const handleChangePlayerName = (name) => setPlayerName(name);
  const handleToggleShipDirection = (shipId) => dispatch(toggleShipDirection(shipId));
  const handleChangeShipSelected = (shipId) => setShipSelected(shipId);

  const handlePlaceShip = (spaceSelectedCoordinates) => {
    const { shouldPlace, spacesCoordinates } = (
      canPlaceShip(board, ships, spaceSelectedCoordinates, shipSelectedId));
    if (shouldPlace) {
      dispatch(placeShip(shipSelectedId, spacesCoordinates));
      setShipSelected(undefined);
    }
  };
  const handleUnplaceShip = (spaceSelectedCoordinates) => {
    const { shipId, spacesCoordinates } = getUnplacedShipAndSpaces(ships, spaceSelectedCoordinates);
    dispatch(unplaceShip(shipId, spacesCoordinates));
  };

  const handleStartGame = () => {
    const { computerBoard, computerShips } = createComputer();
    const computer = { board: computerBoard, ships: computerShips };
    return dispatch(startGame(playerName, computer));
  };

  return (
    <StartScreen
      playerName={playerName}
      board={board}
      shipsUnplaced={shipsUnplaced}
      shipSelectedId={shipSelectedId}
      startGameEnabled={startGameEnabled}
      handleChangePlayerName={handleChangePlayerName}
      handleToggleShipDirection={handleToggleShipDirection}
      handlePlaceShip={handlePlaceShip}
      handleUnplaceShip={handleUnplaceShip}
      handleChangeShipSelected={handleChangeShipSelected}
      handleStartGame={handleStartGame}
    />
  );
};

export default StartScreenContainer;
