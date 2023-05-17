import React, { useEffect } from "react";
import axios from "../../utils/axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Accordion from "react-bootstrap/Accordion";
import Order from "./Order";

export default function OrderList({ orderList }) {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.get("/order/getAllByUser", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      // console.log(response.data);
      setOrders(response.data.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="orderlist">
      {orders.map((order, index) => {
        return (
          <div key={index}>
            <Order
              index={orders.length - index}
              order={order}
              setOrders={setOrders}
              getOrders={getOrders}
            />
          </div>
        );
      })}
    </div>
  );
}
