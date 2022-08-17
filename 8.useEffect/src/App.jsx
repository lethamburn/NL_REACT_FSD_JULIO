import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [name, setName] = useState("Peter");

  //El efecto secundario que va a tener el renderizado, en este caso, del componente App
  const sayHello = () => {
    console.log("Hello");
  };

  useEffect(() => {
    //El efecto secundario de renderizar App va a ser setear name a "Paco" y ejecutar la función sayHello
    setName("Paco");
    sayHello();
  }, []);

  //Esto es el array de dependencias, dependiendo de lo que haya aqui dentro se volverá a ejecutar el useEffect

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={() => setName("Pepito")}>Change name</button>
    </div>
  );
}

export default App;
