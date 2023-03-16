import { useEffect, useState } from "react";

const Pizzeria = ({ tiempo }) => {
  const [title, setTitle] = useState("");

  const cancelar = () => {
    alert("El pedido fue cancelado");
    console.log("El componente fue desmontado");
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("El componente fue actualizado");
      setTitle("Pizzas");
    }, tiempo);
  }, []);

  return (
    <div>
      <h1>Su pedido</h1>
      <h3>{title}</h3>
      <button onClick={cancelar}>Cancelar</button>
    </div>
  );
};

export default Pizzeria;
