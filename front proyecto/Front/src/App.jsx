import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./Pages/Inicio";
import Contacto from "./Pages/Contacto/Contacto";
import Comparador from "./Pages/Comparador/Comparador";

/* import Catalogo from "./Pages/Catalogo";*/

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/comparador" element={<Comparador />}></Route>
        {/* <Route path="/AboutUs" element={<AboutUs />}></Route> */}
        {/* <Route path="/catalogo" element={<Catalogo />}></Route> */}
      </Routes>
      <Comparador />
    </BrowserRouter>
  );
}

export default App;
