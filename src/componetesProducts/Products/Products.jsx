import React from "react";
import productsData from "../../data/productos-2.json";
import ProductCard from "../../products/components/ProductCard/ProductCard";

const Products = ({ type }) => {
  let products = productsData.data.filter(
    (product) => product.categoria === type
  );

  return (
    <>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </>
  );
};

export default Products;
