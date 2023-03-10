import React, { useContext } from "react";
import Button, {CUSTOM_BUTTON_CLASSNAMES} from "../button/Button";
import "./ProductCard.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="info">
        <span className="description">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button variant={CUSTOM_BUTTON_CLASSNAMES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
