import {
  START_GAME,
  SURRENDER,
  END_GAME,
  PLAYER_MISSILE_LAUNCH,
  COMPUTER_MISSILE_LAUNCH,
} from 'store/actionTypes';

import {
  START_SCREEN,
  GAME_SCREEN,
  END_GAME_SCREEN,
  PLAYER,
  COMPUTER,
  PLAYER_SURRENDERED,
} from 'utils/constants';

const initialState = {
  activeScreen: START_SCREEN,
  playerAttemptFeedback: undefined,
  computerAttemptFeedback: undefined,
  turn: 1,
  activePlayer: PLAYER,
  gameResult: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        activeScreen: GAME_SCREEN,
        playerAttemptFeedback: undefined,
        computerAttemptFeedback: undefined,
        turn: 1,
        activePlayer: PLAYER,
        gameResult: undefined,
      };
    }
    case SURRENDER: {
      return {
        ...state,
        activeScreen: END_GAME_SCREEN,
        gameResult: PLAYER_SURRENDERED,
      };
    }
    case END_GAME: {
      const { gameResult } = action.payload;
      return {
        ...state,
        activeScreen: END_GAME_SCREEN,
        gameResult,
      };
    }
    case PLAYER_MISSILE_LAUNCH: {
      const { playerAttemptFeedback } = action.payload;
      const { turn } = state;
      return {
        ...state,
        playerAttemptFeedback,
        turn: turn + 1,
        activePlayer: COMPUTER,
      };
    }
    case COMPUTER_MISSILE_LAUNCH: {
      const { computerAttemptFeedback } = action.payload;
      const { turn } = state;
      return {
        ...state,
        computerAttemptFeedback,
        turn: turn + 1,
        activePlayer: PLAYER,
      };
    }

    default: return state;
  }
}
