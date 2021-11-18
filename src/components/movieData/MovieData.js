import React, { useContext } from "react";
import MetaData from "./MetaData";
import { MovieContext } from "../../context/movieContext";

function MovieData() {
  const movieSelected = useContext(MovieContext);

  return movieSelected ? <MetaData /> : <h2>Please select a movie</h2>;
}

export default MovieData;
