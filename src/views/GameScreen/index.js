import React from 'react';
import PropTypes from 'prop-types';

import {
  gamePropTypes,
  playerPropTypes,
  computerPropTypes,
} from 'utils/propTypesConstants';
import Layout from 'components/Layout';

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
    GameScreen
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
