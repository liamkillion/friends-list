// import React from 'react'
import * as React from 'react'
import HangHistoryLineItem from './HangHistoryLineItem'
import Hang from "../interfaces"

interface Props {hangs:Hang[]}

export default class FutureHangsList extends React.Component<Props> {
  render () {
    const orderedHangs = this.props.hangs.sort((a:Hang,b:Hang) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
    const historicOrderedHangs = orderedHangs.filter(hang=>new Date(hang.date) > new Date(Date.now()))
    const futureHangsList = this.props.hangs.map(hang => {
      return (<HangHistoryLineItem key={hang.id} hang={hang} />);
    });
    return(
      <div>
        <h5>Upcoming Hangs</h5>
        {futureHangsList}
      </div>
    )
  }
}

// export default FutureHangsList;
