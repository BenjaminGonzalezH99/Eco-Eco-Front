import { useState } from "react";

function Slider({ imagenes, children }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;
  if (Array.isArray(imagenes) || cantidad === 0) return;
  const siguiente = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anterior = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  return (
    <>
      <div className="slider-container">
        <button className="button" onClick={anterior}>
          izquierda
        </button>
        {imagenes.map((imagen, index) => {
          return (
            <div className={imagenActual === index ? "slide active" : "slide"}>
              {imagenActual === index && (
                <img key={index} src={imagen} alt="imagen" />
              )}
            </div>
          );
        })}
        <button className="button" onClick={siguiente}>
          derecha
        </button>
      </div>
    </>
  );
}

export default Slider;
