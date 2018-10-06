import React from "react";
import { NavLink } from 'react-router-dom';
import "./Title.css";

const Title = () => (
    <h1 className="Title">
        <NavLink className="link" to="/">
            Gif or Gif
        </NavLink>
    </h1>
);

export default Title;
