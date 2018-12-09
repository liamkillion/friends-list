import React from "react";
import PropTypes from "prop-types";
import FriendLineItem from "./FriendLineItem.js";

class FriendsList extends React.Component {
  render() {
    let hangs = this.props.hangs
    const friendsList = this.props.friends.map(friend => {
      debugger
      let friendHangs = hangs.filter(hang=>hang.attributes.friend_id===parseInt(friend.id))
      return (<FriendLineItem friendHangs={friendHangs} friend={friend} handleCreateHang={this.props.handleCreateHang}  />);
    });
    return (
      <div className="friendsList">
        {friendsList}
      </div>
    );
  }
}

export default FriendsList;
