import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { img, category, name, price, seller, stock, key } = props.product;
  return (
    <div className="products">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h2>{category}</h2>
        <h3>
          <Link to={"/product/" + key}>{name}</Link>
        </h3>
        <p> By : {seller}</p>
        <p> ${price}</p>
        <p>
          <small>Only {stock} left in the stock- order now</small>
        </p>
        {props.showAddBtn && (
          <button
            onClick={() => props.handleAddProduct(props.product)}
            className="main-button"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
