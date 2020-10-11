import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { boardSpacePropTypes } from 'utils/propTypesConstants';
import {
  EMPTY_SPACE,
  OK_SHIP_SPACE,
} from 'utils/constants';
import './styles.scss';

const BoardSpace = ({
  space,
  fog,
  handleClick,
}) => {
  const inputProps = handleClick && {
    'aria-label': 'Select',
    role: 'button',
    tabIndex: 0,
    onClick: () => handleClick(space),
    onKeyPress: () => handleClick(space),
  };
  return (
    <div
      className={cn(
        'board-space',
        { [`board-space--${space.status}`]: !fog || (fog && space.status !== OK_SHIP_SPACE) },
        { [`board-space--${EMPTY_SPACE}`]: fog && space.status === OK_SHIP_SPACE },
        { 'board-space--clickable': handleClick },
      )}
      {...(inputProps)}
    />
  );
};

BoardSpace.propTypes = {
  space: boardSpacePropTypes.isRequired,
  fog: PropTypes.bool,
  handleClick: PropTypes.func,
};
BoardSpace.defaultProps = {
  fog: false,
  handleClick: undefined,
};

export default BoardSpace;
