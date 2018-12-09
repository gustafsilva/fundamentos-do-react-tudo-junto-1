import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ListUsers from './Components/ListUsers';
import NewUser from './Components/NewUser';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/
class App extends Component {
  state = {
    users: []
  }


  addUser = (user) => {
    let add = false;
    const { users } = this.state;

    const checkUsername = users.filter((u) => u.username === user.username);

    if(checkUsername.length <= 0 ) {
      /* Caso não tenha nenhum usuário já cadastrado com o mesmo username */
      users.push(user);

      this.setState({
        users
      });

      add = true
    }

    return add;
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <NewUser addUser={this.addUser} />
        <ListUsers users={users} />

      </div>
    );
  }
}

export default App;
