import { useEffect, useState } from "react";
import CardsPO from "../../Components/Cards/CardsPO";
import CardsPA from "../../Components/Cards/CardsPA";
import "./Comparador.css";
import axios from "axios";

const url = "http://localhost:8080/";
const client = axios.create({
  baseURL: "http://localhost:8080/",
});

function Comparador() {
  const [producto1, setProduct1] = useState({});
  const [producto2, setProduct2] = useState({});

  useEffect(() => {
    client.get(`${url}productoOriginales/buscar/2`).then((response1) => {
      setProduct1(response1.data);
    });
  }, []);

  useEffect(() => {
    client.get(`${url}productoAlternativos/buscar/3`).then((response2) => {
      setProduct2(response2.data);
    });
  }, []);

  const costoPorUsoOriginal = (
    producto1.precioProductoOriginal / producto1.durabilidadProductoOriginal
  ).toFixed(1);
  const costoPorUsoAlternativo = (
    producto2.precioProductoAlternativo /
    producto2.durabilidadProductoAlternativo
  ).toFixed(1);
  console.log(producto1);
  return (
    <>
      <div className="container">
        <div className="div1 DIV">
          <CardsPO producto={producto1} />
        </div>

        <div className="div2 DIV">
          <CardsPA producto={producto2} />
        </div>

        <div className="costoUso DIV div-borde">
          <div className="costoUso-datos div-izquierda">
            {costoPorUsoOriginal}
          </div>
          <div className="costoUso-datos DIV-centro">Costo Por Uso </div>
          <div className="costoUso-datos div-derecha">
            {costoPorUsoAlternativo}
          </div>
        </div>
        <div className="div5 DIV">
          <div className="div-precio div-borde">
            <div className="precio div-izquierda">
              {producto1.precioProductoOriginal}
            </div>
            <div className="precio DIV-centro">Precio</div>
            <div className="precio div-derecha">
              {producto2.precioProductoAlternativo}
            </div>
          </div>

          <div className="div-durabilidad div-borde">
            <div className="durabilidad div-izquierda">
              {producto1.durabilidadProductoOriginal}
            </div>
            <div className="durabilidad DIV-centro">Durabilidad</div>
            <div className="durabilidad div-derecha">
              {producto2.durabilidadProductoAlternativo}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comparador;
