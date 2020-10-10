import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector } from 'react-redux';
import { getActiveScreen } from 'store/selectors';
import {
  START_SCREEN,
  GAME_SCREEN,
} from 'utils/constants';
import StartScreenContainer from 'containers/StartScreenContainer';
import GameScreenContainer from 'containers/GameScreenContainer';

const BattleshipApp = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2e93cf',
      },
    },
  });
  const activeScreen = useSelector((state) => getActiveScreen(state));
  const compact = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { activeScreen === START_SCREEN && <StartScreenContainer compact={compact} /> }
      { activeScreen === GAME_SCREEN && <GameScreenContainer compact={compact} /> }
    </ThemeProvider>
  );
};

export default BattleshipApp;
