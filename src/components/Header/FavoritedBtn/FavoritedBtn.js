import React from 'react';
import { NavLink } from 'react-router-dom';
import './FavoritedBtn.css';

const Favorited = () => {
  return (
    <button className="FavoritedBtn">
      <NavLink to="/favorited" activeClassName="selected">
        Favorited
      </NavLink>
    </button>
  );
};

export default Favorited;
