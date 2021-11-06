import React from "react";
import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import { ListWrapper } from "./TaskList.styles";

export const TaskList = () => {
  const todo = useSelector((state) => state.taskReducer.todo);
  const filter = useSelector((state) => state.filterReducer.filter);
  const filterTasksByStatus = (filter, todo) => {
    switch (filter) {
      case "SHOW_DONE":
        return todo.filter((task) => task.isActive === false);
      case "SHOW_ACTIVE":
        return todo.filter((task) => task.isActive === true);
      case "SHOW_ALL":
        return todo;
    }
  };
  const taskList = filterTasksByStatus(filter, todo);
  return (
    <ListWrapper>
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ListWrapper>
  );
};
