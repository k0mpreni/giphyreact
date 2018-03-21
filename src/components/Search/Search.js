import React from 'react';
import './Search.css';

const Search = ({ value, changeValue, getGifs, history }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set('q', value);
    history.push({
      pathname: '/search',
      search: searchParams.toString()
    });
    return getGifs(value);
  };
  return (
    <div className="Search">
      <div className="SearchBar">
        <form id="form" onSubmit={handleSubmit}>
          <button type="submit" className="SubmitBtn" />
          <input
            type="search"
            onChange={evt => changeValue(evt.target.value)}
            value={value}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
