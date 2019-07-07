// import React from 'react'
import * as React from "react";
import Moment from "react-moment";
import { FaCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import { Hang } from "../interfaces";

// interface Hang { date: string; activity: string; didHang: boolean }
interface IProps {
  hang: Hang;
}

export default class HangHistoryLineItem extends React.Component<IProps> {
  render() {
    return (
      <li className="list-group-item">
        <p>
          Date: <Moment format="MM/DD/YY">{this.props.hang.date}</Moment>
        </p>
        <p>Activity: {this.props.hang.activity}</p>
        <p>
          Did you meet up?{" "}
          {this.props.hang.didHang ? (
            <FaCalendarCheck />
          ) : (
            <FaRegCalendarTimes />
          )}
        </p>
      </li>
    );
  }
}
