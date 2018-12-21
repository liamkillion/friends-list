import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryLineItem from './HangHistoryLineItem.js'
import NewHangForm from './NewHangForm.js'

class HangHistoryList extends React.Component {
  render() {
    const hangList = this.props.friendHangs.map(hang => {
      return <HangHistoryLineItem hang={hang} />
    });
    return (
      <div>
        <ul className="hangList list-group">{hangList}</ul>
        <h5>Schedule an hang with this friend!</h5>
        <NewHangForm handleCreateHang={this.props.handleCreateHang} friend={this.props.friend}/>
      </div>
);
  }
}

export default HangHistoryList;
