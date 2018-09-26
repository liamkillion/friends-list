import React from 'react'
import PropTypes from 'prop-types'

class FriendLineItem extends React.Component {
  render() {
    const nextHang = new Date(this.props.friend.lastDateSeen) + this.props.friend.desiredFrequency
    return ( <
      ol >
      <
      li > {
        this.props.friend.name
      } < /li> <
      li > You should schedule something with them by: {
        this.nextHang
      } < /li> <
      li > Suggested plans: {
        this.props.friend.name
      }
      likes {
        this.props.friend.notes
      } < /li> < /
      ol >
    )
  }
}

export default FriendLineItem;