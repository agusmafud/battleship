import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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

import {
  gameWelcomeMessage,
  instructionShip1Message,
  instructionShip2Message,
  instructionShip3Message,
  instructionNameMessage,
  startGameMessage,
} from 'utils/messages';
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
    className={cn(
      'start-screen',
      { 'start-screen--compact': compact },
    )}
    compact={compact}
  >
    <Grid container>
      <Grid
        className="start-screen__instructions-container"
        item
        xs={12}
      >
        <Instructions
          title={gameWelcomeMessage}
          instructions={
            shipsUnplaced.length
              ? [instructionShip1Message, instructionShip2Message, instructionShip3Message]
              : [instructionNameMessage]
          }
          compact={compact}
        />
      </Grid>
      <Grid
        className="start-screen__board-container"
        item
        xs={12}
        md={6}
      >
        <Board
          editableBoard
          board={board}
          handlePlaceShip={handlePlaceShip}
          handleUnplaceShip={handleUnplaceShip}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ShipsSelector
          shipsUnplaced={shipsUnplaced}
          handleToggleShipDirection={handleToggleShipDirection}
          shipSelectedId={shipSelectedId}
          handleChangeShipSelected={handleChangeShipSelected}
        />
        {!shipsUnplaced.length && (
          <div className="start-screen__start-game-container">
            <PlayerNameInput
              playerName={playerName}
              handleChangePlayerName={handleChangePlayerName}
            />
            <StartGameCta
              handleStartGame={handleStartGame}
              startGameEnabled={startGameEnabled}
              text={startGameMessage}
            />
          </div>
        )}
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
