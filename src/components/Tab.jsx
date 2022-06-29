import React from "react";
import { SET_TABNAME } from "../store/CONSTANTS";
import { useStore } from "../store/zustandStore";

export const Tab = ({ name }) => {
  const dispatch = useStore((state) => state.dispatch);
  return (
    <div className="tabDiv">
      <button
        onClick={() => {
          // setTabName(name);

          dispatch({
            type: SET_TABNAME,
            payload: name,
          });
        }}
        className="btns"
      >
        {name}
      </button>
    </div>
  );
};

export default Tab;
