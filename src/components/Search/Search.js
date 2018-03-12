import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = ({ onSubmit, onChange, value }) => (
  <div className="Search">
    <div className="SearchBar">
      <form action="" id="form" onSubmit={onSubmit}>
        <Link to={{ pathname: "/search/", search: `?q=${value}` }}>
          <button type="submit" className="SubmitBtn" />
        </Link>
        <input type="search" onChange={onChange} />
      </form>
    </div>
  </div>
);

export default Search;
