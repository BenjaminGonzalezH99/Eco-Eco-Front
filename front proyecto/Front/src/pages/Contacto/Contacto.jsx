import "./Contacto.css";
import logo1 from "../../Components/assets/EcoEco_Chancho.png";

function Contacto() {
  return (
    <>
      <main className="main-contact">
        <div className="container-1">
          <input className="input-contact" type="text" placeholder="Nombre" />
          <input className="input-contact" type="text" placeholder="Correo" />
          <input className="input-message" type="text" placeholder="Mensaje" />
          <button className="button-contact">Enviar</button>
        </div>
        <div className="container-2">
          <img src={logo1} alt="logo" />
        </div>
      </main>
    </>
  );
}

export default Contacto;
