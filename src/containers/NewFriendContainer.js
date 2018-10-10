import React from 'react'
import PropTypes from 'prop-types'
import NewFriendForm from "../components/NewFriendForm.js"

class NewFriendContainer extends React.Component {
  render () {
    return(
      <div>
        <h5>Add a new friend</h5>
        <NewFriendForm handleCreateFriend={this.props.handleCreateFriend}/>
      </div>
    )
  }
}

export default NewFriendContainer;
