import Cards from "../Components/Cards/Cards";
import "./Inicio.css";
import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "http://localhost:8080/productoAlternativos/buscar/3",
});
function Inicio() {
  const [contador, setContador] = useState(1);
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    client.get().then((response) => {
      setProducto(response.data);
    });
  }, [contador]);

  return (
    /***/
    <>
    <Cards producto={producto} />
      <main>
        <div id="cssportal-grid" className="container">
          <div className="card-home" id="div1"><Cards /* producto={producto} */ /></div>
          <div className="card-home" id="div2"><Cards producto={producto} />Toallas higienicas</div>
          <div className="card-home" id="div3"><Cards producto={producto} />productoALT1</div>
          <div className="card-home" id="div4"><Cards producto={producto} />productoALT2</div>
          <div className="card-home" id="div5"><Cards producto={producto} />Más Productos</div>
          <div className="card-home" id="div6"><Cards producto={producto} /></div>
        </div>
        
      </main>
      <div>
      <Cards producto={producto} />
      </div>
      </>
  );
}

export default Inicio;
