// import React from 'react'
import * as React from "react";
import HangHistoryLineItem from "./HangHistoryLineItem";
import NewHangForm from "./NewHangForm";
import { Hang, Friend, handleCreateFunction } from "../interfaces";

interface IProps {
  friendHangs: Hang[];
  handleCreateHang: handleCreateFunction;
  friend: Friend;
}

interface IState {
  orderedHangs: Hang[];
  historicOrderedHangs: Hang[];
}

class HangHistoryList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      orderedHangs: [],
      historicOrderedHangs: []
    };
  }

  componentDidMount() {
    let stateOrderedHangs = this.props.friend.hangs.sort((a: Hang, b: Hang) =>
      a.date > b.date ? 1 : b.date > a.date ? -1 : 0
    );

    let stateHistoricOrderedHangs = stateOrderedHangs.filter(
      hang => new Date(hang.date) < new Date(Date.now())
    );
    this.setState({
      orderedHangs: stateOrderedHangs,
      historicOrderedHangs: stateHistoricOrderedHangs
    });
  }

  public render() {
    return (
      <div>
        <ul className="hangList list-group">
          <HangHistoryLineItem hang={this.state.historicOrderedHangs[0]} />
        </ul>
        <h5>Schedule an hang with this friend!</h5>
        <NewHangForm
          handleCreateHang={this.props.handleCreateHang}
          friend={this.props.friend}
        />
      </div>
    );
  }
}

export default HangHistoryList;
