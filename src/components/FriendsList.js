import React from "react";
import PropTypes from "prop-types";
import FriendLineItem from "./FriendLineItem.js";

class FriendsList extends React.Component {
  render() {
    const friendsList = this.props.friends.map(friend => {
      return (<FriendLineItem friend={friend} handleCreateHang={this.props.handleCreateHang}  />);
    });
    return (
      <div className="friendsList">
        {friendsList}
      </div>
    );
  }
}

export default FriendsList;
