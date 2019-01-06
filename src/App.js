import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./components/Header.js";
import FriendsList from "./components/FriendsList.js";
import PastHangsList from "./components/PastHangsList.js";
import UpcomingHangsList from "./components/UpcomingHangsList.js";
import NewFriendForm from "./components/NewFriendForm.js"
import {services} from "./services"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {friends:[],hangs:[]}
  }

// could be refactored to be 1 request
  componentDidMount(){
    services.friends.getFriends().then(response=>{
      this.setState({friends:response['data']})
    })
    services.hangs.getHangs().then(response=>{
      this.setState({hangs:response})
    })
  }

  handleCreateFriend = friend => {
    services.friends.createNewFriend(friend).then(response=>{
      let friendsResponse=response
      this.setState({friends:friendsResponse})
    })
  }

  handleCreateHang = hang => {
    services.hangs.createNewHang(hang).then(response=>{
      let hangsResponse=response
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
                <NewFriendForm handleCreateFriend={this.handleCreateFriend}/>
              </div>
            }
          />
          <Route
            path="/hangs"
            render={(props)=>
              <div>
                <PastHangsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
                <UpcomingHangsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
              </div>
            }
          />
        </div>
      </Router>
    );
  }
}
// current
// -develop "upcoming hangs" view
// --calendar view?
// --timeline view?
// ------------------------
// to do
// -trello board
// -add auth (twitter/facebook/gmail oauth2)
// -split hangs btwn past/future
// -make hang form more obvious
// -work in auth
// -host on heroku
// -host on digital ocean
// -generate calendar event
// -send email reminder to reach out (sendgrid)
// -send text reminder to reach out (twillio)
// -events in your area
// -log an unscheduled,occured hang
// -reconsider how data is being displayed on friend/hangs page
// working with response
//
// done
// ------------------------
// -desiredFrequency in NewFriendForm saving as string not integer X
// -make sure dates are right X
// -implemented router X
// --only show most recent on friends view X
export default App;
