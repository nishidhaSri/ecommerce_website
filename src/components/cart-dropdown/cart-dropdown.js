import React from "react";

import CustomButton from "../custom-button/custom-button";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GTO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
