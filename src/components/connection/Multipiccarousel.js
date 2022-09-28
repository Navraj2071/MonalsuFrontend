import "./Connection.css";

import React from "react";

const Multipiccarousel = (props) => {
  const imageArray = props.imageArray;
  return (
    <div className="multipiccarousel">
      <div className="outermostimg">
        <img src={imageArray[0]} alt="Monalsu" />
      </div>
      <div className="innerimg">
        <img src={imageArray[1]} alt="Monalsu" />
      </div>
      <div className="centerimg">
        <img src={imageArray[2]} alt="Monalsu" />
      </div>
      <div className="innerimg">
        <img src={imageArray[3]} alt="Monalsu" />
      </div>
      <div className="outermostimg">
        <img src={imageArray[4]} alt="Monalsu" />
      </div>
    </div>
  );
};

export default Multipiccarousel;
