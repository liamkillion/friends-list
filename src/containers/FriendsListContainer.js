import React from 'react'
import PropTypes from 'prop-types'
import FriendsList from "../components/FriendsList.js";

const FriendsListContainer = (props) => {
  return (
    <FriendsList handleCreateHang={props.handleCreateHang} friends={props.friends} />
  )
}

export default FriendsListContainer
