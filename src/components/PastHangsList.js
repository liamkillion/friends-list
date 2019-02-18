import React from 'react'
import Moment from 'react-moment';
import { FaCalendarCheck,  FaRegCalendarTimes} from 'react-icons/fa'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class PastHangsList extends React.Component {
  render () {
    const orderedHangs = this.props.hangs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
    const historicOrderedHangs = orderedHangs.filter(hang=>new Date(hang.date) < new Date(Date.now()))
    const futureHangsList = this.props.hangs.map(hang => {
      return (
        <TimelineItem
          key={this.props.hangs.indexOf(hang)}
          dateText={hang.date}
          style={{ color: '#e86971' }}
        >
          <p>Date: <Moment format="MM/DD/YY">{hang.date}</Moment></p>
          <p>Activity: {hang.activity}</p>
          <p>Did you meet up? {(hang.didHang ? <FaCalendarCheck /> : <FaRegCalendarTimes />)}</p>
        </TimelineItem>
      );
    });

    return(
      <div>
        <h5>Past Hangs</h5>
        <Timeline lineColor={'#ddd'}>
          {futureHangsList}
        </Timeline>
      </div>
    )
  }
}

export default PastHangsList;
