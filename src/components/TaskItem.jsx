import React from "react";

const TaskItem = ({ el, del, comp }) => {
  return (
    <div className="div">
      <h4 className={el.isdone ? "done" : "uncomplete"}>{el.action}</h4>
      <button onClick={() => comp(el.id)}>
        {el.isdone ? "uncomplete" : "complete"}
      </button>
      <button className="buton" onClick={() => del(el.id)}>
        delete
      </button>
    </div>
  );
};

export default TaskItem;
