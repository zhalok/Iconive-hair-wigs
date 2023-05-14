/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Replacement.css";
import card1 from "../Images/replace/1.svg";
import card2 from "../Images/replace/2.svg";
import card3 from "../Images/replace/3.svg";
import card4 from "../Images/replace/4.svg";
import card5 from "../Images/replace/5.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Replacement() {
  const cards = [
    {
      id: 1,
      name: "card1",
    },
    {
      id: 2,
      name: "card2",
    },
    {
      id: 3,
      name: "card3",
    },
    {
      id: 4,
      name: "card4",
    },
  ];
  return (
    <>
      <div className="my-5 paddingBottom">
        <h2 className="fw-bold  w-100 mx-auto text-uppercase">
          Men’s Hair Replacement System
        </h2>
        <p className="text-18 text-theme-gray mt-3">
          Explore our exceptional selection of premium wigs designed to provide
          a flawless fit and timeless style for men of all ages
        </p>
      </div>
      <div className="bg-ch p-5">
        <div className="d-flex py-4  mx-auto container marginTop">
          {/* card */}
          <div className="mx-auto  ">
            <img
              className="w-22 h-100"
              width="100%"
              src={card1}
              alt="This  is an  picture"
            />
          </div>

          <div className="mx-auto  ">
            <img
              className="w-22 h-100"
              src={card3}
              alt="This  is an  picture"
            />
          </div>

          <div className="mx-auto ">
            <img
              className=" w-22 h-100"
              src={card4}
              alt="This  is an  picture "
            />
          </div>
          <div className="mx-auto  ">
            <img
              className="w-22 h-100"
              src={card5}
              alt="This  is an  picture "
            />
          </div>
          <div className="mx-auto  ">
            <img
              className="w-22 h-100"
              src={card2}
              alt="This  is an  picture"
            />
          </div>
        </div>
        <div className="mt-5 d-flex flex-column text-center">
          <button className="btn text-theme-gray text-18">
            View Hair Base Systems
          </button>
          <KeyboardArrowDownIcon className="text-theme-gray m-auto" />
        </div>
      </div>
    </>
  );
}
