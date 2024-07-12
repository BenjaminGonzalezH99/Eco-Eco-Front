import "./CardsPA.css";
import { useNavigate } from "react-router-dom";

function CardsPA({ producto }) {
  const navigate = useNavigate();
  const handleDivClick = () => {
    navigate(`/comparador/${producto.idProductoAlternativo}`);
  };
  return (
    <div className="cardContainer" onClick={handleDivClick}>
      <div className="card">
        <div className="im">
          <img
            src={`src/Components/assets/${
              producto && producto.imagenProductoAlternativo
            }`}
            /* alt="razuradora" */
          />
        </div>
        <hr />
        <div className="textContainer">
          <h2 className="titulo">
            {producto && producto.nombreProductoAlternativo}{" "}
          </h2>
          {/* <b className="subtitulo">Desechable</b> */}
        </div>
      </div>
    </div>
  );
}

export default CardsPA;
