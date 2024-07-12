import CardsPA from "../Components/Cards/CardsPA/CardsPA";
import CardsPO from "../Components/Cards/CardsPO/CardsPO";
import "./Inicio.css";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:8080/";
const client = axios.create({
  baseURL: "http://localhost:8080/",
});

const fetchProduct = (endpoint, id) => {
  return client.get(`${url}${endpoint}/buscar/${id}`);
};

function Inicio() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endpoints = [
      "productoOriginales",
      "productoAlternativos",
      "productoAlternativos",
      "productoAlternativos",
      "productoAlternativos",
      "productoOriginales",
    ];
    const ids = [2, 3, 5, 1, 9, 1];

    const promises = endpoints.map((endpoint, index) => {
      return fetchProduct(endpoint, ids[index]);
    });

    Promise.all(promises).then((responses) => {
      const products = responses.map((response, index) => ({
        data: response.data,
        isOriginal: endpoints[index] === "productoOriginales",
      }));
      setProducts(products);
    });
  }, []);
  console.log(products);
  return (
    <main>
      <div id="cssportal-grid" className="container">
        {products.map((product, index) => (
          <div
            key={index}
            className={`card-home ${index > 0 && index < 5 ? "pequeño" : ""}`}
            id={`div${index + 1}`}
          >
            {product.isOriginal ? (
              <CardsPO producto={product.data} />
            ) : (
              <CardsPA producto={product.data} />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Inicio;
