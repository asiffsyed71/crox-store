import React, { useContext } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const matchUrlPattern = useMatch("checkout");
  const { isCartOpen, cartItems, setIsCartOpen } = useContext(CartContext);
  // const cartRef = useRef();

  const toggleCart = () => {
    setIsCartOpen((isCartOpenState) => !isCartOpenState);
  };
  const goToChecoutHandler = () => {
    if (isCartOpen) {
      toggleCart();
    }
    navigate("/checkout");
  };
  // useEffect(() => {
  //   if (isCartOpen) {
  //     cartRef.current.focus();
  //   }
  // }, [isCartOpen]);

  // const handleBlur = (event) => {
  //   console.log(event)
  //   if (!event.currentTarget.contains(event.relatedTarget)) {
  //     toggleCart();
  //   }
  // };
  
  return (
    <div
      className="cart-dropdown-container"
      // ref={cartRef}
      // onBlur={handleBlur}
      tabIndex="1"
    >
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <div className="cart-buttons">
            {!matchUrlPattern ? (
              <Button onClick={goToChecoutHandler} variant="inverted">
                Check Out
              </Button>
            ) : (
              <Button variant="inverted" onClick={toggleCart}>
                Buy Now
              </Button>
            )}
            <Button onClick={toggleCart} variant="inverted">
              Close
            </Button>
          </div>
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
