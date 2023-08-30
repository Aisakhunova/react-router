import React, { useState } from "react";
import MyInput from "./MyInput";
import classes from "./MyInput.module.css";
import MyButton from "../UI/MyButton";

const TaskForm = ({ create, index }) => {
  const [task, setTask] = useState({ index: "", content: "" });

  const addNewTask = (e) => {
    e.preventDefault();
    task.index = index;
    const newTask = {
      ...task,
    };
    create(newTask);
    setTask({ ...task, index: "", content: "" });
  };

  return (
    <div>
      <div className={classes.all}>
        <MyInput
          value={task.content}
          onChange={(e) => setTask({ ...task, content: e.target.value })}
        />
        
        <MyButton onClick={addNewTask}>Add</MyButton>
      </div>
      <hr style={{ margin: "15px 0" }} />
    </div>
  );
};

export default TaskForm;
