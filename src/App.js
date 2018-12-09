import React, { Component } from "react";
import Header from "./components/Header.js";
import FriendsList from "./components/FriendsList.js";
import NewFriendContainer from "./containers/NewFriendContainer.js"
import {services} from "./services"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {friends:[],hangs:[]}
  }

  componentDidMount(){
    services.friends.getFriends().then(response=>{
      let friendsResponse=response['data']
      let hangsResponse=response['included']
      this.setState({friends:friendsResponse,hangs:hangsResponse})
    })
  }


  handleCreateFriend = friend => {
    services.friends.createNewFriend(friend).then(response=>{
      let friendsResponse=response['data']
      this.setState({friends:friendsResponse})
    })
  }

  handleCreateHang = hang => {
    services.hangs.createNewHang(hang).then(response=>{
      let hangsResponse=response['data']
      this.setState({hangs:hangsResponse})
    })
  }

  render() {
    return (
      <div className="app container">
        <Header userName={this.state.userName} />
        <FriendsList handleCreateHang={this.handleCreateHang} friends={this.state.friends} hangs={this.state.hangs}/>
        <NewFriendContainer handleCreateFriend={this.handleCreateFriend}/>
      </div>
    );
  }
}
// current
// -desiredFrequency in NewFriendForm saving as string not integer
// ------------------------
// to do
// -make sure dates are right
// add form to schedule hang, and log an occured hang (scheduled AND unscheduld)
// -split hangs btwn past/future
// -make hang form more obvious
// -work in auth
// -develop "upcoming hangs" view
// -host on heroku
// -host on digital ocean
// -generate calendar event
// -send email reminder to reach out
// -send text reminder to reach out
// -events in your area


export default App;
