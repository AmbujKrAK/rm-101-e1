import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [newTask, setNewTask] = useState("");
  const handleClick = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={newTask} onChange={({ target }) => setNewTask(target.value)} placeholder="Add Task..."/>
      <button data-testid="add-task-button" onClick={handleClick}>+</button>
    </div>
  );
};

export default AddTask;
