import React, { useState } from "react";
import { products } from "../../../data/productsMocks";

const ItemList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((item) => item.productId === product.id)) {
      const newCart = cart.map((item) => {
        if (item.productId === product.id) {
          const newQty = (item.qty += 1);
          return { ...item, qty: newQty, subTotal: product.price * newQty };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newItem = {
        productId: product.id,
        name: product.name,
        qty: 1,
        price: product.price,
        subTotal: product.price,
      };
      setCart([...cart, newItem]);
    }
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Productos</h1>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "2px solid blue",
              padding: "20px",
              width: "500px",
            }}
          >
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <p>{product.description}</p>
            <h6>{product.category}</h6>
            <img src={product.img} alt="" />
            <button onClick={() => addToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
