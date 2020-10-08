import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveScreen } from 'store/selectors';
import {
  START_SCREEN,
} from 'utils/constants';
import StartScreenContainer from 'containers/StartScreenContainer';

const App = () => {
  const activeScreen = useSelector((state) => getActiveScreen(state));
  return (
    <>
      { activeScreen === START_SCREEN && <StartScreenContainer /> }
    </>
  );
};

export default App;
