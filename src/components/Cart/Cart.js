import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  //const totalPrice = cart.reduce((total, prd) => total + prd.price);
  //const total = cart.reduce((total, prd) => total + prd.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  }
  if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = total / 10;
  const totalPrice = total + shipping + tax;
  return (
    <div>
      <div className="cart-body">
        <h4>Order Summary</h4>
        <p>Items Ordered : {cart.length}</p>
        <p>
          <small>Shipping Cost : ${shipping.toFixed(2)}</small>
        </p>
        <p>
          <small>Tax + VAT : ${tax.toFixed(2)}</small>
        </p>
        <p className="total-price">Total Price : ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
