import { useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./pages/Inicio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Inicio />
    </>
  );
}

export default App;
