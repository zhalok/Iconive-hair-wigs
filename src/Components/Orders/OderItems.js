import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { Accordion } from "react-bootstrap";
import CurrencyContext from "../../Contexts/CurrencyContext";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";

export default function OrderItem({ orderItemId }) {
  const [orderItem, setOrderItem] = useState({});
  const { currency, setCurrency } = useContext(CurrencyContext);
  // console.log("orderItem", orderItem);

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
    <div className="d-flex mb-3">
      <span className="my-auto w-90px rounded-3 overflow-hidden ">
        <img
          src={orderItem?.product?.photo}
          alt="this is a picture"
          className="w-100 rounded-3"
        />
      </span>
      <div className="text-start ps-3 my-auto">
        <p className="text-18 mb-1">SuperSkin - Ladies Blonde Wig</p>
        <p className="text-theme-gray text-14 mb-0">
          Women’s Thin Skin Hair System with 110% density and Knotless V-Looped
          hair at front
        </p>
      </div>
      <div className="text-end my-auto ms-auto">
        <p className="text-18 mb-2">
          {" "}
          {currency == "USD" ? "$" : "৳"}{" "}
          {currencyConverter(currency, orderItem.totalPrice)}{" "}
        </p>
        <p className="text-theme-gray text-14">QTY: {orderItem.amount}</p>
      </div>
    </div>
  );
}
