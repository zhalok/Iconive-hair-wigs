/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Profile.css";
import pps from ".././Images/profile/pps.svg";
import ppr from ".././Images/profile/ppr.svg";
import prosvg from ".././Images/profile/prosvg.svg";
import orderY from ".././Images/profile/orderY.svg";
import history from ".././Images/profile/history.svg";
import wish from ".././Images/profile/wish.svg";
import refundd from ".././Images/profile/refundd.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Orders from "./Orders";
import Wishlist from "./Wishlist";
const sidebarItem = [
  { id: 1, name: "My Profile" },
  { id: 2, name: "Orders" },
  { id: 3, name: "Order History" },
  { id: 4, name: "Wishlist" },
  { id: 5, name: "Refund and Return" },
];

export default function Profile() {
  const [sidebar, setSidebar] = useState(2);
  const [activeBtn, setActiveBtn] = useState(2);

  return (
    <div className="px60 bg-body">
      <div className="d-flex my-4 px60">
        <a href="#" className="text-decoration-none text-theme-gray my-auto">
          HOME
        </a>
        <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
        <a href="#" className="text-decoration-none text-theme-gray  my-auto">
          PROFILE
        </a>
        <KeyboardArrowRightIcon className="text-theme-gray mx-4 fs-3" />
        <a href="#" className="text-decoration-none text-dark  my-auto">
          MY PROFILE
        </a>
      </div>

      {/* side bar */}
      <div className="w-100 d-flex gap-5">
        <div className="w-20 ">
          <div className=" profile-border bg-light">
            <div className="w-100 pt-5 pb-2">
              <img src={ppr} alt="this is an image" className="" />
            </div>
            <h4 className="fw-bold pb-4 dp-text">Clint Eastwood</h4>
            <div className="px-5 pb-5">
              <div className="d-flex border-top border-bottom py-4">
                <span className="my-auto ms-1">
                  <img src={prosvg} alt="this is an image" className="" />
                </span>
                <p
                  onClick={() => {
                    setSidebar(1);
                  }}
                  className="my-auto text-18 ps-4 "
                >
                  My Profile
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  <img src={orderY} alt="this is an image" className="" />
                </span>
                <p
                  onClick={() => {
                    setSidebar(2);
                  }}
                  className="my-auto text-18 text-theme ps-4"
                >
                  Orders
                </p>{" "}
                <span className="ms-3 rounded-2 bg-theme-color text-light my-auto pt2px">
                  2
                </span>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  <img src={history} alt="this is an image" className="" />
                </span>
                <p
                  onClick={() => {
                    setSidebar(3);
                  }}
                  className="my-auto text-18 ps-4"
                >
                  Order History
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  <img src={wish} alt="this is an image" className="" />
                </span>
                <p
                  onClick={() => {
                    setSidebar(4);
                  }}
                  className="my-auto text-18 ps-4"
                >
                  Wishlist
                </p>
              </div>
              <div className="d-flex border-bottom py-4 mb-4">
                <span className="my-auto ms-1">
                  <img src={refundd} alt="this is an image" className="" />
                </span>
                <p
                  onClick={() => {
                    setSidebar(5);
                  }}
                  className="my-auto text-18 ps-4"
                >
                  Refund and Return
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 d-flex flex-column ">
          {sidebar === 2 && (
            <div className="d-flex flex-column gap-5 pb-5">
              <Orders></Orders>
              <Orders></Orders>
              <Orders></Orders>
            </div>
          )}
          {sidebar === 1 && <div>This is profie section</div>}
          {sidebar === 3 && <div>This is Order History section</div>}
          {sidebar === 4 && (
            <div className="overflow-auto">
              <Wishlist></Wishlist>
            </div>
          )}
          {sidebar === 5 && <div>This is Refund and Return section</div>}
        </div>
      </div>
    </div>
  );
}
