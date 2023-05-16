import React, { useContext, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import CurrencyContext from "../../Contexts/CurrencyContext";
import currencyConverter from "../../utils/CurrencyChanger";
import OrderItem from "./OderItems";

export default function Order({ order, index }) {
  //   const [order, setOrder] = useState({});
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "30px",
            rowGap: "20px",
          }}
        >
          <div>Order #{index}</div>
          <div>
            Total Price: {currencyConverter(currency, order.payment_amount)}{" "}
            {currency}
          </div>
          <div>Payment: {order.payment_status}</div>
          <div>Status: {order.status}</div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        >
          {order?.orderItems?.map((orderItem, index) => {
            return <OrderItem index={index} orderItem={orderItem} />;
          })}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
