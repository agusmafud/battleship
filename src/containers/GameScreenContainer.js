import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  getGame,
  getPlayer,
  getComputer,
} from 'store/selectors';
import {
  surrender,
  endGame,
  playerMissileLaunch,
  computerMissileLaunch,
} from 'store/actions';
import {
  launchPlayerMissile,
  launchComputerMissile,
} from 'utils/helpers';
import {
  COMPUTER,
  PLAYER_WON,
  PLAYER_LOST,
} from 'utils/constants';
import GameScreen from 'views/GameScreen';

const GameScreenContainer = ({ compact }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => getGame(state));
  const player = useSelector((state) => getPlayer(state));
  const computer = useSelector((state) => getComputer(state));

  useEffect(() => {
    if (!computer.ships.length) dispatch(endGame(PLAYER_WON));
    if (!player.ships.length) dispatch(endGame(PLAYER_LOST));
    if (game.activePlayer === COMPUTER && computer.ships.length) {
      const {
        newBoard,
        newShips,
        attemptFeedback,
        attackMode,
      } = launchComputerMissile();
      dispatch(computerMissileLaunch(newBoard, newShips, attemptFeedback, attackMode));
    }
  }, [
    computer.ships.length,
    player.ships.length,
    game.activePlayer,
    dispatch,
  ]);

  const handlePlayerMissileAttack = (spaceCoordinates) => {
    const { newBoard, newShips, attemptFeedback } = launchPlayerMissile(spaceCoordinates);
    dispatch(playerMissileLaunch(newBoard, newShips, attemptFeedback));
  };
  const handleSurrender = () => dispatch(surrender(game.turn));

  return (
    <GameScreen
      game={game}
      player={player}
      computer={computer}
      handlePlayerMissileAttack={handlePlayerMissileAttack}
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
