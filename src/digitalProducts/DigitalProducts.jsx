const productos = [
  {
    id: 1,
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    id: 2,
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    id: 3,
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    id: 4,
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

import React from "react";

const DigitalProducts = () => {
  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nome}</h2>
            <img src={producto.image} alt="" />
            <h3>{producto.preco}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DigitalProducts;
