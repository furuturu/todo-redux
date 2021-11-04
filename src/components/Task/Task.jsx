import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  actCompleteTask,
  actDeleteTask,
  actSaveEdited,
} from "../../store/action/action";
import {
  ButtonsWrapper,
  StyledData,
  TaskContainer,
  TaskContent,
  TaskEdit,
  TasksWrapper,
} from "./Task.styles";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(task.content);
  const [editMode, setEditMode] = useState(false);

  const taskComplete = () => {
    dispatch(actCompleteTask(task.id));
  };
  const taskDelete = () => {
    dispatch(actDeleteTask(task.id));
  };
  const taskEdit = () => {
    setEditMode(true);
  };
  const saveEdited = () => {
    if (value) {
      dispatch(actSaveEdited(task.id, value));
      setEditMode(false);
    }
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter" && value) {
      saveEdited();
    }
  };
  const handleSetValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <TasksWrapper>
      <TaskContainer status={task.isActive}>
        {editMode ? (
          <TaskEdit>
            <input
              value={value}
              onChange={handleSetValue}
              onKeyDown={handleSubmit}
            />
            {!value && <span>Please type something</span>}
            <button onClick={saveEdited}>Save</button>
          </TaskEdit>
        ) : (
          <div>
            <TaskContent>{task.content}</TaskContent>
            <StyledData>{task.date}</StyledData>
          </div>
        )}
      </TaskContainer>
      <ButtonsWrapper>
        <button disabled={editMode} onClick={taskComplete}>
          Complete
        </button>
        <button onClick={taskDelete}>Delete</button>
        <button disabled={editMode} onClick={taskEdit}>
          Edit
        </button>
      </ButtonsWrapper>
    </TasksWrapper>
  );
};
