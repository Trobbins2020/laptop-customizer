import { Component } from "react";
import Summary from "./Option";
import Total from "./Total";

class MainSummary extends Component {
  render() {
    const { USCurrencyFormat, selected } = this.props;
    return (
      <section className="main__summary">
        <Summary formatx={USCurrencyFormat} selected={selected} />
        <Total formatx={USCurrencyFormat} selected={selected} />
      </section>
    );
  }
}

export default MainSummary;
