import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({
  playerNameEntered,
  shipsPlaced,
  startGameEnabled,
}) => (
  <div className="instructions">
    Instructions
  </div>
);

Instructions.propTypes = {
  playerNameEntered: PropTypes.bool.isRequired,
  shipsPlaced: PropTypes.bool.isRequired,
  startGameEnabled: PropTypes.bool.isRequired,
};

export default Instructions;
