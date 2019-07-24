import * as React from "react";
import Moment from "react-moment";
import { FaCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import { Hang } from "../interfaces";

interface IProps {
  hang: Hang;
}

export default class HangHistoryLineItem extends React.Component<IProps> {
  render() {
    return (
      <li className="list-group-item">
        <p>
          Date:{" "}
          <Moment format="MM/DD/YY">{this.props.hang.attributes.date}</Moment>
        </p>
        <p>Activity: {this.props.hang.attributes.activity}</p>
        <p>
          Did you meet up?{" "}
          {this.props.hang.attributes.didHang ? (
            <FaCalendarCheck />
          ) : (
            <FaRegCalendarTimes />
          )}
        </p>
      </li>
    );
  }
}
