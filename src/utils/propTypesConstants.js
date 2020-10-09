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
  image: PropTypes.string.isRequired,
  direction: shipDirectiondsPropTypes.isRequired,
  spaces: PropTypes.number.isRequired,
  spacesAssigned: PropTypes.arrayOf(coordinatePropTypes).isRequired,
  status: shipStatusPropTypes.isRequired,
});
