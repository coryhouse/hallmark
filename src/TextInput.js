import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <br />
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default TextInput;
