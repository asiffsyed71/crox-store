import React from "react";
import CheckoutItem from "../../components/checkou-item/CheckoutItem";
import "./Checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { PaymentForm } from "../../components/payment-form/PaymentForm";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">TOTAL: ${totalPrice}</div>
        </>
      ) : (
        <div className="empty-cart">
          <h2>No Items in your cart</h2>
        </div>
      )}
      <PaymentForm />
    </div>
  );
};

export default Checkout;
