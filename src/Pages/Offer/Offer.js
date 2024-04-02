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
      <div className="w-100">
        <img
          src="./Image/offer/offer1.webp"
          className="w-100"
          alt="this is a banner"
        />
      </div>
      <div className="mt-5p">
        <div className="w-100 pb-3">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 mx-auto text-uppercase headingHover">
            Stock clearance sale
          </h2>
          <p className="text-theme-gray text-18">
            Get the perfect Wig at an amazing price that is readily available!
          </p>
        </div>
        <div className="container d-flex flex-row flex-wrap  justify-content-center gap-5 my-5">
          {productsToShow.map((product, index) => {
            return <CollectionCard product={product} index={index} />;
          })}
        </div>

        <div className="mb-5 mt-4 d-flex flex-column text-center">
          {collapase && (
            <button
              onClick={() => {
                setProductsToShow(newArrivals.slice(0, 3));
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
                setProductsToShow(newArrivals);
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
        <img
          src="./Image/offer/offter2.webp"
          className="w-100"
          alt="this is a banner"
        />
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
        {/* <div className="d-flex flex-wrap flex-column flex-lg-row gap mt-5 flex-wrap gap-4 mx-auto justify-content-center">
          {newArrivals.map((product, index) => {
            // console.log(product._id);
            return <CollectionCard product={product} index={index} />;
          })}
        </div> */}

        {/* <div className="w-80 ps-md-5 pt-5 pt-md-0">
          <div className="d-flex flex-wrap flex-column gap-4 mx-auto justify-content-center">
            {newArrivals.map((product, index) => {
              // console.log(product._id);
              return <CollectionCard product={product} index={index} />;
            })}
          </div>
        </div> */}

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
    </div>
  );
}
