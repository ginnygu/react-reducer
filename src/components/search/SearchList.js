import React, { useContext } from "react";
import { SearchContext } from "../../context/movieContext";
import "./index.css";
function SearchList() {
  const { results, handleMovieSelected } = useContext(SearchContext);

  function showMovieList() {
    return results.map((item, index) => {
      return (
        <li key={index} onClick={() => handleMovieSelected(item)}>
          <img src={item.Poster} alt="movie poster" />
          {item.Title}
        </li>
      );
    });
  }

  return <div className="results">{showMovieList()}</div>;
}

export default SearchList;
