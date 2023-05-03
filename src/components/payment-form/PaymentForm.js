import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { CUSTOM_BUTTON_CLASSNAMES } from "../button/Button";
import { PaymentContainer, FormContainer } from "./PaymentForm.styles";
import { useState } from "react";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";


export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser)
  const [isProcessingPayement, setIsProcessingPayment] = useState(false)
  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({amount: amount * 100})
    }).then(res=> res.json());
    const { paymentIntent: {client_secret}} = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: user ? user.displayName: 'Guest',
            },
        },

    })
    setIsProcessingPayment(false)

    if(paymentResult.error) {
        alert('error' + paymentResult.error.message)
    } else {
        if(paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful')
        }
    }
  };
  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button variant={CUSTOM_BUTTON_CLASSNAMES.inverted} type="submit" isLoading={isProcessingPayement}>Pay Now</Button>
      </FormContainer>
    </PaymentContainer>
  );
};
