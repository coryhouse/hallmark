import React from "react";
import PropTypes from "prop-types";

class ECards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onAddClick}>Add eCard</button>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>SKU</th>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.props.eCards.map(card => {
              return (
                <tr key={card.sku}>
                  <td>
                    <button
                      onClick={event =>
                        this.props.onDeleteClick(event, card.sku)
                      }
                    >
                      Delete
                    </button>
                  </td>
                  <td>{card.sku}</td>
                  <td>{card.name}</td>
                  <td>{card.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

ECards.propTypes = {
  eCards: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ECards;
