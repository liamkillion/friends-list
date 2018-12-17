import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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
      <Router>
        <div className="app container">
          <Header userName={this.state.userName} />
          <Route
            path="/"
            render={ (props) =>
              <div>
                <FriendsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
                <NewFriendContainer handleCreateFriend={this.handleCreateFriend}/>
              </div>

            }
          />
        </div>
      </Router>
    );
  }
}
// current
// -log an unscheduled,occured hang
// ------------------------
// to do
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
//
// done
// ------------------------
// -desiredFrequency in NewFriendForm saving as string not integerX
// -make sure dates are right X
export default App;
