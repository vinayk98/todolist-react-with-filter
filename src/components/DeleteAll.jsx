import React from "react";
import { useStore } from "../store/zustandStore";
import { SET_TODOS } from "../store/CONSTANTS";

export const DeleteAll = () => {
  const todos = useStore((state) => state.todos);
  const dispatch = useStore((state) => state.dispatch);
  return (
    <div>
      <button
        onClick={() => {
          const newItems = todos.filter((localItem) => {
            if (localItem.checked === true) {
              return false;
            }
            return true;
          });
          dispatch({
            type: SET_TODOS,
            payload: newItems,
          });
        }}
      >
        Delete all
      </button>
    </div>
  );
};
