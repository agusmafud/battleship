import {
  CARRIER,
  CRUISER,
  SUBMARINE,
  SHIP_OK,
  SHIP_HORIZONTAL,
} from 'utils/constants';

export const submarineInitialSetting = {
  type: SUBMARINE,
  direction: SHIP_HORIZONTAL,
  spacesLeft: 2,
  spacesAssigned: [],
  status: SHIP_OK,
};
export const cruiserInitialSetting = {
  type: CRUISER,
  direction: SHIP_HORIZONTAL,
  spacesLeft: 3,
  spacesAssigned: [],
  status: SHIP_OK,
};
export const carrierInitialSetting = {
  type: CARRIER,
  direction: SHIP_HORIZONTAL,
  spacesLeft: 4,
  spacesAssigned: [],
  status: SHIP_OK,
};
