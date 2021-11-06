import { actionTypes } from "../action/actionTypes";

const { SHOW_ALL, SET_FILTER } = actionTypes;

const initialState = { filter: SHOW_ALL };

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
