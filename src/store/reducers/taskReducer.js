import { actionTypes } from "../action/actionTypes";

const { ADD_TASK, DELETE_TASK, COMPLETE_TASK, SAVE_EDITED } = actionTypes;

const initialState = {
  todo: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: action.payload.id,
        isActive: true,
        content: action.payload.content,
        date: action.payload.date,
      };
      return {
        ...state,
        todo: [...state.todo, newTask],
      };
    case DELETE_TASK:
      return {
        ...state,
        todo: [...state.todo.filter((task) => task.id !== action.payload)],
      };
    case COMPLETE_TASK:
      return {
        ...state,
        todo: [
          ...state.todo.map((task) =>
            task.id === action.payload
              ? {
                  ...task,
                  isActive: !task.isActive,
                }
              : task
          ),
        ],
      };
    case SAVE_EDITED:
      return {
        ...state,
        todo: [
          ...state.todo.map((task) =>
            task.id === action.payload.id
              ? {
                  ...task,
                  content: action.payload.content,
                }
              : task
          ),
        ],
      };
    default:
      return state;
  }
};
