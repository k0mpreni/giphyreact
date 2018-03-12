import React from "react";
import Title from "./Title";
import FavoritedBtn from "./FavoritedBtn";

import "./Header.css";

const header = ({ favClicked }) => {
  return (
    <div className="Header">      
      <Title />
      <FavoritedBtn favClicked={favClicked}/>
    </div>
  );
};

export default header;
