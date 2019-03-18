// import React from 'react'
import * as React from "react"
import HangHistoryList from '../components/HangHistoryList'
import Moment from 'react-moment';
import {Friend, handleCreateFunction} from "../interfaces"

interface Props {friend:Friend, handleCreateHang:handleCreateFunction}

// class FriendLineItem extends React.Component {
export default class FriendLineItem extends React.Component<Props> {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {this.props.friend.attributes.name} </h5>
          <p className="card-text"> You should schedule something with them by: <Moment add={{days:this.props.friend.attributes.desiredFrequency}} format="MM/DD/YY">{this.props.friend.attributes.lastDateSeen}</Moment>
          </p>
          <p className="card-text"> Suggested plans: {this.props.friend.attributes.name} likes {this.props.friend.attributes.notes} </p>
          <p className="card-text">Most Recent Past Hang with {this.props.friend.attributes.name}:</p>
        </div>
        <div className="card-footer">
          <HangHistoryList handleCreateHang={this.props.handleCreateHang} friend={this.props.friend} friendHangs={this.props.friendHangs}/>
        </div>
      </div>
    )
  }
}

// export default FriendLineItem;
