import React from 'react'
import PropTypes from 'prop-types'

class PastHangsList extends React.Component {
  render () {
    const orderedHangs = this.props.hangs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));
    const historicOrderedHangs = orderedHangs.filter(hang=>new Date(hang.date) < new Date(Date.now()))
    return(
      <h5>Past Hangs</h5>
    )
  }
}

export default PastHangsList;
