import { useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./Pages/Inicio";
import Comparador from "./Pages/Comparador/Comparador";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Inicio />

      {/* <Comparador /> */}
    </>
  );
}

export default App;
