import React from 'react';
import PropTypes from 'prop-types';

import { shipPropTypes } from 'utils/propTypesConstants';

const ShipsSelector = ({
  shipsUnplaced,
  handleToggleShipDirection,
  shipSelectedId,
  handleChangeShipSelected,
}) => (
  <div className="ships-selector">
    ShipsSelector
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
