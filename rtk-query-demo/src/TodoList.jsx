import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "./apiSlice";

export default function TodoList() {
  const [newTask, setNewTask] = useState("");

  const { data: taskList, isLoading, refetch } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    const task = { value: newTask, completed:false };
    addTask(task);
    setNewTask("");
  };

  return (
    <div className="mainContainer">
    <div className="inputArea">
        <input
          className="inputBox"
          type="text"
          placeholder="Add Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter")
            {
              onSubmit(e);
            }
          }}
        />
        <button className="btn" type="button" onClick={onSubmit}>
          Add Task
        </button>
    </div>
    <div className="todoContainer">
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          taskList?.map((task) => {
            return (
              <Todo
                key={task?.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            );
          })
        )}
      </div>
    </div>
    </div>
  );
}
