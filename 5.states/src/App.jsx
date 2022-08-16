import "./App.css";
import React, { useState } from "react";

function App() {
  //Las variables de estado constan de 3 partes:
  //1. la variable en si
  //2. la funcion seteadora con el mismo nombre que la variable precedida por un set
  //3. dentro del useState le asignaremos el valor inicial a la variable
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Antonio");

  return (
    <div className="App">
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(0)}>Reset</button>
      <hr />
      <p>{name}</p>
      <button onClick={() => name === "Antonio" ? setName("Alberto") : setName("Antonio")}>Cambio de profesor</button>
    </div>
  );
}

export default App;
