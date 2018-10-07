import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryLineItem from './HangHistoryLineItem.js'

class HangHistoryList extends React.Component {
  render() {
    const hangList = this.props.hangHistory.map(hang => {
      return <li>
        <HangHistoryLineItem hang={hang} />
      </li>;
    });
    return (<ul className="hangList">{hangList}</ul>);
  }
}

export default HangHistoryList;
