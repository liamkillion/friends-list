import * as React from "react";
import HangHistoryList from "../components/HangHistoryList";
import Moment from "react-moment";
import { Friend, handleCreateFunction, Hang } from "../interfaces";

interface IProps {
  friend: Friend;
  friendHangs: Hang[];
  handleCreateHang: handleCreateFunction;
}

export default class FriendLineItem extends React.Component<IProps> {
  render() {
    return (
      <li className="list-group-item">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {this.props.friend.attributes.name}{" "}
            </h5>
            <p className="card-text">
              {" "}
              You should schedule something with them by:{" "}
              {
                <Moment
                  add={{ days: this.props.friend.attributes.desiredFrequency }}
                  format="MM/DD/YY"
                >
                  {this.props.friend.attributes.lastDateSeen}
                </Moment>
              }
            </p>
            <p className="card-text">
              {" "}
              Suggested plans: {this.props.friend.attributes.name} likes{" "}
              {this.props.friend.attributes.notes}{" "}
            </p>
            <p className="card-text">
              Most Recent Past Hang with {this.props.friend.attributes.name}:
            </p>
          </div>
          <div className="card-footer">
            <HangHistoryList
              friendHangs={this.props.friendHangs}
              handleCreateHang={this.props.handleCreateHang}
              friend={this.props.friend}
            />
          </div>
        </div>
      </li>
    );
  }
}
