import React from "react";
import Button from "../button/Button";
import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="info">
        <span className="description">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button variant="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
