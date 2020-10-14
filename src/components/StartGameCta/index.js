import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './styles.scss';

const StartGameCta = ({
  handleStartGame,
  startGameEnabled,
  text,
}) => (
  <div className="start-game-cta">
    <Button
      className="start-game-cta__button"
      variant="contained"
      fullWidth
      size="large"
      color="primary"
      disabled={!startGameEnabled}
      onClick={() => handleStartGame()}
    >
      {text}
    </Button>
  </div>
);

StartGameCta.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
  startGameEnabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default StartGameCta;
