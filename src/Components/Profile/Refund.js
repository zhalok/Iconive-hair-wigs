/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import invoice from ".././Images/profile/order/invoice.svg";
import bluetick from ".././Images/profile/OrderHistory/blueTick.svg";
import pickback from ".././Images/profile/pickback.svg";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import RefundOrder from "../Refund/RefundOrder";
export default function Refund() {
  const [cancelledOrders, setCancelledOrders] = useState([]);

  const getCancelledOrders = async () => {
    try {
      const response = await axios.get("/order/getCancelledOrders", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      const data = response.data;
      console.log("cancelled Orders", data);
      setCancelledOrders(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCancelledOrders();
  }, []);

  return (
    <div>
      {cancelledOrders.map((order) => {
        return <RefundOrder order={order} />;
      })}
    </div>
  );
}
