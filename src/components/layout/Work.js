import React from "react";
import "./Layout.css";
import WorkCard from "./WorkCard";
import Pagination from "./Pagination";
const Work = () => {
  return (
    <div className="workpage">
      <Pagination />
      <div className="workcardcontainer">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <Pagination />
    </div>
  );
};

export default Work;
