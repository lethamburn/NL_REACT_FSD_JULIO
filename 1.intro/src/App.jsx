import "./App.css";

const App = () => {
  const title = "Welcome to Vite + React";

  const saludo = () => {
    return "Hola";
  };

  const alimentos = ["tomate", "lechuga", "pepino"];

  const isRendered = true;

  return (
    <section className="App">
      <h1>{title}</h1>
      <p>{saludo()}</p>
      {alimentos.map((alimento) => (
        <p>Este es un {alimento}</p>
      ))}
      <h4>{isRendered ? "Soy true" : "Soy false"}</h4>
    </section>
  );
};

export default App;

//1. Mi HTML irá dentro de return de la función de mi componente funcional
//2. Todo el contenido del retorno tiene que ir wrappeado en una misma etiqueta
//3. Si sintácticamente no queremos usar React Fragment <> </>
//4. Todo mi código JS va a ir antes del retorno
//5. Para ejecutar JS voy a usar las curly brackets o llaves
