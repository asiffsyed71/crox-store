import React, { useContext } from "react";
import {CartIconContainer,ShoppingCartIcon,ItemCount} from "./CartIcon.styles.js";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, totalQuantity } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={() => {
        setIsCartOpen((isCartOpenState) => !isCartOpenState);
      }}
    >
      <ShoppingCartIcon/>
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
