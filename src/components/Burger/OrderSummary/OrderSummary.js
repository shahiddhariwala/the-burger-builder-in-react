import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ig) => {
    return (
      <li key={ig}>
        <span style={{ textTransform: "capitalize" }}>{ig}</span>:{" "}
        {props.ingredients[ig]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order :</h3>
      <p>Folowing are delicious ingedients you have added...</p>
      <ul>{ingredients}</ul>
    </Aux>
  );
};
export default orderSummary;
