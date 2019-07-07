// import React from 'react'
import * as React from "react";
import HangHistoryList from "../components/HangHistoryList";
import Moment from "react-moment";
import { Friend, handleCreateFunction, Hang } from "../interfaces";

interface IProps {
  friend: Friend;
  friendHangs: Hang[];
  handleCreateHang: handleCreateFunction;
}

// class FriendLineItem extends React.Component {
export default class FriendLineItem extends React.Component<IProps> {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {this.props.friend.name} </h5>
          <p className="card-text">
            {" "}
            You should schedule something with them by:{" "}
            {
              <Moment
                add={{ days: this.props.friend.desiredFrequency }}
                format="MM/DD/YY"
              >
                {this.props.friend.lastDateSeen}
              </Moment>
            }
          </p>
          <p className="card-text">
            {" "}
            Suggested plans: {this.props.friend.name} likes{" "}
            {this.props.friend.notes}{" "}
          </p>
          <p className="card-text">
            Most Recent Past Hang with {this.props.friend.name}:
          </p>
        </div>
        <div className="card-footer">
          <HangHistoryList
            handleCreateHang={this.props.handleCreateHang}
            friend={this.props.friend}
            friendHangs={this.props.friend.hangs}
          />
        </div>
      </div>
    );
  }
}

// export default FriendLineItem;
