// import React from 'react'
import * as React from "react"
import HangHistoryLineItem from './HangHistoryLineItem.js'
import NewHangForm from './NewHangForm.js'

export interface HangHistoryListProps {friendHangs:object[],handleCreateHang:function,friend:object}

export class HangHistoryList extends React.Component<HangHistoryListProps,{}> {
  render() {
    const orderedHangs = this.props.friendHangs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
    const historicOrderedHangs = orderedHangs.filter(hang=>new Date(hang.date) < new Date(Date.now()))
    return (
      <div>
        <ul className="hangList list-group"><HangHistoryLineItem hang={historicOrderedHangs[0]} /></ul>
        <h5>Schedule an hang with this friend!</h5>
        <NewHangForm handleCreateHang={this.props.handleCreateHang} friend={this.props.friend}/>
      </div>
);
  }
}

// export default HangHistoryList;
