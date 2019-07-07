// import React from 'react'
import * as React from "react";
import HangHistoryLineItem from "./HangHistoryLineItem";
import { Hang, Friend, handleCreateFunction } from "../interfaces";

interface IProps {
  hangs: Hang[];
  friends: Friend[];
  handleCreateHang: handleCreateFunction;
}

export default class PastHangsList extends React.Component<IProps> {
  render() {
    const orderedHangs = this.props.hangs.sort((a: Hang, b: Hang) =>
      a.date > b.date ? 1 : b.date > a.date ? -1 : 0
    );
    const historicOrderedHangs = orderedHangs.filter(
      hang => new Date(hang.date) < new Date(Date.now())
    );
    const pastHangsList = this.props.hangs.map(hang => {
      return <HangHistoryLineItem key={hang.id} hang={hang} />;
    });

    return (
      <div>
        <h5>Past Hangs</h5>
        {pastHangsList}
      </div>
    );
  }
}

// export default PastHangsList;
