/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TopSelling.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
import axios from "../../utils/axios";
import currencyConverter from "../../utils/CurrencyChanger";
import CurrencyContext from "../../Contexts/CurrencyContext";
import AuthContext from "../../Contexts/AuthContext";
import CollectionCard from "../Collections/CollectionCard";

export default function TopSelling() {
  const navigate = useNavigate();

  const [mostSold, setMostSold] = useState([]);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { user, setUser } = useContext(AuthContext);

  const getMostSold = async () => {
    try {
      const response = await axios.get("/filterProducts/mostSold");
      console.log("Top Selling", response.data);
      setMostSold(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMostSold();
  }, []);

  return (
    <>
      <div className="container d-flex flex-column">
        <div className="w-100 pb-3 text-center ">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 text-center text-uppercase headingHover overflow-hidden">
            Our Best Selling wigs
          </h2>
          <p className="text-theme-gray text-18 	">
            Discover your unique look, Browse our selection of wigs for him and
            her
          </p>
        </div>

        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto justify-content-center ">
          {mostSold.map((product, index) => (
            <CollectionCard product={product} index={index} />
          ))}
        </div>
        <div className="my-5 d-flex flex-column text-center">
          <button
            onClick={() => {
              navigate("/catagory");
            }}
            className="btn text-theme-gray text-18"
          >
            View Shop
          </button>
          <KeyboardArrowDownIcon
            onClick={() => {
              navigate("/catagory");
            }}
            className="text-theme-gray m-auto mb-md-5"
          />
        </div>
      </div>
      {}
    </>
  );
}
