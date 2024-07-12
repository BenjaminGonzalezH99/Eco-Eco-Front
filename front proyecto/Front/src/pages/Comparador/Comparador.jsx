import { useEffect, useState } from "react";
import CardsPA from "../../Components/Cards/CardsPA";
import CardsPO from "../../Components/Cards/CardsPO";
import "./Comparador.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const url = "http://localhost:8080/";
const client = axios.create({
  baseURL: "http://localhost:8080/",
});

function Comparador() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isOriginal, setIsOriginal] = useState(true);

  useEffect(() => {
    client.get(`${url}productoOriginales/buscar/${id}`).then((response) => {
      const productoOriginal = response.data;
      if (productoOriginal) {
        setIsOriginal(true);
        setProduct({ original: productoOriginal });
      } else {
        client
          .get(`${url}productoAlternativos/buscar/${id}`)
          .then((responseAlternativo) => {
            const productoAlternativo = responseAlternativo.data;
            setIsOriginal(false);
            setProduct({ alternativo: productoAlternativo });
          });
      }
    });
  }, [id]);

  if (!product.original && !product.alternativo) {
    return <div>Cargando...</div>;
  }

  let productoOriginal;
  let productoAlternativo;
  if (isOriginal) {
    productoOriginal = product.original;
    productoAlternativo = {};
  } else {
    productoAlternativo = product.alternativo;
    productoOriginal = {};
  }

  const costoPorUsoOriginal = (
    productoOriginal.precioProductoOriginal /
    productoOriginal.durabilidadProductoOriginal
  ).toFixed(1);
  const costoPorUsoAlternativo = (
    productoAlternativo.precioProductoAlternativo /
    productoAlternativo.durabilidadProductoAlternativo
  ).toFixed(1);

  return (
    <>
      <div className="container">
        <div className="div1 DIV">
          {isOriginal ? (
            <CardsPO producto={productoOriginal} />
          ) : (
            <CardsPA producto={productoAlternativo} />
          )}
        </div>

        <div className="div2 DIV">
          {isOriginal ? (
            <CardsPA producto={productoAlternativo} />
          ) : (
            <CardsPO producto={productoOriginal} />
          )}
        </div>

        <div className="costoUso DIV div-borde">
          <div className="costoUso-datos div-izquierda">
            {isOriginal ? costoPorUsoOriginal : costoPorUsoAlternativo}
          </div>
          <div className="costoUso-datos DIV-centro">COSTO POR USO </div>
          <div className="costoUso-datos div-derecha">
            {isOriginal ? costoPorUsoAlternativo : costoPorUsoOriginal}
          </div>
        </div>
        <div className="div5 DIV">
          <div className="div-precio div-borde">
            <div className="precio div-izquierda">
              {isOriginal
                ? productoOriginal.precioProductoOriginal
                : productoAlternativo.precioProductoAlternativo}
            </div>
            <div className="precio DIV-centro">PRECIO</div>
            <div className="precio div-derecha">
              {isOriginal
                ? productoAlternativo.precioProductoAlternativo
                : productoOriginal.precioProductoOriginal}
            </div>
          </div>

          <div className="div-durabilidad div-borde">
            <div className="durabilidad div-izquierda">
              {isOriginal
                ? productoOriginal.durabilidadProductoOriginal
                : productoAlternativo.durabilidadProductoAlternativo}
            </div>
            <div className="durabilidad DIV-centro">DURABILIDAD</div>
            <div className="durabilidad div-derecha">
              {isOriginal
                ? productoAlternativo.durabilidadProductoAlternativo
                : productoOriginal.durabilidadProductoOriginal}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comparador;
