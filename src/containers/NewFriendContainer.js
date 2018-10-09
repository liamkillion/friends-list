import React from 'react'
import PropTypes from 'prop-types'

class NewFriendContainer extends React.Component {
  render () {
    return(
      <div>
        <h5>Add a new friend</h5>
        <NewFriendForm />  
      </div>
    )
  }
}

export default NewFriendContainer;
