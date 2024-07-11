import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import "./Comparador.css";
import axios from "axios";

const url = "http://localhost:8080/productoOriginales";
function Comparador() {
  const [product1, setProduct1] = useState({});
  const [product2, setProduct2] = useState({});

  useEffect(() => {
    axios.get(`${url}/buscar/5`).then((response) => {
      setProduct1(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${url}/buscar/6`).then((response) => {
      setProduct2(response.data);
    });
  }, []);
  const costoPorUsoOriginal =
    product1.precioProductoOriginal / product1.precioProductoOriginal;
  const costoPorUsoAlternativo =
    product2.precioProductoAlternativo / product2.precioProductoAlternativo;
  return (
    <>
      <div className="container">
        <div className="div1 DIV">
          <Cards />
        </div>

        <div className="div2 DIV">
          <Cards />
        </div>

        <div className="costoUso DIV div-borde">
          <div className="costoUso-datos div-izquierda">
            {costoPorUsoOriginal}
          </div>
          <div className="costoUso-datos DIV-centro">COSTO POR USO </div>
          <div className="costoUso-datos div-derecha">
            {costoPorUsoAlternativo}
          </div>
        </div>
        <div className="div5 DIV">
          <div className="div-precio div-borde">
            <div className="precio div-izquierda">
              {product1 && product1.precioProductoOriginal
                ? product1.precioProductoOriginal
                : "No disponible"}
            </div>
            <div className="precio DIV-centro">PRECIO</div>
            <div className="precio div-derecha">
              {product2 && product2.ProductoAlternativo
                ? product2.ProductoAlternativo
                : "No disponible"}
            </div>
          </div>

          <div className="div-durabilidad div-borde">
            <div className="durabilidad div-izquierda">
              {product1 && product1.durabilidadProductoOriginal
                ? product1.durabilidadProductoOriginal
                : "No disponible"}
            </div>
            <div className="durabilidad DIV-centro">DURABILIDAD</div>
            <div className="durabilidad div-derecha">
              {product2 && product2.durabilidadProductoAlternativo
                ? product2.durabilidadProductoAlternativo
                : "No disponible"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comparador;
