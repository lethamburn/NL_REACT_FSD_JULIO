import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  const superheroes = ["Spiderman", "Iron Man", "Hulk"];
  const villains = ["Dr. Doom", "Thanos", "Galactus", "Yellowjacket"];
  const [showSuperheroes, setShowSuperheroes] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowSuperheroes(true)}>Show Superheroes</button>
      <button onClick={() => setShowSuperheroes(false)}>Show Villains</button>
      {showSuperheroes ? (
        <Gallery title="Superheroes" list={superheroes} />
      ) : (
        <Gallery title="Villains" list={villains} />
      )}
    </div>
  );
}

export default App;
