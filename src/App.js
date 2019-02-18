import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./components/Header.js";
import FriendsList from "./components/FriendsList.js";
import PastHangsList from "./components/PastHangsList.js";
import FutureHangsList from "./components/FutureHangsList.js";
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

  togglePastHangsVisibility = () => {
    let elementDisplay = document.getElementById('PastHangsListHolder').getAttribute('style')
    debugger
    if (elementDisplay === "display: block" || null){
      document.getElementById('PastHangsListHolder').setAttribute("style","display: none")
      document.getElementById('PastHangsButton').innerHTML="Show Past Hangs"
    } else {
      document.getElementById('PastHangsListHolder').setAttribute("style","display: block")
      document.getElementById('PastHangsButton').innerHTML="Hide Past Hangs"
    }
  }

  toggleFutureHangsVisibility = () => {
    let elementDisplay = document.getElementById('FutureHangsListHolder').getAttribute('style')
    debugger
    if (elementDisplay === "display: block" || null){
      document.getElementById('FutureHangsListHolder').setAttribute("style","display: none")
      document.getElementById('FutureHangsButton').innerHTML="Show Future Hangs"
    } else {
      document.getElementById('FutureHangsListHolder').setAttribute("style","display: block")
      document.getElementById('FutureHangsButton').innerHTML="Hide Future Hangs"
    }
  }

  render() {
    return (
      <Router>
        <div className="app container">
          <Header userName={this.state.userName} />
          <Route
            exact path="/"
            render={ (props) =>
              <div>
                <FriendsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
                <NewFriendForm handleCreateFriend={this.handleCreateFriend}/>
              </div>
            }
          />
          <Route
            strict path="/hangs"
            render={ (props) =>
              <div>
                <button id="PastHangsButton" onClick={this.togglePastHangsVisibility}>Hide Past Hangs</button>
                <button id="FutureHangsButton" onClick={this.toggleFutureHangsVisibility}>Hide Future Hangs</button>
                <div id="PastHangsListHolder">
                  <PastHangsList friends={this.state.friends} hangs={this.state.hangs} />
                </div>
                <div id="FutureHangsListHolder">
                  <FutureHangsList friends={this.state.friends} hangs={this.state.hangs} />
                </div>
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
// flow vs. typescript???(typescript)
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
