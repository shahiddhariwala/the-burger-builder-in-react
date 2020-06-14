import React from "react";
import classes from "./order.module.css";

const order = (props) => {
  let rawIngredients = [];

  for (let rawIngredientName in props.ingredients) {
    rawIngredients.push({
      name: rawIngredientName,
      amount: props.ingredients[rawIngredientName],
    });
  }

  const ingredientsOutput = rawIngredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          padding: "8px",
          border: "1px solid #eee",
          borderRadius: "200px",
          boxShadow: "0px 2px 1px #eee",
        }}
        key={ig.name}
      >
        {ig.name} {ig.amount}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>Rs. {props.price}</strong>
      </p>
    </div>
  );
};

export default order;
