import "./CardsPO.css";
import { useNavigate } from "react-router-dom";
function CardsPO({ producto }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/comparador/${producto.idProductoOriginal}`);
  };
  console.log(producto);
  return (
    <div className="cardContainer" onClick={handleClick}>
      <div className="card">
        <div className="im">
          <img
            src={`src/Components/assets${
              producto && producto.imagenProductoOriginal
            }`}
            /* alt="razuradora" */
          />
        </div>
        <hr />
        <div className="textContainer">
          <h2 className="titulo">{producto.nombreProductoOriginal} </h2>
          {/* <b className="subtitulo">Desechable</b> */}
        </div>
      </div>
    </div>
  );
}

export default CardsPO;
