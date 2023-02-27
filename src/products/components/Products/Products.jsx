import React from "react";

const Products = ({ type }) => {
  let typeOfProduct = productos.json[type];

  return (
    <>
      {typeOfProduct.map((producto) => {
        <h1>{producto.name}</h1>;
      })}
    </>
  );
};

export default Products;
