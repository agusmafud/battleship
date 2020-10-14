import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  SHIP_HORIZONTAL,
  SHIP_VERTICAL,
} from 'utils/constants';
import {
  shipPropTypes,
} from 'utils/propTypesConstants';
import rotateIcon from 'assets/rotate.svg';
import { rotateShipMessage } from 'utils/messages';
import './styles.scss';

const SelectableShip = ({
  ship,
  handleToggleShipDirection,
  selected,
  handleChangeShipSelected,
}) => (
  <Card
    className={cn(
      'ship',
      {
        [`ship--${SHIP_HORIZONTAL}`]: ship.direction === SHIP_HORIZONTAL,
        [`ship--${SHIP_VERTICAL}`]: ship.direction === SHIP_VERTICAL,
        'ship--selected': selected,
      },
    )}
    role="button"
    tabIndex={0}
    onClick={() => handleChangeShipSelected(ship.id)}
    onKeyPress={() => handleChangeShipSelected(ship.id)}
  >
    <div
      className="ship__rotate"
      role="button"
      tabIndex={0}
      onClick={() => handleToggleShipDirection(ship.id)}
      onKeyPress={() => handleToggleShipDirection(ship.id)}
    >
      <img
        src={rotateIcon}
        alt={rotateShipMessage}
        title={rotateShipMessage}
      />
    </div>
    <CardActionArea>
      <CardMedia
        classes={{ img: 'ship__asset' }}
        component="img"
        alt={`${ship.type}: ${ship.spacesLeft} spaces`}
        height="50"
        image={ship.asset}
        title={`${ship.type}: ${ship.spacesLeft} spaces`}
      />
      <CardContent>
        <Typography
          className="ship__title"
          variant="h5"
        >
          {ship.type}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`${ship.spacesLeft} spaces`}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

SelectableShip.propTypes = {
  ship: shipPropTypes.isRequired,
  handleToggleShipDirection: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  handleChangeShipSelected: PropTypes.func.isRequired,
};

SelectableShip.defaultProps = {
  selected: false,
};

export default SelectableShip;
