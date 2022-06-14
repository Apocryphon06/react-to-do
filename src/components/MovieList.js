// eslint-disable-next-line
import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import "/Users/hrithik/Desktop/react_playground/context-react/context-reactv1/src/bootstrap.min.css";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="container w-25">
      {movies.map((movie) => (
        <Movie name={movie.name} id={movie.id}>
          <button className="btn btn-outline-secondary float-right">x</button>
        </Movie>
      ))}
    </div>
  );
};

export default MovieList;
