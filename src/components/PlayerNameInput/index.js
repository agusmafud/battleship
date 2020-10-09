import React from 'react';
import PropTypes from 'prop-types';

const PlayerNameInput = ({
  playerName,
  handleChangePlayerName,
}) => (
  <div>
    PlayerNameInput
  </div>
);

PlayerNameInput.propTypes = {
  playerName: PropTypes.string.isRequired,
  handleChangePlayerName: PropTypes.func.isRequired,
};

export default PlayerNameInput;
