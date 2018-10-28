import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryLineItem from './HangHistoryLineItem.js'
import NewHangForm from './NewHangForm.js'

class HangHistoryList extends React.Component {
  render() {
    debugger
    const hangList = this.props.friend.data.relationships.hangs.data.map(hang => {
      return <HangHistoryLineItem hang={hang} />
    });
    return (
      <div>
        <ul className="hangList list-group">{hangList}</ul>
        <NewHangForm handleCreateHang={this.props.handleCreateHang} friend={this.props.friend}/>
      </div>
);
  }
}

export default HangHistoryList;
