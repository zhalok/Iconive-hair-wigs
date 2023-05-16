import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

export default function OrderItem({ orderItem }) {
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${orderItem.product}`);
      console.log("product", response.data);
      setProduct(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <h2>Name: {product.name}</h2>
      <div>Amount: {orderItem.amount}</div>
      <div></div>
    </div>
  );
}
