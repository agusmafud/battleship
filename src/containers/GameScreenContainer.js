import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  getGame,
  getPlayer,
  getComputer,
} from 'store/selectors';
import GameScreen from 'views/GameScreen';

const GameScreenContainer = ({ compact }) => {
  const game = useSelector((state) => getGame(state));
  const player = useSelector((state) => getPlayer(state));
  const computer = useSelector((state) => getComputer(state));

  const handleAdvanceTurn = () => {};
  const handleSurrender = () => {};

  return (
    <GameScreen
      game={game}
      player={player}
      computer={computer}
      handleAdvanceTurn={handleAdvanceTurn}
      handleSurrender={handleSurrender}
      compact={compact}
    />
  );
};

GameScreenContainer.propTypes = {
  compact: PropTypes.bool,
};

GameScreenContainer.defaultProps = {
  compact: false,
};

export default GameScreenContainer;
