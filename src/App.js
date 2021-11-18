import { useState } from "react";
import { SearchContext, MovieContext } from "./context/movieContext";

import MovieData from "./components/movieData/MovieData";
import Search from "./components/search/Search";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  const [searching, setSearching] = useState(false);

  async function handleSearchChange(inputValue) {
    setSearchValue(inputValue);
    let API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`
    );

    const data = await response.json();

    setResults(data.Search || []);
    setSearching(true);
  }

  function handleMovieSelected(movieSelected) {
    setMovieSelected(movieSelected);
    setSearching(false);
  }

  const searchContextValue = {
    handleMovieSelected,
    handleSearchChange,
    title: searchValue,
    results,
    searching,
  };

  return (
    <div className="App">
      <SearchContext.Provider value={searchContextValue}>
        <Search />
      </SearchContext.Provider>
      <MovieContext.Provider value={movieSelected}>
        <MovieData />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
