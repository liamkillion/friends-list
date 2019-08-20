import * as React from "react";
import HangHistoryLineItem from "./HangHistoryLineItem";
import NewHangForm from "./NewHangForm";
import { Hang, Friend, handleCreateFunction } from "../interfaces";

interface IProps {
  handleCreateHang: handleCreateFunction;
  friendHangs: Hang[];
  friend: Friend;
}

export default class HangHistoryList extends React.Component<IProps> {
  render() {
    let friendHangs = this.props.friendHangs;
    let orderedHangs = friendHangs.sort((a: Hang, b: Hang) =>
      a.attributes.date > b.attributes.date
        ? 1
        : b.attributes.date > a.attributes.date
        ? -1
        : 0
    );

    let historicOrderedHangs = orderedHangs.filter(
      hang => new Date(hang.attributes.date) < new Date(Date.now())
    );

    const hangsList = historicOrderedHangs.map(hang => {
      return <HangHistoryLineItem hang={hang} />;
    });

    return (
      <div>
        <ul className="hangList list-group">{hangsList[0]}</ul>
        <h5>Schedule an hang with this friend!</h5>
        <NewHangForm
          handleCreateHang={this.props.handleCreateHang}
          friend={this.props.friend}
        />
      </div>
    );
  }
}
