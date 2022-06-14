import React, { useContext } from "react";

import "/Users/hrithik/Desktop/react_playground/context-react/context-reactv1/src/bootstrap.min.css";
import { MovieContext } from "./MovieContext";

export default function Nav() {
  // eslint-disable-next-line
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="">
      <nav className="navbar navbar-light bg-dark ">
        <h5 className="navbar-brand text-white"> To do application</h5>
        <h5 className="navbar-item text-white">
          Tasks added: {movies.length}
        </h5>
      </nav>
    </div>
  );
}
