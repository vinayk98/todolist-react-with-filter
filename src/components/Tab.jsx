import React from "react";
import { useStore } from "../store/zustandStore";
import { SET_TABNAME } from "../store/CONSTANTS";

export const Tab = ({ name }) => {
  const dispatch = useStore((state) => state.dispatch);
  return (
    <div className="tabDiv">
      <button
        onClick={() => {
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
