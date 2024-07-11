import Cards from "../../Components/Cards/Cards";
import "./Comparador.css";

function Comparador() {
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
          <div className="costoUso-datos div-izquierda">2511</div>
          <div className="costoUso-datos DIV-centro">COSTO POR USO </div>
          <div className="costoUso-datos div-derecha">25122</div>
        </div>
        <div className="div5 DIV">
          <div className="div-precio div-borde">
            <div className="precio div-izquierda">1615</div>
            <div className="precio DIV-centro">PRECIO</div>
            <div className="precio div-derecha">1513135</div>
          </div>

          <div className="div-durabilidad div-borde">
            <div className="durabilidad div-izquierda">35693</div>
            <div className="durabilidad DIV-centro">DURABILIDAD</div>
            <div className="durabilidad div-derecha">879397</div>
          </div>
        </div>

        {/* ----------- */}
      </div>
    </>
  );
}

export default Comparador;
