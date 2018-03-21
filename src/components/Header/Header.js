import React from "react";
import Title from "./Title";
import FavoritedBtn from "./FavoritedBtn";

import "./Header.css";

const header = () => {
  return (
    <div className="Header">      
      <Title />
      <FavoritedBtn/>
    </div>
  );
};

export default header;
