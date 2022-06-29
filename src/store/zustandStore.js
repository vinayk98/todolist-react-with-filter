import create from "zustand";
import { SET_TABNAME, SET_TODOS, SET_FILTERTEXT, ADD_TODOS } from "./CONSTANTS";

const reducer = (prevState, action) => {
  switch (action.type) {
    case SET_TABNAME:
      return {
        ...prevState,
        tabName: action.payload,
      };
    case SET_FILTERTEXT:
      return {
        ...prevState,
        filterText: action.payload,
      };
    case ADD_TODOS:
      const newTodos = [...prevState.todos];
      newTodos.push(action.payload);
      return {
        ...prevState,
        todos: newTodos,
      };
    case SET_TODOS: {
      return {
        ...prevState,
        todos: action.payload,
      };
    }
    case `LOG_EVERYTHING`: {
      console.log(prevState);
      return prevState;
    }
    default:
      return prevState;
  }
};

export const useStore = create((set) => {
  return {
    tabName: "All",
    filterText: "",
    todos: [],
    dispatch: (args) => set((state) => reducer(state, args)),
  };
});
