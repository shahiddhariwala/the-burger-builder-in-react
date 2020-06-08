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
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1,
    },
    totalPrice: 250,
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
  };

  removeIngredientHandler = (type) => {
//Decrease The Count
const oldCount = this.state.ingredients[type];
if(oldCount<=0)
{
  return;
}
const updatedCount = oldCount - 1;
const updatedIngredients = { ...this.state.ingredients };
updatedIngredients[type] = updatedCount;

//Set total prices
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice - INGREDIENT_PRICES[type];

this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };
  render() {
    const disableInfo = {...this.state.ingredients};
    for(let x in disableInfo)
    {
      disableInfo[x] =  disableInfo[x] <= 0 ;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls addIngredeint={this.addIngredientHandler} removeIngredeint={this.removeIngredientHandler} disabled={disableInfo}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
