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
    let friendsList = [];
    friendsList = this.props.friends.map(friend => {
      console.log("inside friendsList function-friends");
      console.log(this.props.friends);
      console.log("inside friendsList function-hangs");
      console.log(this.props.hangs);
      const friendHangs = this.props.hangs.filter(
        hang => hang.attributes.friend_id === friend.id
      );
      return (
        <FriendLineItem
          friendHangs={friendHangs}
          friend={friend}
          handleCreateHang={this.props.handleCreateHang}
        />
      );
    });

    return (
      <div className="friendsList">
        <ul>{friendsList}</ul>
      </div>
    );
  }
}
