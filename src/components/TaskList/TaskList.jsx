import React from "react";
import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import { ListWrapper } from "./TaskList.styles";

export const TaskList = () => {
  const todo = useSelector((state) => state.taskReducer.todo);
  const filter = useSelector((state) => state.filterReducer.filter);
  switch (filter) {
    case "SHOW_ALL":
      return (
        <ListWrapper>
          {todo.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ListWrapper>
      );
    case "SHOW_ACTIVE":
      return (
        <ListWrapper>
          {todo
            .filter((task) => task.isActive === true)
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </ListWrapper>
      );
    case "SHOW_DONE":
      return (
        <ListWrapper>
          {todo
            .filter((task) => task.isActive === false)
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </ListWrapper>
      );
  }
};
