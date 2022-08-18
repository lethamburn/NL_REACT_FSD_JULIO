import { useState } from "react";
import { SWContextProvider } from "./context/context";
import "./App.css";
import Characters from "./components/Characters";
import Planets from "./components/Planets";
import Movies from "./components/Movies";
import LoginLogout from "./components/LoginLogout";

function App() {
  const [showCharacters, setShowCharacters] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const [showPlanets, setShowPlanets] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() =>
          setShowCharacters(true) & setShowMovies(false) & setShowPlanets(false)
        }
      >
        Characters
      </button>
      <button
        onClick={() =>
          setShowCharacters(false) & setShowMovies(true) & setShowPlanets(false)
        }
      >
        Movies
      </button>
      <button
        onClick={() =>
          setShowCharacters(false) & setShowMovies(false) & setShowPlanets(true)
        }
      >
        Planets
      </button>
      <SWContextProvider>
        <LoginLogout />
        {showCharacters ? <Characters /> : ""}
        {showMovies ? <Movies /> : ""}
        {showPlanets ? <Planets /> : ""}
      </SWContextProvider>
    </div>
  );
}

export default App;
