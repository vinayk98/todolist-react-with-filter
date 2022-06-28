import React, { useContext } from "react";
import { TodoContext } from "../App";

export const SearchTodo = () => {
  const { setFilterText } = useContext(TodoContext);
  const searchBarValue = (e) => {
    const searchInput = e.target.value;
    setFilterText(searchInput);
  };
  return (
    <input type="text" placeholder="search todo" onChange={searchBarValue} />
  );
};
