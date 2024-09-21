import React from "react";

export default function Todo({ task, updateTask, deleteTask }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: "50%",
        gap: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={task?.completed ? true : false}
        id={task?.id}
        onChange={() => {
          console.log(task?.id);
          updateTask({ id: task.id, completed: !task.completed });
        }}
      />
      <p>{task?.value}</p>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          deleteTask(task?.id);
        }}
      >
        &#10006;
      </p>
    </div>
  );
}
