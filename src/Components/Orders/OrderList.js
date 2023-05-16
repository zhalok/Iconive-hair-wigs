import React from "react";

export default function OrderList({ orderList }) {
  return (
    <>
      {orderList.map((order, index) => {
        return <div key={index}></div>;
      })}
    </>
  );
}
