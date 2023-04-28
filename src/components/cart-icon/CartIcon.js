import React from "react";
import {CartIconContainer,ShoppingCartIcon,ItemCount} from "./CartIcon.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  
  const cartToggleHandler = () => {
 
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <CartIconContainer
      onClick={cartToggleHandler}
    >
      <ShoppingCartIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
