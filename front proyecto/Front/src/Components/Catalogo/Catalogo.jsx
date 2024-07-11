import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../NavBar/NavBar';

const Catalogo = () => {
  return (
    <><div className="content">
        <h1>Catálogo</h1>
        <p>FILTROS</p>
        <div className="container">
          <div className="card">
            <img src="rasuradora.jpg" alt="Rasuradora Desechable" />
            <h2>Rasuradora</h2>
            <p>Desechable</p>
          </div>

          <div className="card">
            <img src="toalla.jpg" alt="Toalla Higiénica Reutilizable" />
            <h2>Toalla Higiénica</h2>
            <p>Reutilizable</p>
          </div>

          <div className="card">
            <img src="rasuradora.jpg" alt="Rasuradora Intercambiable" />
            <h2>Rasuradora</h2>
            <p>Intercambiable</p>
          </div>

          <div className="card">
            <img src="mat-horno.jpg" alt="Mat De Horno De Silicona" />
            <h2>Mat De Horno</h2>
            <p>De Silicona</p>
          </div>

          <div className="card">
            <img src="toalla.jpg" alt="Toalla Higiénica Reutilizable" />
            <h2>Toalla Higiénica</h2>
            <p>Reutilizable</p>
          </div>

          <div className="card">
            <img src="mat-horno.jpg" alt="Mat De Horno De Silicona" />
            <h2>Mat De Horno</h2>
            <p>De Silicona</p>
          </div>
        </div>
      </div></>
  );
};

export default Catalogo;