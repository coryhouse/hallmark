import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="Home" onClick={this.props.onLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="ECards" onClick={this.props.onLinkClick}>
            eCards
          </a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
