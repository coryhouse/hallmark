import React, { Component } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

class ManageECard extends Component {
  state = {
    eCard: { ...this.props.eCard }
  };

  static propTypes = {
    eCard: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  handleChange = event => {
    const eCard = { ...this.state.eCard };
    eCard[event.target.name] = event.target.value;
    this.setState({ eCard });
  };

  render() {
    // Destructuring to shorten calls below.
    const { sku, name, category } = this.state.eCard;

    return (
      <form onSubmit={event => this.props.onSubmit(event, this.state.eCard)}>
        <TextInput
          name="sku"
          label="SKU"
          onChange={this.handleChange}
          value={sku}
        />
        <TextInput
          name="name"
          label="Name"
          onChange={this.handleChange}
          value={name}
        />
        <TextInput
          name="category"
          label="Category"
          onChange={this.handleChange}
          value={category}
        />

        <input type="submit" value="Save eCard" />
      </form>
    );
  }
}

export default ManageECard;
