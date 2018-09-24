import React, { Component } from 'react';
import Header  from "./components/Header.js"
import FriendsList  from "./components/FriendsList.js"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:this.props.user
    }
  }

  render() {
    return (
      <div className="app">
        <Header userName={this.state.user.userName}/>
        <FriendsList userFriends={this.state.user.name}/>
      </div>
    );
  }
}

export default App;
