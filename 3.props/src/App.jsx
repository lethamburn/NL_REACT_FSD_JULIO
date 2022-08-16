import Image from "./components/Image";
import Title from "./components/Title";
import Card from "./components/Card";

const App = () => {
  const movies = ["Titanic", "Robocop", "Terminator"];

  return (
    <div>
      <Title text="Titulo" number="1" />
      <Title text="Subtitulo" number="25" />
      <Image
        source="https://randomwordgenerator.com/img/picture-generator/g5388a721d86dd886b7e30bae8b2f80be19d6a5c8d365f9ea22383b1dfb3c541e29ec3688ec511b9448f76b04820b9781_640.jpg"
        alternative="Semillas"
      />
      <Image
        source="https://randomwordgenerator.com/img/picture-generator/53e7d44b4a5aa514f1dc8460962e33791c3ad6e04e507749702c73d1924cc2_640.jpg"
        alternative="Paraguas"
      />
      {movies.map((movie) => <Card movieTitle={movie} key={movie}/>)}
    </div>
  );
};

export default App;
