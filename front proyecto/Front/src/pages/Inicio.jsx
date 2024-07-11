import Cards from "../Components/Cards/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

const client = axios.create({
  baseURL: "http://localhost:8080/productoOriginales/buscar/3",
});
function Inicio() {
  const [contador, setContador] = useState(1);
  const [producto, setProducto] = useState(null);
  useEffect(() => {
    client.get().then((response) => {
      setProducto(response.data);
    });
  }, [contador]);

  return (
    <div>
      <Cards producto={producto} />
    </div>
  );
}

export default Inicio;
