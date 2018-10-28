import React, { Component } from "react";
import Header from "./components/Header.js";
import FriendsList from "./components/FriendsList.js";
import NewFriendContainer from "./containers/NewFriendContainer.js"
import {services} from "./services"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {friends:[]}
  }

  componentDidMount(){
    services.friends.getFriends().then(friendsResponse=>{
      this.setState({friends:friendsResponse})
    })
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
