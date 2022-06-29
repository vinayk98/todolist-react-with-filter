import React from "react";
import { useStore } from "../store/zustandStore";
export const CurrentTab = () => {
  const tabName = useStore((state) => state.tabName);
  return (
    <div>
      <h6>CurrentTab :{tabName}</h6>
    </div>
  );
};
