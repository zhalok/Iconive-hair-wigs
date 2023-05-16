import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import axios from "../../utils/axios";

export default function Order({ orderId, index }) {
  const [order, setOrder] = useState({});
  const getOrder = async () => {
    try {
      const response = await axios.get(`/order/getOne/${orderId}`);
    } catch (e) {}
  };
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Order: #{index}</Accordion.Header>
      <Accordion.Body>Total Price: {}</Accordion.Body>
    </Accordion.Item>
  );
}
