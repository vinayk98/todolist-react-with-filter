import React from "react";
import { useStore } from "../store/zustandStore";
import { SET_FILTER_TEXT } from "../store/CONSTANTS";

export const SearchTodo = () => {
  const dispatch = useStore((state) => state.dispatch);
  const searchBarValue = (e) => {
    const searchInput = e.target.value;
    // setFilterText(searchInput);
    dispatch({
      type: SET_FILTER_TEXT,
      payload: searchInput,
    });
  };
  return (
    <input type="text" placeholder="search todo" onChange={searchBarValue} />
  );
};
