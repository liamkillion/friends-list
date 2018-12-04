import React from 'react'
import PropTypes from 'prop-types'

class HangHistoryListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <p>Date: {this.props.hang.attributes.date}</p>
        <p>Activity: {this.props.hang.attributes.activity}</p>
        <p>Did you meet up? {this.props.hang.attributes.didHang}</p>
      </li>
    )
  }
}

export default HangHistoryListItem;
