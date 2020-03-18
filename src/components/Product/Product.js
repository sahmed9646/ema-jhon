import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = props => {
  console.log(props.product);
  const { img, category, name, price, seller, stock } = props.product;
  return (
    <div className="products">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h2>{category}</h2>
        <h3>{name}</h3>
        <p> By : {seller}</p>
        <p> ${price}</p>
        <p>
          <small>Only {stock} left in the stock- order now</small>
        </p>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="btnAddCart"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
