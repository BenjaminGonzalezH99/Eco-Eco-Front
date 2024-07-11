import { useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/NavBar"; 
import Catalogo from "./Components/Catalogo/Catalogo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Catalogo />
      <Navbar />
    </>
  );
}

export default App;
