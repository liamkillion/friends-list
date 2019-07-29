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
    const friendsList = this.props.friends.map(friend => {
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
