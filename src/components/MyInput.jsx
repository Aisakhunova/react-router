import React from "react";
import classes from "./MyInput.module.css";
import MyButton from "../UI/MyButton";

const MyInput = (props) => {
  return (
    <div>
      <input
        className={classes.MyInput}
        type="text"
        placeholder="Add a task"
        {...props}
      />
    </div>
  );
};

export default MyInput;
