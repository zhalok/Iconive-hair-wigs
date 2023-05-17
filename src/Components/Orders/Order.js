import React, { useContext, useEffect, useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import CurrencyContext from "../../Contexts/CurrencyContext";
import currencyConverter from "../../utils/CurrencyChanger";
import OrderItem from "./OderItems";
import Badge from "react-bootstrap/Badge";
import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";
import Cookies from "js-cookie";

const badgeMapping = {
  placed: "warning",
  pending: "warning",
  completed: "success",
  cancelled: "danger",
};

export default function Order({ order, index, setOrders, getOrders }) {
  const { currency, setCurrency } = useContext(CurrencyContext);
  const [loading, setLoading] = useState(false);
  const cancelOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/order/deleteOne/${order._id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });

      setLoading(false);
      getOrders();
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <div className="order">
      <div className="order-control">
        <div className="order-information">
          <div className="label">Order #{index}</div>
          <div>
            <span className="label"> Total Price:</span>{" "}
            {currencyConverter(currency, order.payment_amount)} {currency}
          </div>
          <div>
            {" "}
            <span className="label">Payment: </span>
            <Badge bg={badgeMapping[order?.payment_status?.toLowerCase()]}>
              {order.payment_status}
            </Badge>{" "}
          </div>
          <div>
            {" "}
            <span className="label">Status: </span>{" "}
            <Badge bg={badgeMapping[order?.status?.toLowerCase()]}>
              {order.status}
            </Badge>{" "}
          </div>
        </div>
        <div className="order-buttons">
          {loading ? (
            <PulseLoader />
          ) : (
            <Button variant="danger" onClick={cancelOrder}>
              Cancel Order
            </Button>
          )}
        </div>
      </div>

      <div className="orderitems">
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>See Items</Accordion.Header>
            <Accordion.Body>
              <div>
                {order?.orderItems?.map((orderItem, index) => {
                  return <OrderItem index={index} orderItem={orderItem} />;
                })}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
