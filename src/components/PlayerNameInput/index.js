import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const PlayerNameInput = ({
  playerName,
  handleChangePlayerName,
}) => (
  <input
    className="player-name-input"
    value={playerName}
    type="text"
    onChange={(e) => handleChangePlayerName(e.target.value)}
  />
);

PlayerNameInput.propTypes = {
  playerName: PropTypes.string.isRequired,
  handleChangePlayerName: PropTypes.func.isRequired,
};

export default PlayerNameInput;
