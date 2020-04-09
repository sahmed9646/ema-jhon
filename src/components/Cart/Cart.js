import React from "react";

const Cart = (props) => {
  //   let price = 0;
  //   for (let i = 0; i < props.ct.length; i++) {
  //     const element = props.ct[i];
  //     price = price + element.price;
  //   }
  // or we can write following
  const total = props.ct.reduce(
    (total, pd) => total + pd.price * pd.quantity,
    0
  );
  //============//

  let shipmentCost = 0;
  if (total > 35) {
    shipmentCost = 0;
  } else if (total > 15) {
    shipmentCost = 5;
  }

  const formatNumber = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };
  const taxCost = formatNumber(total / 10);
  const grandTotal = formatNumber(total + shipmentCost + taxCost);
  return (
    <div>
      <h3>Order Summery</h3>
      <h5>Product Ordered : {props.ct.length}</h5>
      <h5>Product Price : ${formatNumber(total)}</h5>
      <p>
        <small>Shipping cost : ${formatNumber(shipmentCost)}</small>
      </p>
      <p>
        <small>Tax(10%) : ${taxCost}</small>
      </p>
      <h5>Total Price : ${grandTotal}</h5>
      <br />
      <a href="/review">
        <button className="main-button">Review Order</button>
      </a>
    </div>
  );
};

export default Cart;
