import React from "react";
import "./Card.css";

const Card = ({ userName }) => {
  return (
    <div className="container-card">
      <h2>¡ Felicitaciones {userName} !!!</h2>
      <h3>Tu registro ha sido exitoso</h3>
    </div>
  );
};

export default Card;
