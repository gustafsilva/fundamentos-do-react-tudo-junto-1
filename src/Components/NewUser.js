import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewUser extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired
  }

  initState = {
    name: '',
    lastName: '',
    username: '',
    usernameExist: false
  }

  constructor(props) {
    super(props);

    this.state = this.initState;
  }

  update = (newState) => {
    this.setState({
      ...newState
    });
  }

  createUser = () => {
    const { name, lastName, username } = this.state;
    const { addUser } = this.props;

    const user = {
      name,
      lastName,
      username,
      numberOfGamesPlayed: 0
    };

    if (addUser(user)) {
      /* Caso consiga adicionar o novo usuário criado */
      this.resetInputs();
    } else {
      /* Caso o usuário criado tenha o mesmo username de um usuário já cadastrado */
      this.setState({
        usernameExist: true
      })
    }
  }

  resetInputs = () => {
    this.setState(this.initState);
  }

  render() {
    const { name, lastName, username, usernameExist } = this.state;

    /* Cria mensagem de erro se username do Usuário passado já existir */
    const error = usernameExist
      ? <p className='error'>Username has exists.</p>
      : <p></p>

    return (
      <div className='new-user'>
        <h1>New User</h1>

        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(event) => this.update({ name: event.target.value })}
        />
        <input
          type='text'
          placeholder='Lastname'
          value={lastName}
          onChange={(event) => this.update({ lastName: event.target.value })}
        />
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(event) => this.update({ username: event.target.value })}
        />

        {error}

        <button
          onClick={this.createUser}
          disabled={name === '' || lastName === '' || username === ''}
        >
          ADD
        </button>
      </div>
    );
  }
}


export default NewUser;
