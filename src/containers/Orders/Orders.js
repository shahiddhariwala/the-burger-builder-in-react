import React, { Component } from "react";
import Order from "../../components/Order/Order";
import classes from "./orders.module.css";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div className={classes.Orders}>
        <Order />
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
