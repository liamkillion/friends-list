import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Remind Me to See my Friends</span>
      </nav>
    );
  }
}

export default Header;
