import {
  CARRIER,
  CRUISER,
  SUBMARINE,
  SHIP_OK,
  SHIP_HORIZONTAL,
} from 'utils/constants';

const submarineInitialSetting = {
  type: SUBMARINE,
  direction: SHIP_HORIZONTAL,
  spaces: 2,
  spacesAssigned: [],
  status: SHIP_OK,
};
const cruiserInitialSetting = {
  type: CRUISER,
  direction: SHIP_HORIZONTAL,
  spaces: 3,
  spacesAssigned: [],
  status: SHIP_OK,
};
const carrierInitialSetting = {
  type: CARRIER,
  direction: SHIP_HORIZONTAL,
  spaces: 4,
  spacesAssigned: [],
  status: SHIP_OK,
};

export const shipsInitialSetting = [
  { id: 0, ...submarineInitialSetting },
  { id: 1, ...cruiserInitialSetting },
  { id: 2, ...cruiserInitialSetting },
  { id: 3, ...cruiserInitialSetting },
  { id: 4, ...carrierInitialSetting },
];
