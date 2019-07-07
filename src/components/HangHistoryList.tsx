// import React from 'react'
import * as React from "react";
import HangHistoryLineItem from "./HangHistoryLineItem";
import NewHangForm from "./NewHangForm";
import { Hang, Friend, handleCreateFunction } from "../interfaces";

interface IProps {
  handleCreateHang: handleCreateFunction;
  friend: Friend;
}

export default class HangHistoryList extends React.Component<IProps> {
  render() {
    let friendHangs = this.props.friend.relationships.hangs.data;
    console.log(friendHangs);

    let orderedHangs = friendHangs.sort((a: Hang, b: Hang) =>
      a.date > b.date ? 1 : b.date > a.date ? -1 : 0
    );

    let historicOrderedHangs = orderedHangs.filter(
      hang => new Date(hang.date) < new Date(Date.now())
    );

    const hangsList = historicOrderedHangs.map(hang => {
      return <HangHistoryLineItem hang={hang} />;
    });
    return (
      <div>
        <ul className="hangList list-group">{hangsList}</ul>
        <h5>Schedule an hang with this friend!</h5>
        <NewHangForm
          handleCreateHang={this.props.handleCreateHang}
          friend={this.props.friend}
        />
      </div>
    );
  }
}
