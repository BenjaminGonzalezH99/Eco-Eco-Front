import "./Cards.css";

function Cards({ producto }) {
  return (
    <div className="cardContainer">
      <div>
        <div className="im">
          <img src="src/Components/assets/image.png" alt="razuradora" />
        </div>
        <div className="textContainer">
          <hr />
          <h2 className="titulo">
            {producto && producto.nombreProductoAlternativo}{" "}
          </h2>
          <b className="subtitulo">Desechable</b>
        </div>
      </div>
    </div>
  );
}

export default Cards;
