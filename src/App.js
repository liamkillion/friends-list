import React, { Component } from "react";
import Header from "./components/Header.js";
import FriendsList from "./components/FriendsList.js";
import NewFriendContainer from "./containers/NewFriendContainer.js"
import {services} from "./services"
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       userName: "Liam",
  //       friends: [
  //         {
  //           id:1,
  //           name: "Rebs",
  //           lastDateSeen: "9/23/2018",
  //           desiredFrequency: 14,
  //           notes: "likes concerts",
  //           hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo","didHang": true}]
  //         },
  //         {
  //           id:2,
  //           name: "Dana",
  //           lastDateSeen: "9/23/2018",
  //           desiredFrequency: 21,
  //           notes: "likes going out to eat",
  //           hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo","didHang": true}]
  //         },
  //         {
  //           id:3,
  //           name: "Todd",
  //           lastDateSeen: "9/23/2018",
  //           desiredFrequency: 7,
  //           notes: "likes riding bikes",
  //           hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo","didHang": true}]
  //         },
  //         {
  //           id:4,
  //           name: "Liz",
  //           lastDateSeen: "9/23/2018",
  //           desiredFrequency: 11,
  //           notes: "likes going to bars",
  //           hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo","didHang": true}]
  //         },
  //         {
  //           id:5,
  //           name: "Sebastian",
  //           lastDateSeen: "9/23/2018",
  //           desiredFrequency: 11,
  //           notes: "likes playing videogames",
  //           hangHistory:[{"date": "9/23/2018","activity":"Went to the zoo","didHang": true}]
  //         }
  //       ]
  //   };
  // }
  state={friends:[]}
  componentDidMount(){
    if (true){
      services.friends.getFriends().then(response=>{
      this.setState({friends:response})
    })
    }
  }


  handleCreateFriend = friend => {
    this.setState( {
                    friends: [friend,...this.state.friends]
                }
              )
  }

  handleCreateHang = (friend, hangDetails) => {
    let ff=[...this.state.friends]
    ff.forEach(f=>{
      if (f.id===friend.id){
        f['hangHistory'].push({'date':hangDetails.date,'activity':hangDetails.activity})
      }
    })
    this.setState({friends:ff})
  }

  render() {
    return (
      <div className="app container">
        <Header userName={this.state.userName} />
        <FriendsList handleCreateHang={this.handleCreateHang} friends={this.state.friends} />
        <NewFriendContainer handleCreateFriend={this.handleCreateFriend}/>
      </div>
    );
  }
}

export default App;
