import {
  START_GAME,
} from 'store/actionTypes';

const initialState = [{
  board: undefined,
  ships: undefined,
}];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_GAME: {
      const { computer } = action.payload;
      return {
        ...state,
        ...computer,
      };
    }
    default: return state;
  }
}
