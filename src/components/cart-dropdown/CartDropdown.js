import React, { useContext } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button, { CUSTOM_BUTTON_CLASSNAMES } from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {
  ButtonContainer,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyCartMessage,
} from "./CartDropdown.styles.js";

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
    <CartDropdownContainer
      // ref={cartRef}
      // onBlur={handleBlur}
      tabIndex="1"
    >
      {cartItems.length > 0 ? (
        <>
          <CartItemsContainer>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </CartItemsContainer>
          <ButtonContainer>
            {!matchUrlPattern ? (
              <Button onClick={goToChecoutHandler} variant="inverted">
                Check Out
              </Button>
            ) : (
              <Button
                variant={CUSTOM_BUTTON_CLASSNAMES.inverted}
                onClick={toggleCart}
              >
                Buy Now
              </Button>
            )}
          </ButtonContainer>
        </>
      ) : (
        <EmptyCartMessage>
          <p>No items in your Cart</p>
        </EmptyCartMessage>
      )}
      <Button onClick={toggleCart} variant={CUSTOM_BUTTON_CLASSNAMES.inverted}>
        Close
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
