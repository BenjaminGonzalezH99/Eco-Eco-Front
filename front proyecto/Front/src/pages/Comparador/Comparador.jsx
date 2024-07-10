import "./Comparador.css";

function Comparador() {
  return (
    <>
      <div className="cssportal-grid">
        <div className="div1">div1</div>
        <div className="div2">div2</div>
        <div className="div3">
          <label>
            <input type="radio" name="periodo" value="dias" /> Días
          </label>
          <label>
            <input type="radio" name="periodo" value="semanas" /> Semanas
          </label>
          <label>
            <input type="radio" name="periodo" value="meses" /> Meses
          </label>
          <label>
            <input type="radio" name="periodo" value="años" /> Años
          </label>
        </div>
        <div className="div4">div4</div>
        <div className="div5">div5</div>
      </div>
    </>
  );
}

export default Comparador;
