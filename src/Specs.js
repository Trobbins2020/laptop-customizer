import { Component } from "react";
import Parts from "./Parts";

class Features extends Component {
  render() {
    const { options, feature, formatx, selected, updateFeature } = this.props;
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options[feature].map((item) => {
          const itemHash = JSON.stringify(item);
          return (
            <Parts
              key={itemHash}
              itemHash={itemHash}
              feature={feature}
              item={item}
              formatx={formatx}
              selected={selected}
              updateFeature={updateFeature}
            />
          );
        })}
      </fieldset>
    );
  }
}

export default Features;
