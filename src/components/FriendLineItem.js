import React from 'react'
import PropTypes from 'prop-types'

class FriendLineItem extends React.Component {
  render() {
     // broken, look at moment JS (written as a string currently)
    const nextHang = new Date(this.props.friend.lastDateSeen) + new Date(this.props.friend.desiredFrequency)
    return ( <
      ul >
      <p > {
        this.props.friend.name
      } < /p>
      <li > You should schedule something with them by: {
        nextHang
      } < /li>

      <li > Suggested plans: {
        this.props.friend.name
      }  {
        this.props.friend.notes
      } < /li>  < /
      ul >
      // <ReminderList lastDateSeen & desiredFrequency
    )
  }
}

export default FriendLineItem;
