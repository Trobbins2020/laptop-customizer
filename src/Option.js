import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <div>
        <h2>Your cart</h2>
        {Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + "-" + idx;
          const selectedOption = this.props.selected[feature];
          return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">
                {selectedOption.name}
              </div>
              <div className="summary__option__cost">
                {this.props.formatx.format(selectedOption.cost)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Summary;
