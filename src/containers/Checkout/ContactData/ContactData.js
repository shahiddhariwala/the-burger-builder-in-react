import React, { Component } from "react";
import classes from "./contactData.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: "",
    },
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Shahid Dhariwala",
        address: {
          street: "Mahalaxmi",
          zipCode: "41351",
          country: "Mumbai",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    console.log(order);
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {

    let form = (<form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="enter Name"
        />
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="enter Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="enter Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipcode"
          placeholder="enter Zipcode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>);
    if(this.state.loading)
    {
        form=<Spinner/>
    }
    return (
      <div className={classes.ContactData}>
        <h4>Please enter the delivery details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
