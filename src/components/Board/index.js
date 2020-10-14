import React from 'react';
import PropTypes from 'prop-types';

import { boardPropTypes } from 'utils/propTypesConstants';

import BoardSpace from './BoardSpace';
import './styles.scss';

const Board = ({
  computerBoard,
  board,
  handleBoardClick,
}) => (
  <div className="board">
    {board.map((row) => (
      row.map((space) => (
        <BoardSpace
          key={`space-${space.i}${space.j}`}
          computerBoard={computerBoard}
          space={space}
          handleClick={handleBoardClick}
        />
      ))
    ))}
  </div>
);

Board.propTypes = {
  computerBoard: PropTypes.bool,
  board: boardPropTypes.isRequired,
  handleBoardClick: PropTypes.func,
};
Board.defaultProps = {
  computerBoard: false,
  handleBoardClick: null,
};

export default Board;
