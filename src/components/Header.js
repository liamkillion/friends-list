import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    return(
      <div className="header">
        <h1>Welcome, "%{this.props.userName}"</h1>
      </div>
    )
  }
}

export default Header;
