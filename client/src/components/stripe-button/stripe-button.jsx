import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  //stripe support cents so we have to convert dollars into cents by *100
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H2AQVD9n7dr49aiFfF6eceTwjSgMqR9COXVzkum28mUmmbCRD4uwCvhkgYlJwKRlfscbL0jkVJT8IyOKBoLMBPN00f7bKbbig";

  const onToken = (token) => {
    // console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then(() => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
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
