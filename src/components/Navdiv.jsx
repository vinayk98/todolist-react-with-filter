import React from "react";
import Tab from "./Tab";

export const Navdiv = ({ setTabName }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Tab name={"All"} setTabName={setTabName} />
      <Tab name={"Active"} setTabName={setTabName} />
      <Tab name={"Completed"} setTabName={setTabName} />
      <Tab name={"Filter"} setTabName={setTabName} />
    </nav>
  );
};

export default Navdiv;
