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

  componentDidMount()
  {
    console.log(this.props);
    let ingredeint={};
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        ingredeint[param[0]] = +param[1];
    }
    
      
      this.setState({ingredeints:ingredeint});
  }
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
