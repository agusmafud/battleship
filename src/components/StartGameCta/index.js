import React from 'react';
import PropTypes from 'prop-types';

const StartGameCta = ({
  handleStartGame,
  startGameEnabled,
}) => (
  <div>
    StartGameCta
  </div>
);

StartGameCta.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
  startGameEnabled: PropTypes.bool.isRequired,
};

export default StartGameCta;
