import { createContext } from "react";

//Creamos el contexto almacenando la ejecución de createContext en una constante y exportándola. El nombre de este contexto vendrá dado según la temática de la aplicación web.
export const ExampleContext = createContext();

//Crear el proveedor del contexto con los datos a incluir en el contexto.
export const ExampleContextProvider = ({ children }) => {
  const name = "Neoland";

  const sayHello = () => {
    return "Hello"
  };

  //Retornamos una nueva etiqueta que es el proveedor del contexto y le indicamos que dentro de la etiqueta afecte a cualquier "children"
  return (
    <ExampleContext.Provider value={{ name, sayHello }}>
      {children}
    </ExampleContext.Provider>
  );
};
