import React from 'react';
import PropTypes from 'prop-types';

import {
  boardPropTypes,
  shipPropTypes,
} from 'utils/propTypesConstants';
import Layout from 'components/Layout';
import Column from 'components/Column';
import Board from 'components/Board';
import Instructions from 'components/Instructions';
import ShipsSelector from 'components/ShipsSelector';
import PlayerNameInput from 'components/PlayerNameInput';
import StartGameCta from 'components/StartGameCta';

const StartScreen = ({
  playerName,
  board,
  shipsUnplaced,
  shipSelectedId,
  startGameEnabled,
  handleChangePlayerName,
  handleToggleShipDirection,
  handlePlaceShip,
  handleUnplaceShip,
  handleChangeShipSelected,
  handleStartGame,
}) => (
  <Layout>
    <Column>
      <Board
        board={board}
        handlePlaceShip={handlePlaceShip}
        handleUnplaceShip={handleUnplaceShip}
      />
    </Column>
    <Column>
      <ShipsSelector
        shipsUnplaced={shipsUnplaced}
        handleToggleShipDirection={handleToggleShipDirection}
        shipSelectedId={shipSelectedId}
        handleChangeShipSelected={handleChangeShipSelected}
      />
      <Instructions
        playerNameEntered={!!playerName}
        shipsPlaced={!shipsUnplaced.length}
        startGameEnabled={startGameEnabled}
      />
      <PlayerNameInput
        playerName={playerName}
        handleChangePlayerName={handleChangePlayerName}
      />
      <StartGameCta
        handleStartGame={handleStartGame}
        startGameEnabled={startGameEnabled}
      />
    </Column>
  </Layout>
);

StartScreen.propTypes = {
  playerName: PropTypes.string.isRequired,
  board: boardPropTypes.isRequired,
  shipsUnplaced: PropTypes.arrayOf(shipPropTypes).isRequired,
  shipSelectedId: PropTypes.number,
  startGameEnabled: PropTypes.bool.isRequired,
  handleChangePlayerName: PropTypes.func.isRequired,
  handleToggleShipDirection: PropTypes.func.isRequired,
  handlePlaceShip: PropTypes.func.isRequired,
  handleUnplaceShip: PropTypes.func.isRequired,
  handleChangeShipSelected: PropTypes.func.isRequired,
  handleStartGame: PropTypes.func.isRequired,
};

StartScreen.defaultProps = {
  shipSelectedId: undefined,
};

export default StartScreen;
