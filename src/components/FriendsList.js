import React from "react";
import PropTypes from "prop-types";
import FriendLineItem from "./FriendLineItem.js";

class FriendsList extends React.Component {
  render() {
    const friendsList = this.props.userFriends.map(friend => {
      <li>
        <FriendLineItem friend={friend} />
      </li>;
    });
    return <ul className="friendsList">{friendsList}</ul>;
  }
}

export default FriendsList;
