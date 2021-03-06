import React from "react";
import FriendLineItem from "./FriendLineItem.js";

class FriendsList extends React.Component {
  render() {
    const friendsList = this.props.friends.map(friend => {
      let friendHangs = this.props.hangs.filter(hang=>hang.friend_id===parseInt(friend.id))
      return (<FriendLineItem key={friend.id} friendHangs={friendHangs} friend={friend} handleCreateHang={this.props.handleCreateHang}  />);
    });
    return (
      <div className="friendsList">
        {friendsList}
      </div>
    );
  }
}

export default FriendsList;
