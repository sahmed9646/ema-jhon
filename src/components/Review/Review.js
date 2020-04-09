import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  const removeItem = (productKey) => {
    console.log("item clicked", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            removeItem={removeItem}
            product={pd}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart ct={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
