import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryListItem from ',/HangHistoryListItem.js'

class HangHistoryList extends React.Component {
  render() {
    const hangList = this.props.hangHistory.map(hang => {
      return <li>
        <HangLineItem hang={hang} />
      </li>;
    });
    return (<ul className="hangList">{hangList}</ul>);
  }
}

export default HangHistoryList;
