import { useState } from "react";
import "./App.css";
import { CV } from "./CV/CV";
import About from "./components/About";
import Friends from "./components/Friends";

function App() {
  //Destructuramos CV para tener independientemente friends y about
  const { about, friends } = CV;
  const [showAbout, setShowAbout] = useState(true);
  const [timeOfDay, setTimeOfDay] = useState("☀️");


  return (
    <div className="App">
      <h1>Ejemplo CV</h1>

      <button onClick={() => setShowAbout(true)}>Show About</button>
      <button onClick={() => setShowAbout(false)}>Show Friends</button>

      {showAbout ? (
        <About aboutInfo={about} />
      ) : (
        <Friends friendsInfo={friends} />
      )}
      <button onClick={() => setTimeOfDay("☀️")}>☀️</button>
      <button onClick={() => setTimeOfDay("🌙")}>🌙</button>
      <p>{timeOfDay === "☀️" ? "Buenos días" : "Buenas noches"}</p>
    </div>
  );
}

export default App;
