import "./Cards.css";

function Cards({ producto }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="im">
          <img
            src={`src/Components/assets/${
              producto && producto.imagenProductoAlternativo
            }`}
            alt="razuradora"
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

export default Cards;
