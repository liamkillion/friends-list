import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryListItem from ',/HangHistoryListItem.js'

class HangHistory extends React.Component {
  render() {
    const hangList = this.props.userFriends.map(hang => {
      return <li>
        <HangLineItem hang={hang} />
      </li>;
    });
    return (<ul className="hangList">{hangList}</ul>);
  }
}

export default HangHistory;
