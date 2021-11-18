import React, { useContext } from "react";
import { MovieContext } from "../../context/movieContext";
import "./index.css";
function MetaData() {
  const { Poster, Title, Type, Year } = useContext(MovieContext);

  return (
    <div>
      <img src={Poster} alt="movie poster" />
      <h3 className="movie-Info">{Title}</h3>
      <div className="info-section">
        <label htmlFor="">Type</label>
        <span>{Type}</span>
      </div>
      <div className="info-section">
        <label htmlFor="">Year</label>
        <span>{Year}</span>
      </div>
    </div>
  );
}

export default MetaData;
