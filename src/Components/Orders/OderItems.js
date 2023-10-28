/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import { Accordion } from "react-bootstrap";
import CurrencyContext from "../../Contexts/CurrencyContext";
import currencyConverter from "../../utils/CurrencyChanger";
import "./OrderItems.css";
import { useNavigate } from "react-router-dom";

export default function OrderItem({ orderItemId }) {
  const [orderItem, setOrderItem] = useState({});
  const { currency, setCurrency } = useContext(CurrencyContext);
  const navigate = useNavigate();
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
    <div
      className="d-flex mb-3 w-100 flex-column flex-lg-row"
      style={{ cursor: "pointer" }}
      onClick={() => {
        navigate(`/productDetails/${orderItem?.product?._id}`);
      }}
    >
      <span className="my-auto pt-2 w-20p rounded-3 overflow-hidden ">
        <img
          src={orderItem?.product?.photo}
          alt="this is a picture"
          className="w-100 rounded-3"
        />
      </span>
      <div className="text-start w-60p ps-md-3  my-auto">
        <p className="text-18 mb-1">{orderItem?.product?.name}</p>
        <p className="text-theme-gray text-14 mb-0">
          {orderItem?.product?.description}
        </p>
      </div>
      <div className="text-md-end pt-4 pt-md-0 my-auto ms-md-auto w-20p ">
        <p className="text-18 fw-bold mb-2">
          {" "}
          {currency == "USD" ? "$" : "৳"}{" "}
          {currencyConverter(currency, orderItem.totalPrice)}{" "}
        </p>
        <p className="text-theme-gray text-14">QTY: {orderItem.amount}</p>
      </div>
    </div>
  );
}
