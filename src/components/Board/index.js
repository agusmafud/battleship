import React from 'react';
import PropTypes from 'prop-types';

import { boardPropTypes } from 'utils/propTypesConstants';

import BoardSpace from './BoardSpace';
import './styles.scss';

const Board = ({
  board,
  handlePlaceShip,
  handleUnplaceShip,
}) => (
  <div className="board">
    {board.map((row) => (
      row.map((space) => (
        <BoardSpace
          key={`space-${space.i}${space.j}`}
          space={space}
          handlePlaceShip={handlePlaceShip}
          handleUnplaceShip={handleUnplaceShip}
        />
      ))
    ))}
  </div>
);

Board.propTypes = {
  board: boardPropTypes.isRequired,
  handlePlaceShip: PropTypes.func.isRequired,
  handleUnplaceShip: PropTypes.func.isRequired,
};

export default Board;
