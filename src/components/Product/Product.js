import React from "react";
import "../Product/Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <img src={props.product.img} alt="" />
      </div>
      <div className="product-info">
        <h5 className="product-name">{props.product.name}</h5>
        <br />
        <p>
          <small>By : {props.product.seller}</small>
        </p>
        <br />
        <p>
          <b>Price : ${props.product.price}</b>
        </p>
        <br />
        <p>
          <small>
            Only <b>{props.product.stock}</b> pieces left in stock - Order Soon
          </small>
        </p>{" "}
        <br />
        <button
          className="add-button"
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
