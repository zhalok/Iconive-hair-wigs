/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import "./Trending.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import CurrencyContext from "../../Contexts/CurrencyContext";
import CollectionCard from "../Collections/CollectionCard";

export default function Trending() {
  const navigate = useNavigate();

  const [newArrivals, setNewArrivals] = useState([]);
  const { currency, setCurrency } = useContext(CurrencyContext);

  const getNewArrivals = async () => {
    try {
      const response = await axios.get("/filterProducts/newArrivals");
      console.log("Latest", response.data);
      setNewArrivals(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNewArrivals();
  }, []);

  return (
    <>
      <div className="container">
        <div className="w-100 mt-5 pb-3">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 mx-auto text-uppercase headingHover">
            New arrivals
          </h2>
          <p className="text-theme-gray text-18">
            Unlock the latest hair trends: Step up your style game with our top
            picks of trending wigs
          </p>
        </div>
        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto justify-content-center">
          {newArrivals.map((product, index) => {
            // console.log(product._id);
            return <CollectionCard productId={product._id} index={index} />;
          })}
        </div>
        <div className="mb-5 mt-4 d-flex flex-column text-center">
          <button
            onClick={() => {
              navigate("/catagory");
            }}
            className="btn text-theme-gray text-18"
          >
            View Shop
          </button>
          <KeyboardArrowDownIcon className="text-theme-gray m-auto mb-md-5" />
        </div>
      </div>
    </>
  );
}
