import React from "react";
import { Link } from 'react-router-dom';
import "./Title.css";

const Title = () => (
    <h1 className="Title">
        <Link className="link" to="/">
            Gif or Gif
        </Link>
    </h1>
);

export default Title;
