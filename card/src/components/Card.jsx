import React from "react";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="cart">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default Card;
