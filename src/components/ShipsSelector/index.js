import React from 'react';
import PropTypes from 'prop-types';

import { shipPropTypes } from 'utils/propTypesConstants';

import SelectableShip from './SelectableShip';
import './styles.scss';

const ShipsSelector = ({
  shipsUnplaced,
  handleToggleShipDirection,
  shipSelectedId,
  handleChangeShipSelected,
}) => (
  <div className="ships-selector">
    {shipsUnplaced.sort((a, b) => b.spacesLeft - a.spacesLeft).map((ship) => (
      <SelectableShip
        key={ship.id}
        ship={ship}
        handleToggleShipDirection={handleToggleShipDirection}
        selected={!(shipSelectedId === undefined) && ship.id === shipSelectedId}
        handleChangeShipSelected={handleChangeShipSelected}
      />
    ))}
  </div>
);

ShipsSelector.propTypes = {
  shipsUnplaced: PropTypes.arrayOf(shipPropTypes).isRequired,
  handleToggleShipDirection: PropTypes.func.isRequired,
  shipSelectedId: PropTypes.number,
  handleChangeShipSelected: PropTypes.func.isRequired,
};

ShipsSelector.defaultProps = {
  shipSelectedId: undefined,
};

export default ShipsSelector;
