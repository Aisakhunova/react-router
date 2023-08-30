import React from "react";
import MyButton from "../UI/MyButton";
import classes from "./Task.module.css";
import { Checkbox } from "antd";

const Task = (props) => {
  return (
    <div className={classes.task}>
      <Checkbox>
        <strong>
          {props.task.index}. {props.task.content}
        </strong>
      </Checkbox>
      <MyButton onClick={() => props.delete(props.task)}> Delete</MyButton>
    </div>
  );
};

export default Task;
