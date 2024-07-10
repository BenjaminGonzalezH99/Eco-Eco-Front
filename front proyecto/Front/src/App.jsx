import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import Inicio from "./Pages/Inicio";
<<<<<<< HEAD
=======
import Contacto from "./Pages/Contacto/Contacto";
>>>>>>> ebbfea6bc719b8c9df43285af91e8cfd8c6507f3
import Comparador from "./Pages/Comparador/Comparador";
/* import Catalogo from "./Pages/Catalogo";
import AboutUs from "./Pages/AboutUs/AboutUs"; */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
<<<<<<< HEAD
      <Inicio />

      {/* <Comparador /> */}
    </>
=======
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/comparador" element={<Comparador />}></Route>
        {/* <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/catalogo" element={<Catalogo />}></Route> */}
      </Routes>
    </BrowserRouter>
>>>>>>> ebbfea6bc719b8c9df43285af91e8cfd8c6507f3
  );
}

export default App;
