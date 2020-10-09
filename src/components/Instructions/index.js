import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Instructions = ({
  shipsPlaced,
}) => (
  <div className="instructions">
    <div className="instructions__title">
      Welcome to the battleship game!
    </div>
    <ul className="instructions__list">
      {!shipsPlaced ? (
        <>
          <li className="instructions__list-item">
            Click on a ship to select it and then on the board for placing it.
          </li>
          <li className="instructions__list-item">
            Click on a ship&apos;s rotation icon to change it&apos;s orientation.
          </li>
          <li className="instructions__list-item">
            To remove a ship, click on it&apos;s location on the board
          </li>
        </>
      ) : (
        <li className="instructions__list-item">
          Enter your name and press &quot;start&quot; to begin
        </li>
      )}
    </ul>
  </div>
);

Instructions.propTypes = {
  shipsPlaced: PropTypes.bool.isRequired,
};

export default Instructions;
