import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { boardSpacePropTypes } from 'utils/propTypesConstants';
import {
  EMPTY_SPACE,
} from 'utils/constants';
import './styles.scss';

const BoardSpace = ({
  space,
  handlePlaceShip,
  handleUnplaceShip,
}) => {
  const handleClick = () => (
    space.status === EMPTY_SPACE
      ? handlePlaceShip({ i: space.i, j: space.j })
      : handleUnplaceShip({ i: space.i, j: space.j })
  );
  return (
    <div
      className={cn(
        'board-space',
        `board-space--${space.status}`,
      )}
      aria-label="Select"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleClick}
    />
  );
};

BoardSpace.propTypes = {
  space: boardSpacePropTypes.isRequired,
  handlePlaceShip: PropTypes.func.isRequired,
  handleUnplaceShip: PropTypes.func.isRequired,
};

export default BoardSpace;
