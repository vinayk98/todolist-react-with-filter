import React, { useContext } from "react";
import { TodoContext } from "../App";
export const CurrentTab = () => {
  const { tabName } = useContext(TodoContext);
  return (
    <div>
      <h6>CurrentTab :{tabName}</h6>
    </div>
  );
};
