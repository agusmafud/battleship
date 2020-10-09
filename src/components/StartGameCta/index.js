import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const StartGameCta = ({
  handleStartGame,
  startGameEnabled,
}) => (
  <Button
    variant="contained"
    size="large"
    color="primary"
    disabled={!startGameEnabled}
    onClick={() => handleStartGame()}
  >
    Start game
  </Button>
);

StartGameCta.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
  startGameEnabled: PropTypes.bool.isRequired,
};

export default StartGameCta;
