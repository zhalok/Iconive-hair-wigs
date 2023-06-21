/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./CustomWigs.css";
import { useNavigate } from "react-router-dom";
import card1 from "../Images/custom/1.svg";
import card2 from "../Images/custom/2.svg";
import card3 from "../Images/custom/3.svg";
import card4 from "../Images/custom/4.svg";
import card5 from "../Images/custom/5.svg";
import card6 from "../Images/custom/6.svg";
import p1 from "../Images/partners/1.svg";
import p2 from "../Images/partners/2.svg";
import p3 from "../Images/partners/3.svg";
import p4 from "../Images/partners/4.svg";
import p5 from "../Images/partners/5.svg";
import p6 from "../Images/partners/6.svg";
import bg from "../Images/custom/bg-custom.svg";
import icon1 from "../Images/custom/iconwhy.svg";
import icon2 from "../Images/custom/iconwhy1.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function CustomWigs() {
  const navigate = useNavigate();
  return (
    <div>
      {/* our partners */}
      <div className="m-90">
        <h2 className="fw-bold text-uppercase. headingHover">Our partners</h2>
        <div className="d-flex flex-wrap justify-content-between container pt-5 row mx-auto g-3">
          <div className="col  my-auto p-3 cardImg">
            <img src={p1} alt="this is a picture" />
          </div>
          <div className="col  my-auto p-3 cardImg">
            <img src={p2} alt="this is a picture" />
          </div>
          <div className="col  my-auto p-3 cardImg">
            <img src={p3} alt="this is a picture" />
          </div>
          <div className="col  my-auto p-3 cardImg">
            <img src={p4} alt="this is a picture" />
          </div>
          <div className="col  my-auto p-3 cardImg">
            <img src={p5} alt="this is a picture" />
          </div>
          <div className="col  my-auto p-3 cardImg">
            <img src={p6} alt="this is a picture" />
          </div>
          {/* <img src={p2} alt="this is a picture" />
          <img src={p3} alt="this is a picture" />
          <img src={p4} alt="this is a picture" />
          <img src={p5} alt="this is a picture" />
          <img src={p6} alt="this is a picture" /> */}
        </div>
      </div>
      {/* position-relative position-absolute */}

      <div className="bg-custom">
        <div className="p-3 p-lg-0 mt-5">
          <h4 className="fw-bold fs-2  pt-5  w-100 mx-auto text-uppercase headingHover">
            Custom medical wigs
          </h4>
          <p className="pt-4  f-16 text-theme-gray pb-4 pb-lg-0">
            Our custom wigs cater to medical hair loss needs. Choose base type,
            hair color, and length for a personalized fit. High-quality
            materials <br /> ensure comfort and durability, and a fashionable
            look. Ideal for chemotherapy or alopecia patients.
          </p>
        </div>
        <div className="d-flex m-md-5 px-5">
          <div className="d-flex g-3 mx-auto row">
            {/* card */}
            <div className="mx-auto   col-6 col-lg-2">
              <img
                className=" wc-22 w-100 h-100"
                src={card1}
                alt="This  is an  picture"
              />
            </div>

            <div className="mx-auto  col-6 col-lg-2">
              <img
                className=" wc-22 w-100 h-100"
                src={card2}
                alt="This  is an  picture"
              />
            </div>

            <div className="mx-auto  col-6 col-lg-2">
              <img
                className=" wc-22 w-100 h-100"
                src={card3}
                alt="This  is an  picture"
              />
            </div>

            <div className="mx-auto  col-6 col-lg-2">
              <img
                className=" wc-22 w-100 h-100"
                src={card4}
                alt="This  is an  picture "
              />
            </div>
            <div className="mx-auto col-6 col-lg-2">
              <img
                className=" wc-22 w-100 h-100"
                src={card5}
                alt="This  is an  picture "
              />
            </div>
            <div className="mx-auto  col-6 col-lg-2">
              <img
                className="wc-22 w-100 h-100"
                src={card6}
                alt="This  is an  picture "
              />
            </div>
          </div>
        </div>
        <div className="my-5 d-flex flex-column text-center">
          <button
            onClick={() => {
              navigate("/catagory");
            }}
            className="btn text-theme-gray text-18"
          >
            View custom medical Systems
          </button>
          <KeyboardArrowDownIcon className="text-theme-gray m-auto " />
        </div>{" "}
      </div>
      <div className=" pt-5 bg-custom-banner">
        <div className="container ">
          <div className="whychooseUs  pt-5 ms-auto px85 pb100 text-end">
            <h2 className="fw-bold my-whole">WHY CHOOSE US</h2>
            <img className="mb-3" src={icon1} alt="this is a picture" />
            <p className="text-theme-gray ">Non-Surgical Hair Replacement</p>
            <p className="text-theme-gray ">No harmful effect</p>
            <p className="text-theme-gray ">Safe & easy to use</p>
            <p className="text-theme-gray ">Loyal customer base</p>
            <img className="mt-5 mb-3" src={icon2} alt="this is a picture" />
            <p className="text-theme-gray ">Easy return policy</p>
            <p className="text-theme-gray">Fast Worldwide Free Shipping</p>
            <p className="text-theme-gray">24/7 Customer Service</p>
            <p className="text-theme-gray pb-5">Regular Order Status Updates</p>
          </div>
        </div>

        {/* <img src={bg} alt="this is an picture" /> */}
      </div>
    </div>
  );
}
