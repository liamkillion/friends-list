import React from 'react'
import PropTypes from 'prop-types'

class HangHistoryListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <p>Date: {this.props.hang.date}</p>
        <p>Activity: {this.props.hang.activity}</p>
        <p>Did you meet up? {this.props.hang.didMeet}</p>
      </li>
    )
  }
}

export default HangHistoryListItem;
