import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Comparador from "./pages/Comparador/Comparador";
import Catalogo from "./Components/Catalogo/Catalogo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/comparador" element={<Comparador />} />
       {/*  <Route path="/AboutUs" element={<AboutUs />} /> */}
        <Route path="/Catalogo" element={<Catalogo />} />
      </Routes>
      <Comparador />
    </BrowserRouter>
  );
}

export default App;