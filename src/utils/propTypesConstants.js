import PropTypes from 'prop-types';
import {
  EMPTY_SPACE,
  OK_SHIP_SPACE,
  HIT_SHIP_SPACE,
  DESTROYED_SHIP_SPACE,
  SHOT_MISSED_SPACE,
  UNKNOWN_SPACE,
  CARRIER,
  CRUISER,
  SUBMARINE,
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
  SHIP_OK,
  SHIP_HIT,
  SHIP_DESTROYED,
  START_SCREEN,
  GAME_SCREEN,
  END_GAME_SCREEN,
  PLAYER,
  COMPUTER,
  COMPUTER_HUNT_MODE,
  COMPUTER_TARGET_MODE,
} from 'utils/constants';

export const spaceStatusPropTypes = PropTypes.oneOf([
  EMPTY_SPACE,
  OK_SHIP_SPACE,
  HIT_SHIP_SPACE,
  DESTROYED_SHIP_SPACE,
  SHOT_MISSED_SPACE,
  UNKNOWN_SPACE,
]);

export const boardSpacePropTypes = PropTypes.shape({
  i: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
  status: spaceStatusPropTypes.isRequired,
});
export const boardPropTypes = PropTypes.arrayOf(PropTypes.arrayOf(boardSpacePropTypes));

export const shipTypesPropTypes = PropTypes.oneOf(
  [CARRIER, CRUISER, SUBMARINE],
);
export const shipDirectiondsPropTypes = PropTypes.oneOf(
  [SHIP_HORIZONTAL, SHIP_VERTICAL],
);

export const shipStatusPropTypes = PropTypes.oneOf(
  [SHIP_OK, SHIP_HIT, SHIP_DESTROYED],
);

export const coordinatePropTypes = PropTypes.shape({
  i: PropTypes.number,
  j: PropTypes.number,
});

export const shipPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  type: shipTypesPropTypes.isRequired,
  direction: shipDirectiondsPropTypes.isRequired,
  spacesLeft: PropTypes.number.isRequired,
  spacesAssigned: PropTypes.arrayOf(coordinatePropTypes).isRequired,
  status: shipStatusPropTypes.isRequired,
});

export const activeScreenPropTypes = PropTypes.oneOf(
  [START_SCREEN, GAME_SCREEN, END_GAME_SCREEN],
);
export const attemptFeedbackStatusPropTypes = PropTypes.oneOf(
  [HIT_SHIP_SPACE, DESTROYED_SHIP_SPACE, SHOT_MISSED_SPACE],
);
export const attemptFeedbackPropTypes = PropTypes.shape({
  status: attemptFeedbackStatusPropTypes.isRequired,
  coordinate: coordinatePropTypes.isRequired,
  sunkenShip: shipTypesPropTypes,
});
export const playersPropTypes = PropTypes.oneOf(
  [PLAYER, COMPUTER],
);
export const gamePropTypes = PropTypes.shape({
  activeScreen: activeScreenPropTypes.isRequired,
  playerAttemptFeedback: attemptFeedbackPropTypes.isRequired,
  computerAttemptFeedback: attemptFeedbackPropTypes.isRequired,
  turn: PropTypes.number.isRequired,
  activePlayer: playersPropTypes.isRequired,
});

export const playerPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  board: boardPropTypes.isRequired,
  ships: PropTypes.arrayOf(shipPropTypes).isRequired,
}).isRequired;

export const attackModePropTypes = PropTypes.oneOf(
  [COMPUTER_HUNT_MODE, COMPUTER_TARGET_MODE],
);
export const computerPropTypes = PropTypes.shape({
  attackMode: attackModePropTypes.isRequired,
  board: boardPropTypes.isRequired,
  ships: PropTypes.arrayOf(shipPropTypes).isRequired,
}).isRequired;
