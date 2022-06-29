import create from "zustand";
import { SET_TABNAME, SET_TODOS, SET_FILTERTEXT, ADD_TODOS } from "./CONSTANTS";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TABNAME:
      return {
        ...state,
        tabName: action.payload,
      };
    case SET_FILTERTEXT:
      return {
        ...state,
        filterText: action.payload,
      };
    case ADD_TODOS:
      const newTodos = [...state.todos];
      newTodos.push(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    case SET_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case `LOG_EVERYTHING`: {
      console.log(state);
      return state;
    }
    default:
      return state;
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
