import React from 'react'
import PropTypes from 'prop-types'
import NewFriendForm from "../components/NewFriendForm.js"

const NewFriendContainer = (props) => {
  return (
    <div>
      <h5>Add a new friend</h5>
      <NewFriendForm handleCreateFriend={props.handleCreateFriend}/>
    </div>
  )
}

export default NewFriendContainer
