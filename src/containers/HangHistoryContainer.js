import React from 'react'
import PropTypes from 'prop-types'
import HangHistoryList from '../components/HangHistoryList.js'

const HangHistoryContainer = (props) => {
  return (
    <HangHistoryList handleCreateHang={props.handleCreateHang} friend={props.friend}/>
  )
}

export default HangHistoryContainer
