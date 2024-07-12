import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Comparador from "./Pages/Comparador/Comparador";
<<<<<<< HEAD
import Contacto from "./Pages/Contacto/Contacto";
import Inicio from "./Pages/Inicio";
import SobreNosotros from "./Pages/SobreNosotros/SobreNosotros";
=======
import Catalogo from "./Components/Catalogo/Catalogo";
import "./App.css";

>>>>>>> 192086b82172419d165995dfe638652061c0fa67
/* import Catalogo from "./Pages/Catalogo";*/

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
<<<<<<< HEAD
        <Route path="/comparador" element={<Comparador />}></Route>
        <Route path="/sobreNosotros" element={<SobreNosotros />}></Route>
        {/*<Route path="/catalogo" element={<Catalogo />}></Route> */}
=======
        <Route path="/comparador/:id" element={<Comparador />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route>
        {/* <Route path="/AboutUs" element={<AboutUs />}></Route> */}
        {/* <Route path="/catalogo" element={<Catalogo />}></Route> */}
>>>>>>> 192086b82172419d165995dfe638652061c0fa67
      </Routes>
      {/*    <Comparador /> */}
    </BrowserRouter>
  );
}

export default App;
