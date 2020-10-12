import React from 'react';
import PropTypes from 'prop-types';

import { gameResultPropTypes } from 'utils/propTypesConstants';
import Layout from 'components/Layout';
import Button from '@material-ui/core/Button';

const EndGameScreen = ({
  result,
  turn,
  handleRestartGame,
  compact,
}) => (
  <Layout
    className="start-screen"
    compact={compact}
  >
    <p>{result}</p>
    <p>{turn}</p>
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={handleRestartGame}
    >
      Start game
    </Button>
  </Layout>
);

EndGameScreen.propTypes = {
  result: gameResultPropTypes.isRequired,
  turn: PropTypes.number.isRequired,
  handleRestartGame: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

EndGameScreen.defaultProps = {
  compact: false,
};

export default EndGameScreen;
