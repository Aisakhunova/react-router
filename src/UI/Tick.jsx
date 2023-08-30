import React from "react";
import classes from "./Tick.module.css";

const Tick = () => {
  return (
    <input className={classes.Tick} type="checkbox" id="wef" checked={true} />
  );
};

export default Tick;
