import "./App.css";
import Button from "./components/Button/Button";
import Title from "./components/Title/Title";

function App() {
  const textoButtonAnterior = "ANTERIOR";
  const textoButtonSiguiente = "SIGUIENTE";
  const textTitle = "Paso 1";

  return (
    <>
      <Title text={textTitle} />
      <Button text={textoButtonAnterior} />
      <Button text={textoButtonSiguiente} />
    </>
  );
}

export default App;
