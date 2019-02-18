import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { FaCalendarCheck,  FaRegCalendarTimes} from 'react-icons/fa';


class HangHistoryLineItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <p>Date: <Moment format="MM/DD/YY">{this.props.hang.date}</Moment></p>
        <p>Activity: {this.props.hang.activity}</p>
        <p>Did you meet up? {(this.props.hang.didHang ? <FaCalendarCheck /> : <FaRegCalendarTimes />)}</p>
      </li>
    )
  }
}

export default HangHistoryLineItem;
