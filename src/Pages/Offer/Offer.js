/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import banner1 from "../../.././src/Components/Images/offer/offer1.webp";
import banner2 from "../../.././src/Components/Images/offer/offter2.webp";
import Subscription from "../../Components/Subscription/Subscription";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import CurrencyContext from "../../Contexts/CurrencyContext";
import CollectionCard from "../../.././src/Components/Collections/CollectionCard";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./Offer.css";

export default function Offer() {
  const navigate = useNavigate();
  const [collapase, setCollapse] = useState(false);
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
      <div className="w-100">
        <img src={banner1} className="w-100" alt="this is a banner" />
      </div>
      <div className="container mt-5p">
        <div className="w-100  pb-3">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 mx-auto text-uppercase headingHover">
            Stock clearance sale
          </h2>
          <p className="text-theme-gray text-18">
            Get the perfect Wig at an amazing price that is readily available!
          </p>
        </div>
        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto justify-content-center">
          {newArrivals.map((product, index) => {
            // console.log(product._id);
            return <CollectionCard productId={product._id} index={index} />;
          })}
        </div>
        <div className="mb-5 mt-4 d-flex flex-column text-center">
          {collapase && (
            <button
              onClick={() => {
                setCollapse((prevs) => {
                  return !prevs;
                });
              }}
              className="btn text-16 text-theme-gray"
            >
              <KeyboardArrowUpOutlinedIcon />
              Collapse
            </button>
          )}
          {!collapase && (
            <button
              onClick={() => {
                setCollapse((prevs) => {
                  return !prevs;
                });
              }}
              className="btn text-16 text-theme-gray"
            >
              <KeyboardArrowDownOutlinedIcon />
              Expand
            </button>
          )}
        </div>
      </div>

      <div className="w-100">
        <img src={banner2} className="w-100" alt="this is a banner" />
      </div>

      <div className="container mt-5p">
        <div className="w-100 pb-3">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 mx-auto text-uppercase headingHover">
            Spring Sale
          </h2>
          <p className="text-theme-gray text-18">
            Spot perfectly fitting wigs for spring at a stunning discounted
            price.
          </p>
        </div>
        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto justify-content-center">
          {newArrivals.map((product, index) => {
            // console.log(product._id);
            return <CollectionCard productId={product._id} index={index} />;
          })}
        </div>
        <div className="mb-5 mt-4 d-flex flex-column text-center">
          {collapase && (
            <button
              onClick={() => {
                setCollapse((prevs) => {
                  return !prevs;
                });
              }}
              className="btn text-16 text-theme-gray"
            >
              <KeyboardArrowUpOutlinedIcon />
              Collapse
            </button>
          )}
          {!collapase && (
            <button
              onClick={() => {
                setCollapse((prevs) => {
                  return !prevs;
                });
              }}
              className="btn text-16 text-theme-gray"
            >
              <KeyboardArrowDownOutlinedIcon />
              Expand
            </button>
          )}
        </div>
      </div>

      <Subscription />
    </>
  );
}