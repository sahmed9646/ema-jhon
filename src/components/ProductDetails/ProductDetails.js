import React from "react";
import fakeData from "../../fakeData";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find(pd => pd.key === productKey);
  return (
    <div>
      <Product showAddBtn={false} product={product}></Product>
    </div>
  );
};

export default ProductDetails;
