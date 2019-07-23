import * as React from "react";
import FriendLineItem from "./FriendLineItem";
import { Hang, Friend, handleCreateFunction } from "../interfaces";

interface IProps {
  friends: Friend[];
  hangs: Hang[];
  handleCreateHang: handleCreateFunction;
}

export default class FriendsList extends React.Component<IProps> {
  render() {
    console.log(this.props.hangs);
    console.log(this.props.friends);
    const friendsList = this.props.friends.map(friend => {
      let friendHangs = this.props.hangs.filter(
        hang => hang.friend_id === friend.id
      );
      return (
        <FriendLineItem
          friendHangs={friendHangs}
          friend={friend}
          handleCreateHang={this.props.handleCreateHang}
        />
      );
    });

    console.log(this.props.friends);
    return (
      <div className="friendsList">
        <ul>{friendsList}</ul>
      </div>
    );
  }
}
