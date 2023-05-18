import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { Accordion } from "react-bootstrap";
import CurrencyContext from "../../Contexts/CurrencyContext";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";

export default function OrderItem({ orderItemId }) {
  const [orderItem, setOrderItem] = useState({});
  const { currency, setCurrency } = useContext(CurrencyContext);

  const getOrderItem = async () => {
    try {
      const response = await axios.get(`/orderItem/getOne/${orderItemId}`);
      console.log("orderItem", response.data);
      setOrderItem(response.data);
    } catch (e) {
      console.log();
    }
  };

  useEffect(() => {
    // getProduct();
    getOrderItem();
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
      <h2>Name: {orderItem?.product?.name}</h2>
      <div>Amount: {orderItem.amount}</div>
      <div>Color: {orderItem?.color?.name}</div>
      <div>
        Product Price:{" "}
        {currencyConverter(
          currency,
          discountCalculator(
            orderItem.product.price,
            orderItem.product.discount
          )
        )}{" "}
      </div>

      <div>
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Add Ons</Accordion.Header>
            <Accordion.Body>
              {orderItem?.addOns?.map((addOn, index) => {
                return (
                  <div key={index} style={{ marginTop: "10px" }}>
                    <div>Name: {addOn.name}</div>
                    <div>Value: {addOn.value}</div>
                    <div>
                      Price: {currencyConverter(currency, addOn.price)}{" "}
                      {currency}
                    </div>
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        Total Price: {currencyConverter(currency, orderItem.totalPrice)}{" "}
        {currency}
      </div>
    </div>
  );
}
