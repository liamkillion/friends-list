import React from 'react'
import PropTypes from 'prop-types'
import FriendsList from "../components/FriendsList.js";

class FriendsListContainer extends React.Component {
  render () {
    return(
      <FriendsList friends={this.props.friends} />
    )
  }
}

export default FriendsListContainer;
