import React,{useState,createContext} from 'react'

export const MovieContext = createContext();


export const MovieProvider = (props) =>{
  
    const [movies, setMovies] = useState([
        {
          name: "Add any task",
          
        },
      ]);

      return(
        <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
        </MovieContext.Provider>
      );

}