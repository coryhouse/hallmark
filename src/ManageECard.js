import React, { Component } from "react";

class ManageECard extends Component {
  render() {
    return (
      <form>
        <div>
          <label>SKU</label>
          <br />
          <input type="text" />
        </div>

        <div>
          <label>Name</label>
          <br />
          <input type="text" />
        </div>

        <div>
          <label>Category</label>
          <br />
          <input type="text" />
        </div>

        <input type="submit" value="Save eCard" />
      </form>
    );
  }
}

export default ManageECard;
