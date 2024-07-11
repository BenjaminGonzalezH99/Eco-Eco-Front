import { useForm, ValidationError } from "@formspree/react";
import "./Contacto.css";
import logo_eco from "../../Components/assets/EcoEco_Chancho.png";
function Contacto() {
  const [state, handleSubmit] = useForm("mjkbkvoe");
  if (state.succeeded) {
    return <p>Gracias!</p>;
  }
  return (
    <>
      <main className="main-contact">
        <section className="container-1">
          <form className="form" onSubmit={handleSubmit}>
            <label className="label-contact" htmlFor="email">
              Nombre
            </label>
            <input
              className="input-contact"
              id="email"
              placeholder="Escribe Aquí"
            />

            <label className="label-contact" htmlFor="email">
              Correo
            </label>
            <input
              className="input-contact"
              id="email"
              type="email"
              name="email"
              placeholder="Escribe Aquí"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea className="message-contact" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="button-contact"
              type="submit"
              disabled={state.submitting}
            >
              Enviar
            </button>
          </form>
        </section>
        <figure className="container-2">
          <img src={logo_eco} alt="logo ecoeco" />
        </figure>
      </main>
    </>
  );
}
export default Contacto;
