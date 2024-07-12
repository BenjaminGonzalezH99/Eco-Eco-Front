import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Comparador from "./Pages/Comparador/Comparador";
import Contacto from "./Pages/Contacto/Contacto";
import Inicio from "./Pages/Inicio";
import SobreNosotros from "./Pages/SobreNosotros/SobreNosotros";
/* import Catalogo from "./Pages/Catalogo";*/

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/comparador" element={<Comparador />}></Route>
        <Route path="/sobreNosotros" element={<SobreNosotros />}></Route>
        {/*<Route path="/catalogo" element={<Catalogo />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
