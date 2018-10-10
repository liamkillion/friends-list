import React, { Component } from "react";
import Header from "./components/Header.js";
import FriendsListContainer from "./containers/FriendsListContainer.js";
import NewFriendContainer from "./containers/NewFriendContainer.js"
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
            notes: "likes concerts",
            hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo"}]
          },
          {
            name: "Dana",
            lastDateSeen: "9/23/2018",
            desiredFrequency: 21,
            notes: "likes going out to eat",
            hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo"}]
          },
          {
            name: "Todd",
            lastDateSeen: "9/23/2018",
            desiredFrequency: 7,
            notes: "likes riding bikes",
            hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo"}]
          },
          {
            name: "Liz",
            lastDateSeen: "9/23/2018",
            desiredFrequency: 11,
            notes: "likes going to bars",
            hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo"}]
          },
          {
            name: "Sebastian",
            lastDateSeen: "9/23/2018",
            desiredFrequency: 11,
            notes: "likes playing videogames",
            hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo"}]
          }
        ]
      }
    };
  }

  handleCreateFriend = friend => {
    let currentFriends=this.state.user.friends
    this.setState( { user: {
                    friends: [...currentFriends,friend]
                  }
                }
              )
    console.log(this.state.user.friends)
  }

  render() {
    return (
      <div className="app container">
        <Header userName={this.state.user.userName} />
        <FriendsListContainer friends={this.state.user.friends} />
        <NewFriendContainer handleCreateFriend={this.handleCreateFriend}/>
      </div>
    );
  }
}

export default App;
