import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryList from '../components/HangHistoryList.js'

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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {this.props.friend.name} </h5>
          <p className="card-text"> You should schedule something with them by: {nextHang} </p>
          <p className="card-text"> Suggested plans: {this.props.friend.name}  {this.props.friend.notes} </p>
          <p className="card-text">Recent Hangs with {this.props.friend.name}:</p>
        </div>
        <div className="card-footer">
          <HangHistoryList handleCreateHang={this.props.handleCreateHang} friend={this.props.friend}/>
        </div>
      </div>
    )
  }
}

export default FriendLineItem;
