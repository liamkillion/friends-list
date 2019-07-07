// import React from 'react'
import * as React from "react";
import HangHistoryList from "../components/HangHistoryList";
import * as Moment from "moment";
import { Friend, handleCreateFunction, Hang } from "../interfaces";

interface IProps {
  friend: Friend;
  friendHangs: Hang[];
  handleCreateHang: handleCreateFunction;
}

const FriendLineItem: React.StatelessComponent<IProps> = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {props.friend.name} </h5>
        <p className="card-text">
          {" "}
          You should schedule something with them by:{" "}
          <Moment
            add={{ days: props.friend.desiredFrequency }}
            format="MM/DD/YY"
          >
            {props.friend.lastDateSeen}
          </Moment>
        </p>
        <p className="card-text">
          {" "}
          Suggested plans: {props.friend.name} likes {props.friend.notes}{" "}
        </p>
        <p className="card-text">
          Most Recent Past Hang with {props.friend.name}:
        </p>
      </div>
      <div className="card-footer">
        <HangHistoryList
          handleCreateHang={props.handleCreateHang}
          friend={props.friend}
          friendHangs={props.friend.hangs}
        />
      </div>
    </div>
  );
};

export default FriendLineItem;
