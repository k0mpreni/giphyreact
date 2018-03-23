import React from "react";
import "./Results.css";

import Result from "./Result";
import ResultsNumber from './ResultsNumber';

const Results = ({ resultType, favorites, searchResults, toggleFavorites }) => {
  const favoriteIndexes = favorites.map(fav => fav.id);
  const gifs = resultType === "favorites" ? favorites : searchResults;

  if (!gifs) {
    return <div>Search a gif !</div>;
  }

  return (
    <div className="Results">
      {gifs.map(gif => (
        <Result
          key={gif.id}
          gifInfo={gif}
          onToggleFavorite={toggleFavorites}
          favorited={favoriteIndexes.indexOf(gif.id) !== -1}
        />
      ))}
    </div>
  );
};

export default Results;
