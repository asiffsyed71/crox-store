import React, { useContext } from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, totalQuantity } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setIsCartOpen((isCartOpenState) => !isCartOpenState);
      }}
    >
      <ShoppingBagIcon className="shopping-cart-icon" />
      <span className="cart-item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
