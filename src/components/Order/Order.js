import React from 'react';
import classes  from './order.module.css'
const order = () => {
    return (<div className={classes.Order}>
        <p>Ingredients: Salad(1)</p>
        <p>Price: <strong>Rs. 756</strong></p>
    </div>  );
}
 
export default order;