import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let unCompletedTask = tasks.filter((task) => !task.done).length;
  // NOTE: do not delete `data-testid` key value pair

let you = "You have ";
let of = " of ";
let remain = " tasks remaining.";

  return (
    <div data-testid="task-header" className={styles.taskHeader}>{you}
      <b data-testid="header-remaining-task">{unCompletedTask} {of} </b>
      <b data-testid="header-total-task">{totalTask}{remain}</b>
    </div>
  );
};

export default TaskHeader;
