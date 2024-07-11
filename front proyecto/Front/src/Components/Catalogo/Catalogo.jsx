import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';

const Catalogo = () => {
  return (
    <div className="catalogo">
      <h1>Catalogo</h1>
    <section class="catalogo">
      <h2>Rasuradoras<br>Desechable</h2>
      <ul>
        <li><h2>Rasuradoras<br>Intercambiable</h2></li>
        <li>Toallas Higiénicas <br>Desechable </li>
        <li>Toallas Higiénicas <br>Reutilizable </li>
        <li>Mat de Horno<br> De Silicona</li>
      </ul>
    </section>
    </div>
  );
};

export default Catalogo;