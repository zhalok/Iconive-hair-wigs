/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import OrderHistoryItem from "../OrderHistory/OrderHistoryItem";

export default function OrderHistory() {
  const [collapase, setCollapse] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  const getOrderHistory = async () => {
    try {
      const response = await axios.get("/order/getOrderHistory", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      // console.log(response.data);
      setOrderHistory(response.data);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    getOrderHistory();
  }, []);

  return (
    <>
      {orderHistory.map((order, index) => (
        <OrderHistoryItem order={order} />
      ))}
    </>
  );
}
