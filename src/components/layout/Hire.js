import React from "react";
import "./Layout.css";
import HireCard from "./HireCard";
import Pagination from "./Pagination";
const Hire = () => {
  return (
    <div className="workpage">
      <Pagination />
      <div className="workcardcontainer">
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
        <HireCard />
      </div>
      <Pagination />
    </div>
  );
};

export default Hire;
