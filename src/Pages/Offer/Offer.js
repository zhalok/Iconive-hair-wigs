/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import Subscription from "../../Components/Subscription/Subscription";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import CurrencyContext from "../../Contexts/CurrencyContext";
import CollectionCard from "../../.././src/Components/Collections/CollectionCard";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./Offer.css";
import Offers from "../../Components/Offers/Offers";
import StockProducts from "../../Components/Offers/StockProducts";

export default function Offer() {
  const navigate = useNavigate();
  const [collapase, setCollapse] = useState(false);
  const [newArrivals, setNewArrivals] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const { currency, setCurrency } = useContext(CurrencyContext);

  const getNewArrivals = async () => {
    try {
      const response = await axios.get("/filterProducts/offers");
      console.log("Latest", response.data);
      setNewArrivals(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNewArrivals();
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    setProductsToShow(newArrivals.slice(0, 3));
  }, [newArrivals]);

  return (
    <div className="w-100">
      <StockProducts />
      <Offers />

      <Subscription />
    </div>
  );
}
