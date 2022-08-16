import "./App.css";

function App() {
  const sayHello = () => {
    console.log("Hola, has pulsado el botón");
  };

  let x = 1;

  return (
    <div className="App">
      <button onClick={sayHello}>Click me!</button>
    </div>
  );
}

export default App;
