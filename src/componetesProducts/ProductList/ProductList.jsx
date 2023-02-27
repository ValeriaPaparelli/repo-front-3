import React, { useState } from "react";
import Products from "../Products/Products";

const ProductList = () => {
  const [type, setType] = useState("facial");

  return (
    <>
      <Products type={type} />
    </>
  );
};

export default ProductList;
