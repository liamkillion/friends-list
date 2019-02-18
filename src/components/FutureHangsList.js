import React from 'react'
import HangHistoryLineItem from './HangHistoryLineItem.js'

class UpcomingHangsList extends React.Component {
  render () {
    const orderedHangs = this.props.hangs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
    const historicOrderedHangs = orderedHangs.filter(hang=>new Date(hang.date) > new Date(Date.now()))
    const futureHangsList = this.props.hangs.map(hang => {
      return (<HangHistoryLineItem key={hang.id} hang={hang} friend={hang.friend_id} />);
    });
    return(
      <div>
        <h5>Upcoming Hangs</h5>
        {futureHangsList}
      </div>
    )
  }
}

export default UpcomingHangsList;
