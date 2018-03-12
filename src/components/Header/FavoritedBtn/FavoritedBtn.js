import React from "react";
import { NavLink } from "react-router-dom";
import "./FavoritedBtn.css";

const Favorited = ({ favClicked }) => {
  return (
    
      <button className="FavoritedBtn" onClick={favClicked}>
        <NavLink to="/favorited" activeClassName="selected">Favorited</NavLink>
      </button>
    
  );
};

export default Favorited;
