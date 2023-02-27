import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.img} alt="" />
      <h4>{product.aptoBebe ? "Es apto bebé" : "No es apto bebé"}</h4>
    </>
  );
};

export default ProductCard;
