import React, { Component } from "react";
import PropTypes from "prop-types";

class ManageECard extends Component {
  state = {
    eCard: { ...this.props.eCard }
  };

  static propTypes = {
    eCard: PropTypes.object.isRequired
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
      <form>
        <div>
          <label>SKU</label>
          <br />
          <input
            type="text"
            name="sku"
            value={sku}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Category</label>
          <br />
          <input
            type="text"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
        </div>

        <input type="submit" value="Save eCard" />
      </form>
    );
  }
}

export default ManageECard;
