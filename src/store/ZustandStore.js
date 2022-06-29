import create from "zustand";

import { SET_TABNAME, SET_TODOS, SET_FILTER_TEXT, ADD_TODO } from "./CONSTANTS";

export const reducer = (prevState, action) => {
  switch (action.type) {
    case SET_TABNAME:
      console.log(action);
      return {
        ...prevState,
        tabName: action.payload,
      };

    case SET_TODOS:
      return {
        ...prevState,
        todos: action.payload,
      };
    case SET_FILTER_TEXT:
      return {
        ...prevState,
        filterText: action.payload,
      };
    case ADD_TODO:
      const new_todo = [...prevState.todos];
      new_todo.push(action.payload);
      return {
        ...prevState,
        todos: new_todo,
      };
  }
};

export const useStore = create((set) => {
  return {
    todos: [],
    tabName: "All",
    filterText: "",

    dispatch: (args) => set((state) => reducer(state, args)),
  };
});