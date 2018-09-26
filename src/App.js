import React, { Component } from "react";
import Header from "./components/Header.js";
import FriendsList from "./components/FriendsList.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "Liam",
        friends: [
          {
            name: "Rebs",
            lastDateSeen: "9/23/2018",
            desiredFrequency: 14,
            notes: "Likes concerts"
          },
          {
            name: "Dana",
            lastDateSeen: "9/12/2018",
            desiredFrequency: 21,
            notes: "Likes going out to eat"
          },
          {
            name: "Todd",
            lastDateSeen: "9/15/2018",
            desiredFrequency: 7,
            notes: "Likes riding bikes"
          },
          {
            name: "Liz",
            lastDateSeen: "8/21/2018",
            desiredFrequency: 11,
            notes: "Likes going to bars"
          },
          {
            name: "Sebastian",
            lastDateSeen: "8/28/2018",
            desiredFrequency: 11,
            notes: "Likes playing videogames"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Header userName={this.state.user.userName} />
        <FriendsList userFriends={this.state.user.friends} />
      </div>
    );
  }
}

export default App;
