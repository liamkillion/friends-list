// import React from 'react'
import * as React from "react"
import HangHistoryLineItem from './HangHistoryLineItem'
import NewHangForm from './NewHangForm.js'
import {Hang, Friend, handleCreateFunction} from "../interfaces"

interface Props {friendHangs:Hang[], handleCreateHang:handleCreateFunction, friend:Friend}

export default class HangHistoryList extends React.Component<HangHistoryListProps> {
  render() {
    const orderedHangs = this.props.friendHangs.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
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
