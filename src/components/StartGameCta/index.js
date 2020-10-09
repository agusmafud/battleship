import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const StartGameCta = ({
  handleStartGame,
  startGameEnabled,
}) => (
  <button
    className={cn(
      'start-game-cta',
      { 'start-game-cta--enabled': startGameEnabled },
    )}
    disabled={!startGameEnabled}
    onClick={() => handleStartGame()}
  >
    Start
  </button>
);

StartGameCta.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
  startGameEnabled: PropTypes.bool.isRequired,
};

export default StartGameCta;
