import "./App.css";
import "/Users/hrithik/Desktop/react_playground/context-react/context-reactv1/src/bootstrap.min.css";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";
import Movie from "./components/Movie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav></Nav>
        <br></br>
        <AddMovie></AddMovie>
        <br></br>

        <Movie></Movie>
      </div>
    </MovieProvider>
  );
}

export default App;
