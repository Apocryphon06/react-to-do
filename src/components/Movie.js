import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "/Users/hrithik/Desktop/react_playground/context-react/context-reactv1/src/bootstrap.min.css";
export default function Movie(props) {
  const [movies, setMovies] = useContext(MovieContext);
  // const removeItem = () => {

  //   console.log(movies.shift())

  //   setMovies(movies)
  // }

  function handleDeleteClick(id) {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = movies.filter((item) => {
      // return the rest of the todos that don't match the item we are deleting
      return item.id !== id;
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setMovies(removeItem);
  }

  return (
    <div className="container w-50">
      <ul className="list-group">
        {movies.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name}
            <button
              className="btn btn-outline-secondary float-right"
              onClick={() => handleDeleteClick(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
