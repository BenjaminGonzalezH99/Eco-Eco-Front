import React from "react";
import logo1 from "../../Components/assets/ecochancho.png";
import "./SobreNosotros.css";

function SobreNosotros() {
  return (
    <div className="Sobrenosotros">
      <div id="logo-central">
        <span className="circulo">
          <img src={logo1} alt="EcoEco Logo chancho" className="logo" />
        </span>
      </div>

      <div className="contenido-principal">
        <h1>Sobre Nosotros</h1>
        <p>
          ¿Sabías que Chile es el país que produce más basura en Sudamérica?
          ¿Será que podemos hacer algo al respecto, y además ahorrar en el
          proceso?
        </p>
        <p>
          El consumo desmedido provoca una contaminación y generación de
          desechos excesiva. Es normal que nos preguntemos. ¿Como puedo ayudar? 
          No es fácil estar siempre informade y ser conscientes del impacto
          ambiental que tendrán nuestras compras, a la vez que tratamos de
          cuidar nuestro bolsillo. Terminamos optando por lo más económicamente
          atractivo, aunque sea lo más contaminante y a la larga cueste caro de
          todas formas.  Queremos orientar a las personas para que puedan
          generar hábitos de consumo sostenibles. Es por eso que les presentamos
          EcoEco, una guía que te orientará en tus compras y te ayudará a tomar
          decisiones informadas. Una aplicación que busca empoderar al
          consumidor  Te entregaremos la información que necesitas para evaluar
          el impacto real del consumo de productos desechables, donde además
          podrás conocer las alternativas más sustentables que, a largo plazo,
          podrían resultar en un ahorro.   Nuestra app destaca porque orientamos
          a los usuarios en un tema de interés: el ahorro mediante el cuidado
          del medio ambiente.  Mediante la contribución de nuestros usuarios,
          seguiremos ampliando la variedad de productos y categorías a exhibir. 
          Fomentando el consumo responsable, creemos que lograremos un cambio. 
          Juntes podemos elegir un futuro más sostenible.   
        </p>
      </div>

      <div className="Seccion-equipo">
        <h2 className="equipo-desarrollador">Equipo Desarrollador</h2>
        <div className="Miembros-equipo">
          <div className="Miembro-equipo">
            <p className="integrante">Alen Leclerck</p>
          </div>
          <span id="puntito"></span>
          <div className="Miembro-equipo">
            <p className="integrante">Benjamin Gonzalez</p>
          </div>
          <span id="puntito"></span>
          <div className="Miembro-equipo">
            <p className="integrante">Gabriel Muñoz</p>
          </div>
          <span id="puntito"></span>
          <div className="Miembro-equipo">
            <p className="integrante">Kevin Velasquez</p>
          </div>
          <span id="puntito"></span>
          <div className="Miembro-equipo">
            <p className="integrante">So Vidal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
