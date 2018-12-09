import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryList from '../components/HangHistoryList.js'
import Moment from 'react-moment';

class FriendLineItem extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {this.props.friend.attributes.name} </h5>
          <p className="card-text"> You should schedule something with them by:
            <Moment add={{days:this.props.friend.attributes.desiredFrequency}} format="MM/DD/YY">{this.props.friend.attributes.lastDateSeen}</Moment>
          </p>
          <p className="card-text"> Suggested plans: {this.props.friend.attributes.name} {this.props.friend.attributes.notes} </p>
          <p className="card-text">Recent Hangs with {this.props.friend.attributes.name}:</p>
        </div>
        <div className="card-footer">
          <HangHistoryList handleCreateHang={this.props.handleCreateHang} friend={this.props.friend} friendHangs={this.props.friendHangs}/>
        </div>
      </div>
    )
  }
}

export default FriendLineItem;
