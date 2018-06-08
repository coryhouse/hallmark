import React, { Component } from "react";
import PropTypes from "prop-types";

const TextInput = ({ label, name, value, onChange }) => (
  <div>
    <label>{label}</label>
    <br />
    <input type="text" name={name} value={value} onChange={onChange} />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
