/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import "./Trending.css";
import card2 from "../Images/card/Mask2.svg";
import cardicon1 from "../Images/card/cardicon1.svg";
import cardicon2 from "../Images/card/cardicon2.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import CurrencyContext from "../../Contexts/CurrencyContext";
import currencyConverter from "../../utils/CurrencyChanger";

export default function Trending() {
  const navigate = useNavigate();

  const [newArrivals, setNewArrivals] = useState([]);
  const { currency, setCurrency } = useContext(CurrencyContext);

  const getNewArrivals = async () => {
    try {
      const response = await axios.get("/filterProducts/newArrivals");
      console.log(response.data);
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
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 mx-auto text-uppercase">
            New arrivals
          </h2>
          <p className="text-theme-gray text-18">
            Unlock the latest hair trends: Step up your style game with our top
            picks of trending wigs
          </p>
        </div>
        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto justify-content-center">
          {newArrivals.map((product, index) => (
            <div
              key={index}
              className="card-main border rounded-iconive w-25"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/ProductDetails/${product._id}`);
              }}
            >
              <div className="img-card">
                <img
                  className="w-100 h-100"
                  src={product.photo}
                  alt="This  is an  picture"
                />
              </div>
              <div className="text-start p-3">
                <p className=" fw-bold text-16 text-dark">{product.name}</p>
                <p className="m-0 py-0 text-12 text-theme-gray">
                  {product.description}
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <p className="text-20 fw-bold text-dark my-auto pt-1">
                    {currency == "USD" ? "$" : "৳"}
                    {currencyConverter(currency, product.price)}
                  </p>
                  <div className="d-flex">
                    <button className="btn px-0 mt-1">
                      {" "}
                      <img src={cardicon2} className="" alt="this is an icon" />
                    </button>
                    <button
                      className="btn ps-2 my-auto"
                      onClick={() => {
                        navigate(`/ProductDetails/${product._id}`);
                      }}
                    >
                      {" "}
                      <img
                        src={cardicon1}
                        className="w-100 "
                        alt="this is an icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 d-flex flex-column text-center">
          <button className="btn text-theme-gray text-18">View Shop</button>
          <KeyboardArrowDownIcon className="text-theme-gray m-auto mb-md-5" />
        </div>
      </div>
    </>
  );
}
