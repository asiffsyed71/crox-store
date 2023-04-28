import React from "react";
import Button, {CUSTOM_BUTTON_CLASSNAMES} from "../button/Button";
import "./ProductCard.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);


  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems,product))
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
