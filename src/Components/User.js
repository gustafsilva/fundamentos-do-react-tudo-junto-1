import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const { username, numberOfGamesPlayed, hideNumberGame } = props;
  
  const numbersOfGames = hideNumberGame
    ? <p>Numbers of game plays: *</p>
    : <p>Numbers of game plays: {numberOfGamesPlayed}</p>;

  return(
    <li className='user'>
      username: {username}
      {numbersOfGames}
    </li>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  numberOfGamesPlayed: PropTypes.number.isRequired,
  hideNumberGame: PropTypes.bool.isRequired
};

export default User;
