import React from "react";
import classes from "./modal.module.css";

const modal = (props) => (
  <div
    className={classes.Modal}
    style={{
      translate: props.show ? "translate(0)" : "transalte(-110vh)",
      opacity: props.show ? "1" : "0",
    }}
  >
    {props.children}
  </div>
);
export default modal;
