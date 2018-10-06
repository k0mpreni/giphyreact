import React from 'react';
import { NavLink } from 'react-router-dom';
import './FavoritedBtn.css';

const Favorited = () => {
  return (
    <div className="FavoritedBtn">
      <NavLink to="/favorited" activeClassName="selected">
        Favorited
      </NavLink>
    </div>
  );
};

export default Favorited;
