import { actionTypes } from "./actionTypes";

const {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  SAVE_EDITED,
  SHOW_ACTIVE,
  SHOW_DONE,
  SHOW_ALL,
  SET_FILTER,
} = actionTypes;
export const actCompleteTask = (id) => ({
  type: COMPLETE_TASK,
  payload: id,
});
export const actDeleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
export const actAddTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const actSaveEdited = (id, content) => ({
  type: SAVE_EDITED,
  payload: { id, content },
});
export const actFilterAll = () => ({
  type: SET_FILTER,
  payload: SHOW_ALL,
});
export const actFilterActive = () => ({
  type: SET_FILTER,
  payload: SHOW_ACTIVE,
});
export const actFilterDone = () => ({
  type: SET_FILTER,
  payload: SHOW_DONE,
});
