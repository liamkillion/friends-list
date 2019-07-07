// import React from 'react'
import * as React from "react";
import * as Moment from "moment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import { Hang } from "../interfaces";

// interface Hang { date: string; activity: string; didHang: boolean }
interface IProps {
  hang: Hang;
}

const HangHistoryLineItem: React.StatelessComponent<IProps> = () => {
  return (
    <li className="list-group-item">
      <p>
        Date: <Moment format="MM/DD/YY">{this.props.hang.date}</Moment>
      </p>
      <p>Activity: {this.props.hang.activity}</p>
      <p>
        Did you meet up?{" "}
        {this.props.hang.didHang ? <FaCalendarCheck /> : <FaRegCalendarTimes />}
      </p>
    </li>
  );
};

export default HangHistoryLineItem;
