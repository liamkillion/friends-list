import React from 'react'
import PropTypes from 'prop-types'

class FriendLineItem extends React.Component {
  render() {
     // broken, look at moment JS (written as a string currently)
    var lastHang = this.props.friend.lastDateSeen
    var numberOfDaysToAdd = this.props.friend.desiredFrequency;
    lastHang.setDate(lastHang.getDate() + numberOfDaysToAdd)
    var dd = lastHang.getDate();
    var mm = lastHang.getMonth() + 1;
    var y = lastHang.getFullYear();
    var someFormattedDate = dd + '/'+ mm + '/'+ y;
    const nextHang = someFormattedDate

    return (
      <ul>
        <p> {this.props.friend.name} </p>
        <li> You should schedule something with them by: {nextHang} </li>
        <li> Suggested plans: {this.props.friend.name}  {this.props.friend.notes} </li>
        <HangHistoryContainer hangHistory={hang.props.friend.hangHistory}/>
      </ul>
    )
  }
}

export default FriendLineItem;
