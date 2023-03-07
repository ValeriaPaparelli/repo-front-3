import { useState } from "react";

const Select = () => {
  const [color, setColor] = useState("");
  const [talle, setTalle] = useState(0);

  const colores = ["crimson", "yellow", "steelblue", "green"];
  const talles = [37, 38, 39, 40];

  const hadleSubmit = (e) => {
    e.preventDefault;

    const data = {
      name: "Nike",
      price: 200,
      quantity: 1,
      color,
      talle,
    };

    //Pegarle al Endpoint
    console.log(data);
    alert("Gracias por su compra");
  };

  return (
    <div>
      <form onSubmit={hadleSubmit}>
        <select
          style={{
            width: "350px",
            heigth: "30px",
            fontSize: "0.9 rem",
          }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="" disabled default>
            Seleccione un color
          </option>{" "}
          {colores.map((color) => (
            <option value={color} key={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          style={{
            width: "350px",
            heigth: "30px",
            fontSize: "0.9 rem",
          }}
          value={talle}
          onChange={(e) => setTalle(e.target.value)}
        >
          <option value={talle} default disabled>
            Seleccionar Talle
          </option>
          {talles.map((talle) => (
            <option value={talle} key={talle}>
              {talle}
            </option>
          ))}
        </select>
        <button type="submit">Comprar</button>
      </form>
      <div
        style={{
          width: "500px",
          height: "300px",
          border: "2px solid white",
          backgroundColor: color,
        }}
      >
        <h2>El talle seleccionado es : {talle}</h2>
      </div>
    </div>
  );
};

export default Select;
