import React from 'react';
import PropTypes from 'prop-types';

import { boardPropTypes } from 'utils/propTypesConstants';
import {
  EMPTY_SPACE,
  OK_SHIP_SPACE,
} from 'utils/constants';

import BoardSpace from './BoardSpace';
import './styles.scss';

const Board = ({
  board,
  editableBoard,
  computerBoard,
  handlePlaceShip,
  handleUnplaceShip,
  handlePlayerMissileAttack,
}) => {
  const computerBoardClickable = (space) => (
    computerBoard && (space.status === EMPTY_SPACE || space.status === OK_SHIP_SPACE)
  );

  const handleClick = (spaceSelected) => {
    if (editableBoard) {
      return spaceSelected.status === EMPTY_SPACE
        ? handlePlaceShip({ i: spaceSelected.i, j: spaceSelected.j })
        : handleUnplaceShip({ i: spaceSelected.i, j: spaceSelected.j });
    }
    if (computerBoardClickable(spaceSelected)) {
      return handlePlayerMissileAttack({ i: spaceSelected.i, j: spaceSelected.j });
    }
    return null;
  };

  const getClickHandler = (space) => (
    editableBoard || computerBoardClickable(space)
      ? handleClick
      : null
  );
  return (
    <div className="board">
      {board.map((row) => (
        row.map((space) => (
          <BoardSpace
            key={`space-${space.i}${space.j}`}
            space={space}
            handleClick={getClickHandler(space)}
          />
        ))
      ))}
    </div>
  );
};

Board.propTypes = {
  board: boardPropTypes.isRequired,
  editableBoard: PropTypes.bool,
  computerBoard: PropTypes.bool,
  handlePlaceShip: PropTypes.func,
  handleUnplaceShip: PropTypes.func,
  handlePlayerMissileAttack: PropTypes.func,
};
Board.defaultProps = {
  editableBoard: false,
  computerBoard: false,
  handlePlaceShip: undefined,
  handleUnplaceShip: undefined,
  handlePlayerMissileAttack: undefined,
};

export default Board;
