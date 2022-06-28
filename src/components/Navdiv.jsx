import React from "react";
import Tab from "./Tab";
export const Navdiv = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Tab name={"All"} />
      <Tab name={"Active"} />
      <Tab name={"Completed"} />
      <Tab name={"Filter"} />
    </nav>
  );
};

export default Navdiv;
