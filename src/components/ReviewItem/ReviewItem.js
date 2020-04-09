import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { name, quantity, key, price } = props.product;
  return (
    <div className="review-item">
      <h4> Product name : {name}</h4>
      <p> quantity : {quantity}</p>
      <p>
        <small>Price : ${price}</small>
      </p>
      <br />
      <a href="/review">
        <button className="main-button" onClick={() => props.removeItem(key)}>
          remove
        </button>
      </a>
    </div>
  );
};

export default ReviewItem;
