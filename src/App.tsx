import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import PastHangsList from "./components/PastHangsList";
import FutureHangsList from "./components/FutureHangsList";
import NewFriendForm from "./components/NewFriendForm"
import {services} from "./services"
import "./App.css";
import { Friend, handleCreateFunction } from "./interfaces"

interface Props = {}

export class App extends React.Component <Props>{
  constructor(props:Props) {
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

  // handleCreateFriend = friend => {
  //   services.friends.createNewFriend(friend).then(response=>{
  //     let friendsResponse=response
  //     this.setState({friends:friendsResponse})
  //   })
  // }

  let handleCreateFriend:handleCreateFunction;
  handleCreateFriend = function(hang:object): object {
    services.friends.createNewFriend(friend:Friend).then(response=>{
      let friendsResponse=response
      this.setState({friends:friendsResponse})
    })
  }

  // handleCreateHang = hang => {
  //   services.hangs.createNewHang(hang).then(response=>{
  //     let hangsResponse=response
  //     this.setState({hangs:hangsResponse})
  //   })
  // }

  let handleCreateHang:handleCreateFunction;
  handleCreateHang = function(hang:object): void {
    services.hangs.createNewHang(hang).then(response=>{
      let hangsResponse=response
      this.setState({hangs:hangsResponse})
    })
  }

  render = () => {
    return (
      <Router>
        <div className="app container">
          <Header
          // userName={this.state.userName}
          />
          <Route
            path="/"
            render={ () =>
              <div>
                <FriendsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
                <NewFriendForm handleCreateFriend={this.handleCreateFriend}/>
              </div>
            }
          />
          <Route
            path="/hangs"
            render={ ()=>
              <div>
                <PastHangsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
                <FutureHangsList friends={this.state.friends} hangs={this.state.hangs} handleCreateHang={this.handleCreateHang}/>
              </div>
            }
          />
        </div>
      </Router>
    );
  }
}
