import { filterReducer } from "./filterReducer";
import { taskReducer } from "./taskReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  filterReducer,
  taskReducer,
});
