import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

//Esta es la manera tradicional
/*   const getMovies = async () => {
    const data = await fetch("https://starwars-server.vercel.app/movies");
    const jsonData = await data.json();
    setMovieList(jsonData.data.movies);
  }; */

//Esta es con axios
const getMovies = async() => {
  const fetchResult = await axios.get("https://starwars-server.vercel.app/movies");
  setMovieList(fetchResult.data.data.movies);
}

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      {movieList.length > 0 ? (
        movieList.map((movie) => (
          <figure key={movie._id}>
            <h2>{movie.name}</h2>
            <img src={movie.poster} alt={movie.name} width="200px" />
          </figure>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;
