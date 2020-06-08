import React from  'react';
import classes from  './burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) =>
{
    let transformedIngredients =Object.keys(props.ingredients).map(igKey =>
        {
            return [...Array(props.ingredients[igKey])].map((_,index) =>
            {
                return <BurgerIngredient type={igKey} key={igKey+index}/>
            });
        }).reduce((acc,curr)=>
        {
            return acc.concat(curr);
        },[]);

        
    if(transformedIngredients.length===0)
    {
        transformedIngredients=(<p>Please start adding ingredeints ! <br/><span role="img" aria-label="burger">🍞+🥗+🧀+🥓+🍞 => 🍔 😋</span></p>);
    } 
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;