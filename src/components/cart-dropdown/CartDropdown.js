import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  //   const cartRef = useRef();
  //   const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const { isCartOpen, cartItems, setIsCartOpen } = useContext(CartContext);
  const goToChecoutHandler = () => {
    if (isCartOpen) {
      setIsCartOpen((isCartOpenState) => !isCartOpenState);
    }
    navigate("/checkout");
  };

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
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <Button onClick={goToChecoutHandler}>Check out</Button>
        </>
      ) : (
        <div className="empty-message">
          <p>No items in your Cart</p>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
