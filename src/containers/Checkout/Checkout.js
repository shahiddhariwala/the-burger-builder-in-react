import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
class Checkpoint extends Component {
  state = {
    ingredeints: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredeints={this.state.ingredeints} />
      </div>
    );
  }
}

export default Checkpoint;
