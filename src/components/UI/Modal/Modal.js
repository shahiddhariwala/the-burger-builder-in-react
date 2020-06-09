import React from "react";
import classes from "./modal.module.css";
import Backdrop from '../Backdrop/Backdrop';
import Aux from "../../../hoc/Aux";
const modal = (props) => (
  <Aux>
      <Backdrop show={props.show} clicked={props.modalCLosed}/>
    <div
      className={classes.Modal}
      style={{
        translate: props.show ? "translate(0)" : "transalte(-110vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);
export default modal;
