import React from "react";
import { useStore } from "../store/zustandStore";
import { SET_FILTERTEXT } from "../store/CONSTANTS";

export const SearchTodo = () => {
  const dispatch = useStore((state) => state.dispatch);
  const searchBarValue = (e) => {
    const searchInput = e.target.value;
    dispatch({
      type: SET_FILTERTEXT,
      payload: searchInput,
    });
  };
  return (
    <input type="text" placeholder="search todo" onChange={searchBarValue} />
  );
};
