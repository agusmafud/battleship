import React from 'react';
import PropTypes from 'prop-types';

import {
  boardPropTypes,
  shipPropTypes,
} from 'utils/propTypesConstants';
import Layout from 'components/Layout';
import Grid from '@material-ui/core/Grid';
import Board from 'components/Board';
import Instructions from 'components/Instructions';
import ShipsSelector from 'components/ShipsSelector';
import PlayerNameInput from 'components/PlayerNameInput';
import StartGameCta from 'components/StartGameCta';

import './styles.scss';

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
  compact,
}) => (
  <Layout
    className="start-screen"
    compact={compact}
  >
    <Grid container>
      <Grid
        className="start-screen__instructions-container"
        item
        xs={12}
      >
        <Instructions shipsPlaced={!shipsUnplaced.length} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Board
          board={board}
          handlePlaceShip={handlePlaceShip}
          handleUnplaceShip={handleUnplaceShip}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ShipsSelector
          shipsUnplaced={shipsUnplaced}
          handleToggleShipDirection={handleToggleShipDirection}
          shipSelectedId={shipSelectedId}
          handleChangeShipSelected={handleChangeShipSelected}
        />
        <div className="start-screen__start-game-container">
          <PlayerNameInput
            playerName={playerName}
            handleChangePlayerName={handleChangePlayerName}
          />
          <StartGameCta
            handleStartGame={handleStartGame}
            startGameEnabled={startGameEnabled}
          />
        </div>
      </Grid>
    </Grid>
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
  compact: PropTypes.bool,
};

StartScreen.defaultProps = {
  shipSelectedId: undefined,
  compact: false,
};

export default StartScreen;
