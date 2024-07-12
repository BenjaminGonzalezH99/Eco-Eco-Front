import React from "react";
import CardsPO from "../Cards/CardsPO";
import CardsPA from "../Cards/CardsPA";
import ReactDOM from "react-dom";

const Catalogo = () => {
  return (
    <>
      {/*<CardsPO producto={product.data}*/}
      <main>
        <div className="TituloCatalogo">
          <h1>.</h1> 
          <p>Filtros</p>
          <h1>Catálogo</h1>
          <p>Filtros</p>
        </div>
        <section className="catalogoCard">
          <div className="">Card 1</div>
          <div className="">Card </div>
          <div className="">Card 1</div>
          <div className="">Card 2</div>
          <div className="">Card 1</div>
          <div className="">Card 2</div>
        </section>
      </main>
    </>
  );
};

export default Catalogo;
