import "./App.css";
import PrimerComponente from "./components/PrimerComponente";
import SegundoComponente from "./components/SegundoComponente";
import TercerComponente from "./components/TercerComponente";
import { ExampleContextProvider } from "./context/context";

function App() {
  //Para utilizar un Provider, importamos el Provider y envolvemos a los componente que queramos que utilicen la información del contexto con su etiqueta
  return (
    <div className="App">
      <ExampleContextProvider>
        <PrimerComponente />
        <SegundoComponente />
        <TercerComponente />
      </ExampleContextProvider>
    </div>
  );
}

export default App;
