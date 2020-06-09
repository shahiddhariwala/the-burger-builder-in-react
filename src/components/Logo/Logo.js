import React from 'react';
import classes from './logo.module.css';
import myLogo from '../../assets/images/logo.png';
const logo = () => {
    return (  <div className={classes.Logo}><img src={myLogo} alt="Burger Logo"/></div>);
}
 
export default logo;