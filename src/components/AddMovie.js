import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import "/Users/hrithik/Desktop/react_playground/context-react/context-reactv1/src/bootstrap.min.css";

const AddMovie = () => {
  const [name, setName] = useState();
  const [id, setId] = useState(0);
  // eslint-disable-next-line
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setId(id+1)
    setMovies((prevMovies) => [{ name: name,id:id }, ...prevMovies]);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addMovie(e);
    }
  }

  return (
    <div className="container w-50">
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={updateName}
          className="form-control"
          placeholder="Enter task"
          aria-label="Enter task"
          aria-describedby="basic-addon2"
          onKeyDown={handleKeyPress}
          
        />
        <div className="input-group-append">
          <button className="btn bg-dark text-white" onClick={addMovie} type="button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
