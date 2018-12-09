import React, { Component } from 'react';
import PropTypes from 'prop-types';

import User from './User';

class ListUsers extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  state = {
    hideNumberGames: false
  }

  updateHideNumberGames = () => {
    this.setState((currentState) => ({
      hideNumberGames: !currentState.hideNumberGames
    }));
  }
  
  render() {
    const { users } = this.props;
    const { hideNumberGames } = this.state;

    /* Cria butão para esconder/mostrar número de jogos jogados de acordo com a preferência do usuário (hideNumberGames) */
    const buttonHideNumbersGamePlays = hideNumberGames
      ? <button onClick={this.updateHideNumberGames}>Show Numbers Games Users</button>
      : <button onClick={this.updateHideNumberGames}>Hide Numbers Games Users</button>;

    const listUsers = users.map(user => (
      <User key={user.username} username={user.username} numberOfGamesPlayed={user.numberOfGamesPlayed} hideNumberGame={hideNumberGames} />
    ));

    return (
      <div className='list-users'>
        <h1>Users</h1>

        {buttonHideNumbersGamePlays}
        
        {listUsers}
      </div>
    );
  }
}

export default ListUsers;
