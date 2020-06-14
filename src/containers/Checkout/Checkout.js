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

  checkoutCancelledHandler = ()=>
  {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () =>
    {
        this.props.history.replace('/checkout/checkout-data');
    }
  render() {
    return (
      <div>
        <CheckoutSummary ingredeints={this.state.ingredeints} checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler}/>
      </div>
    );
  }
}

export default Checkpoint;
