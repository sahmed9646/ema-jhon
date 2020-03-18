import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = product => {
    setCart([...cart, product]);
  };
  const handleRemoveProduct = product => {
    setCart([...(cart - 1), product]);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map(pd => (
          <Product
            product={pd}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart ct={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
