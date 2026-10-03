import React from "react";
import Card from "./Card";
 import './cardcontainer.css'

const CardContainer = ({ products }) => {
  return (
    <div className="card-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardContainer;
