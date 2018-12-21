import React from 'react'
import PropTypes from 'prop-types'
import PastHangsList from "../components/PastHangsList.js";
import UpcomingHangsList from "../components/UpcomingHangsList.js";


const HangsViewContainer = (props) => {
  return (
    <div>
      <h5>Here are your hangs!</h5>
      <PastHangsList hangs={this.props.hangs}/>
      <UpcomingHangsList />
    </div>
  )
}

export default HangsViewContainer
