import { Component } from "react";

class Parts extends Component {
  render() {
    const {
      itemHash,
      feature,
      selected,
      item,
      formatx,
      updateFeature,
    } = this.props;
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={feature}
          checked={item.name === selected[feature].name}
          onChange={(e) => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({formatx.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default Parts;
