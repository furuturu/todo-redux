import React from "react";
import { FilterButtons } from "./Filter.styles";
import { useDispatch } from "react-redux";
import {
  actFilterActive,
  actFilterDone,
  actFilterAll,
} from "../../store/action/action";

export const Filter = () => {
  const dispatch = useDispatch();

  const showAll = () => {
    dispatch(actFilterAll());
  };

  const showActive = () => {
    dispatch(actFilterActive());
  };
  const showDone = () => {
    dispatch(actFilterDone());
  };

  return (
    <FilterButtons>
      <button onClick={showAll}>all</button>
      <button onClick={showActive}>open</button>
      <button onClick={showDone}>closed</button>
    </FilterButtons>
  );
};
