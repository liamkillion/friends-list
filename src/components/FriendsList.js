import React from 'react'
import PropTypes from 'prop-types'

class FriendsList extends React.Component {
  constructor(props){
    super(props)
    const friendsList : this.props.userFriends.map((friend)=>{
      <li><FriendLineItem props={friend}/></li>
    })
    this.state={
      friendsList:friendsList
    }
  }
  render () {
    return(
      <ul className="friendsList">{friendsList}</ul>
    )
  }
}

export default FriendsList;
