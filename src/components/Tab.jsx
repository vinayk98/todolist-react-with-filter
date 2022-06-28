import React, { useContext } from "react";
import { TodoContext } from "../App";
export const Tab = ({ name }) => {
  const { setTabName } = useContext(TodoContext);
  return (
    <div className="tabDiv">
      <button
        onClick={() => {
          setTabName(name);
        }}
        className="btns"
      >
        {name}
      </button>
    </div>
  );
};

export default Tab;
