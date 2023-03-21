/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Replacement.css";
import card1 from "../Images/Hair1.png";
import card2 from "../Images/Hair2.png";
import card3 from "../Images/Hair3.png";
import card4 from "../Images/Hair4.png";
import card5 from "../Images/Hair5.png";

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
      <div className="bg-ch ">
        <div className="ps-r pt-5">
          <h5 className="fw-bold fs-2  pt-5 pT-4 w-100 mx-auto ">
            BROWSER BEST HAIR REPLACEMENT SYSTEM FOR MAN
          </h5>
        </div>
       
          <div className="d-flex my-5  mx-auto container pb5">
            {/* card */}
            <div className="mx-auto  w-22 ">
                <img
                  className=""
                  width="100%"
                  src={card1}
                  alt="This  is an  picture"
                />
            </div>

           

            <div className="mx-auto  w-22">
                <img
                  className="w-100 h-100"
                  src={card3}
                  alt="This  is an  picture"
                />
            </div>

            <div className="mx-auto  w-22">
                <img
                  className="w-100 h-100"
                  src={card4}
                  alt="This  is an  picture "
                />
            </div>
            <div className="mx-auto  w-22">
                <img
                  className="w-100 h-100"
                  src={card5}
                  alt="This  is an  picture "
                />
            </div>
            <div className="mx-auto  w-22">
                <img
                  className="w-100 h-100"
                  src={card2}
                  alt="This  is an  picture"
                />
            </div>
          </div>
       
        <div>
        </div>
      </div>
    </>
  );
}
