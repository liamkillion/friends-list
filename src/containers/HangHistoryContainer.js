import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryList from '../components/HangHistoryList.js'

class HangHistoryContainer extends React.Component {
  render () {
    return(
      <HangHistoryList hangHistory={this.props.hangHistory}/>
    )
  }
}

export default HangHistoryContainer;
