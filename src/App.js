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
    // this.setState( {
    //                 friends: [friend,...this.state.friends]
    //             }
    //           )
    services.friends.createNewFriend(friend).then(response=>{
      debugger
      let friendsResponse=response['data']
      this.setState({friends:friendsResponse})
    })
  }

  handleCreateHang = hang => {
    // let ff=[...this.state.friends]
    // ff.forEach(f=>{
    //   if (f.id===friend.id){
    //     f['hangHistory'].push({'date':hangDetails.date,'activity':hangDetails.activity})
    //   }
    // })
    // this.setState({friends:ff})
    // this.setState( {
    //                 hangs: [hang,...this.state.hangs]
    //             }
    //           )
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

export default App;
