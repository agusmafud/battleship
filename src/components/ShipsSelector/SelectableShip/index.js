import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import {
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
} from 'utils/constants';
import {
  shipPropTypes,
} from 'utils/propTypesConstants';
import rotateIcon from 'assets/rotate.svg';
import './styles.scss';

const SelectableShip = ({
  ship,
  handleToggleShipDirection,
  selected,
  handleChangeShipSelected,
}) => (
  <div
    className={cn(
      'ship',
      {
        [`ship--${SHIP_HORIZONTAL}`]: ship.direction === SHIP_HORIZONTAL,
        [`ship--${SHIP_VERTICAL}`]: ship.direction === SHIP_VERTICAL,
        'ship--selected': selected,
      },
    )}
    role="button"
    tabIndex={0}
    onClick={() => handleChangeShipSelected(ship.id)}
    onKeyPress={() => handleChangeShipSelected(ship.id)}
  >
    <div
      className="ship__rotate"
      role="button"
      tabIndex={0}
      onClick={() => handleToggleShipDirection(ship.id)}
      onKeyPress={() => handleToggleShipDirection(ship.id)}
    >
      <img
        src={rotateIcon}
        alt="Rotate"
      />
    </div>
    <span>{`${ship.type}: ${ship.spacesLeft} spaces`}</span>
  </div>
);

SelectableShip.propTypes = {
  ship: shipPropTypes.isRequired,
  handleToggleShipDirection: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  handleChangeShipSelected: PropTypes.func.isRequired,
};

SelectableShip.defaultProps = {
  selected: false,
};

export default SelectableShip;
