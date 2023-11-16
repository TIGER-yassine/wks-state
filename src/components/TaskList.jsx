import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, del, comp }) => {
  return (
    <div>
      {tasks.map((el) => (
        <TaskItem key={el.id} el={el} del={del} comp={comp} />
      ))}
    </div>
  );
};

export default TaskList;
