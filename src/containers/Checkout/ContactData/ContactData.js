import React, { Component } from "react";
import classes from './contactData.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: "",
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Please enter the delivery details</h4>
        <form>
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
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;