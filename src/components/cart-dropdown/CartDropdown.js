import React, { useContext, useEffect, useRef } from "react";
import { CartContex } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const cartRef = useRef();
  //   const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContex);
  const { cartItems } = useContext(CartContex);

  //   useEffect(() => {
  //     const clickEvent = (event) => {
  //       if (
  //         isCartOpen &&
  //         cartRef.current && !cartRef.current.contains(event.target) && !/.*cart.+/.test(event.target.className.baseVal) && !/.*cart.+/.test(event.target.className)
  //       ) {
  //         setIsCartOpen(false);
  //       }
  //     };
  //     document.addEventListener("mousedown", clickEvent);

  //     return () => {
  //       document.removeEventListener("mousedown", clickEvent);
  //     };
  //   }, [isCartOpen, setIsCartOpen]);

  return (
    // <div className="cart-dropdown-container" ref={cartRef}>
    <div className="cart-dropdown-container">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <p>No Items in your Cart</p>
        </div>
      )}
      <Button>Check out</Button>
    </div>
  );
};

export default CartDropdown;
