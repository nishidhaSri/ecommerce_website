import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  //stripe support cents so we have to convert dollars into cents by *100
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H2AQVD9n7dr49aiFfF6eceTwjSgMqR9COXVzkum28mUmmbCRD4uwCvhkgYlJwKRlfscbL0jkVJT8IyOKBoLMBPN00f7bKbbig";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
