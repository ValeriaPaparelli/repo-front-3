import React from "react";
import Products from "../Products/Products";

const ProductList = () => {
  let type = "corporal";

  return (
    <>
      <Products type={type} />
    </>
  );
};

export default ProductList;
