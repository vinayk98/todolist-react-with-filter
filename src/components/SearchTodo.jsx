import React from "react";

export const SearchTodo = ({ setFilterText }) => {
  const searchBarValue = (e) => {
    const searchInput = e.target.value;
    setFilterText(searchInput);
  };
  return (
    <input type="text" placeholder="search todo" onChange={searchBarValue} />
  );
};
