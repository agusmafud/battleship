import React from 'react';
import PropTypes from 'prop-types';

import { boardPropTypes } from 'utils/propTypesConstants';

const Board = ({
  board,
  handlePlaceShip,
  handleUnplaceShip,
}) => (
  <div className="board">
    Board
  </div>
);

Board.propTypes = {
  board: boardPropTypes.isRequired,
  handlePlaceShip: PropTypes.func.isRequired,
  handleUnplaceShip: PropTypes.func.isRequired,
};

export default Board;
