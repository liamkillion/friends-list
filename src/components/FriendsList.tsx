// import React from "react";
import * as React from "react"
import FriendLineItem from "./FriendLineItem.js";

interface Hang { date: string; activity: string; didHang: boolean; friend_id: integer }
interface Friend { name: string; frequency: integer; id: integer; hangs: Hang[] };
interface Props {friends: Friend[], hangs: Hang[], handleCreateHang:function}

// class FriendsList extends React.Component {
export class FriendsList extends React.Component<Props,{}> {
  render() {
    const friendsList = this.props.friends.map(friend => {
      let friendHangs = this.props.hangs.filter(hang => hang.friend_id === parseInt(friend.id))
      return (<FriendLineItem friendHangs={friendHangs} friend={friend} handleCreateHang={this.props.handleCreateHang}  />);
    });
    return (
      <div className="friendsList">
        {friendsList}
      </div>
    );
  }
}

// export default FriendsList;