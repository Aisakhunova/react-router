import React, { useState } from "react";
import "./styles/App.css";
import MyButton from "./UI/MyButton";
import Task from "./components/Task";
import Tick from "./UI/Tick";
import { Checkbox } from "antd";
import MyInput from "./components/MyInput";
import TaskForm from "./components/TaskForm";
const App = () => {
  const [taskArray, setTaskArray] = useState([
    { index: 1, content: "Wake up" },
    { index: 2, content: "Breakfast" },
    { index: 3, content: "Shower" },
  ]);

  const createTask = (newTask) => {
    task.index = taskArray.length + 1;
    setTaskArray([...taskArray, newTask]);
  };

  const deleteTask = (task) => {
    console.log("called");
    setTaskArray(taskArray.filter((el) => el.index !== task.index));
  };

  const [task, setTask] = useState({ index: "", content: "" });
  return (
    <div>
      <TaskForm create={createTask} index={taskArray.length + 1} />

      {taskArray.length !== 0 ? (
        taskArray.map((el) => {
          return <Task task={el} delete={deleteTask} key={el.index}></Task>;
        })
      ) : (
        <h1 style={{ textAlign: "center", color: "white" }}>
          TASKS ARE NOT FOUND
        </h1>
      )}
    </div>
  );
};
export default App;
