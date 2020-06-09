import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 40,
  bacon: 70,
  cheese: 35,
  meat: 100,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 250,
    purchasable: false,
  };

  updatePurchaseStatusHandler = (ingredients) => {
   
    const sum = Object.keys(ingredients).map(igKey =>
      {
       return igKey = ingredients[igKey];  
      }).reduce((acc,curr)=> acc+=curr,0);
    
      this.setState({purchasable : sum>0});
  };
  addIngredientHandler = (type) => {
    //Increase The Count
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    //Set total prices
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseStatusHandler(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    //Decrease The Count
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    //Set total prices
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseStatusHandler(updatedIngredients);
  };
  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let x in disableInfo) {
      disableInfo[x] = disableInfo[x] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addIngredeint={this.addIngredientHandler}
          removeIngredeint={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
