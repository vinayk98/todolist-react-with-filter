import React from "react";

export const DeleteAll = ({ todos, setTodos }) => {
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
          setTodos(newItems);
        }}
      >
        Delete all
      </button>
    </div>
  );
};
