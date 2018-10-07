import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryContainer from '../containers/HangHistoryContainer.js'

class FriendLineItem extends React.Component {
  render() {
     // broken, look at moment JS (written as a string currently)
    var lastHang = this.props.friend.lastDateSeen
    var numberOfDaysToAdd = this.props.friend.desiredFrequency;
    var lastHangDate = new Date(lastHang)
    lastHangDate.setDate(lastHangDate.getDate() + numberOfDaysToAdd)
    var dd = lastHangDate.getDate();
    var mm = lastHangDate.getMonth() + 1;
    var y = lastHangDate.getFullYear();
    var someFormattedDate = dd + '/'+ mm + '/'+ y;
    const nextHang = someFormattedDate


    return (
      <ul>
        <p> {this.props.friend.name} </p>
        <li> You should schedule something with them by: {nextHang} </li>
        <li> Suggested plans: {this.props.friend.name}  {this.props.friend.notes} </li>
        <li>Recent Hangs with {this.props.friend.name}:</li>
        <HangHistoryContainer hangHistory={this.props.friend.hangHistory}/>
      </ul>
    )
  }
}

export default FriendLineItem;
