import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryLineItem from './HangHistoryLineItem.js'

class HangHistoryList extends React.Component {
  render() {
    const hangList = this.props.hangHistory.map(hang => {
      return <HangHistoryLineItem hang={hang} />
    });
    return (<ul className="hangList list-group">{hangList}</ul>);
  }
}

export default HangHistoryList;
