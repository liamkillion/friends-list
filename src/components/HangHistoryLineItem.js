import React from 'react'
import PropTypes from 'prop-types'

class HangHistoryListItem extends React.Component {
  render() {
    return (
      <ul>
        <li>Date: {this.props.hang.date}</li>
        <li>Activity: {this.props.hang.activity}</li>
      </ul>
    )
  }
}

export default HangHistoryListItem;
