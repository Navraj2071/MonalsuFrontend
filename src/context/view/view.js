import React from "react";
import ViewContext from "./viewContext";
import { useState } from "react";

const View = (props) => {
  const [view, setView] = useState("work");
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {props.children}
    </ViewContext.Provider>
  );
};

export default View;
