import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/componentA";

function App() {
  /* Creating an object called contactprueba. */
  const contactprueba = {
    nombre: "Diego",
    apellido: "Vistoso",
    email: "diego@example.com",
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Passing the contactprueba object to the ComponentA component. */}
        <ComponentA contact={contactprueba} />
      </header>
    </div>
  );
}

export default App;
