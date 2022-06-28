import React from "react";

export const Tab = ({ name, setTabName }) => {
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
