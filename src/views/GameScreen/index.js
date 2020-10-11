import React from 'react';
import PropTypes from 'prop-types';

import {
  gamePropTypes,
  playerPropTypes,
  computerPropTypes,
} from 'utils/propTypesConstants';
import Layout from 'components/Layout';
import Grid from '@material-ui/core/Grid';
import Board from 'components/Board';
import StatusBar from 'components/StatusBar';

import './styles.scss';

const GameScreen = ({
  game,
  player,
  computer,
  handlePlayerMissileAttack,
  handleSurrender,
  compact,
}) => (
  <Layout
    className="game-screen"
    compact={compact}
  >
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Board board={player.board} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Board
          computerBoard
          board={computer.board}
          handlePlayerMissileAttack={handlePlayerMissileAttack}
        />
      </Grid>
      <Grid item xs={12}>
        <StatusBar
          playerAttemptFeedback={game.playerAttemptFeedback}
          computerAttemptFeedback={game.computerAttemptFeedback}
          turn={game.turn}
          activePlayer={game.activePlayer}
          handleSurrender={handleSurrender}
        />
      </Grid>
    </Grid>
  </Layout>
);

GameScreen.propTypes = {
  game: gamePropTypes.isRequired,
  player: playerPropTypes.isRequired,
  computer: computerPropTypes.isRequired,
  handlePlayerMissileAttack: PropTypes.func.isRequired,
  handleSurrender: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

GameScreen.defaultProps = {
  compact: false,
};

export default GameScreen;
