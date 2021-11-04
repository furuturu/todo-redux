import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddTask } from "../../store/action/action";
import { nanoid } from "@reduxjs/toolkit";
import { InputWrapper } from "./AddTask.styles";

export const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e.key === "Enter" && value) {
      onClickAddTask();
    }
  };

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  const onClickAddTask = () => {
    if (value) {
      dispatch(
        actAddTask({
          id: nanoid(),
          content: value,
          date: new Date(Date.now()).toLocaleString("en-GB"),
        })
      );
      setValue("");
    }
  };

  return (
    <InputWrapper>
      <input
        placeholder="add new task"
        value={value}
        onChange={handleSetValue}
        onKeyDown={handleSubmit}
      />
      <button onClick={onClickAddTask}>Save</button>
    </InputWrapper>
  );
};
