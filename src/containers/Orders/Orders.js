import React, { Component } from "react";
import Order from "../../components/Order/Order";
import classes from "./orders.module.css";
class Orders extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Orders}>
        <Order />
      </div>
    );
  }
}

export default Orders;
