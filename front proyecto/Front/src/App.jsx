import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./Pages/Inicio";
import Contacto from "./Pages/Contacto/Contacto";
import Comparador from "./Pages/Comparador/Comparador";
import Catalogo from "./Pages/Catalogo";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/comparador" element={<Comparador />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
