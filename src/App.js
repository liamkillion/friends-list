import React, { Component } from "react";
import Header from "./components/Header.js";
import FriendsList from "./containers/FriendsListContainer.js";
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
            lastDateSeen: new Date(9/23/2018),
            desiredFrequency: 14,
            notes: "Likes concerts",
            hangHistory:[{"date": new Date(1/1/2018),"activity":"Went to the zoo"}]
          },
          {
            name: "Dana",
            lastDateSeen: new Date(9/23/2018),
            desiredFrequency: 21,
            notes: "Likes going out to eat",
            hangHistory:[{"date": new Date(1/1/2018),"activity":"Went to the zoo"}]
          },
          {
            name: "Todd",
            lastDateSeen: new Date(9/23/2018),
            desiredFrequency: 7,
            notes: "Likes riding bikes",
            hangHistory:[{"date": new Date(1/1/2018),"activity":"Went to the zoo"}]
          },
          {
            name: "Liz",
            lastDateSeen: new Date(9/23/2018),
            desiredFrequency: 11,
            notes: "Likes going to bars",
            hangHistory:[{"date": new Date(1/1/2018),"activity":"Went to the zoo"}]
          },
          {
            name: "Sebastian",
            lastDateSeen: new Date(9/23/2018),
            desiredFrequency: 11,
            notes: "Likes playing videogames",
            hangHistory:[{"date": new Date(1/1/2018),"activity":"Went to the zoo"}]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Header userName={this.state.user.userName} />
        <FriendsListContainer friends={this.state.user.friends}/>
      </div>
    );
  }
}

export default App;
