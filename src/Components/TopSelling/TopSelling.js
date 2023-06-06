/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./TopSelling.css";
import card1 from "../Images/card/Mask1.svg";
import cardicon1 from "../Images/card/cardicon1.svg";
import cardicon2 from "../Images/card/cardicon2.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
export default function TopSelling() {
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
      <div className="container ps-r d-flex flex-column">
        <div className="w-100 pb-3 text-center ">
          <h2 className="fw-bold fs-2 bg-wh text-dark px-4 pb-0 text-center text-uppercase animate__animated animate__fadeInDown ">
            Our Best Selling wigs
          </h2>
          <p className="text-theme-gray text-18 	">
            Discover your unique look, Browse our selection of wigs for him and
            her
          </p>
        </div>

        <div className="d-flex w-100 mt-5 flex-wrap gap-4 mx-auto justify-content-center ">
          {cards.map((card, index) => (
            <div key={index} className="card-main border rounded-iconive w-25">
              <div className="img-card">
                <img
                  className="w-100 h-100"
                  src={card1}
                  alt="This  is an  picture"
                />
              </div>
              <div className="text-start p-3">
                <p className=" fw-bold text-16 text-dark">
                  SuperSkin - Ladies Blonde Wig
                </p>
                <p className="m-0 py-0 text-12 text-theme-gray">
                  Be confident with any style you like to own from a large
                  variety of styles.
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <p className="text-20 fw-bold text-dark my-auto pt-1">$500</p>
                  <div className="d-flex">
                    <button className="btn px-0 mt-1">
                      {" "}
                      <img src={cardicon2} className="" alt="this is an icon" />
                    </button>
                    <button className="btn ps-2 my-auto">
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
      {}
    </>
  );
}
