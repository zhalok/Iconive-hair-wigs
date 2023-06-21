/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./Profile.css";
import pps from ".././Images/profile/pps.svg";
import ppr from ".././Images/profile/ppr.svg";
import prosvg from ".././Images/profile/prosvg.svg";
import prosvgY from ".././Images/profile/proY.svg";
import orderY from ".././Images/profile/orderY.svg";
import order from ".././Images/profile/order.svg";
import history from ".././Images/profile/history.svg";
import historyY from ".././Images/profile/historyY.svg";
import wish from ".././Images/profile/wish.svg";
import wishY from ".././Images/profile/wishY.svg";
import refundd from ".././Images/profile/refundd.svg";
import refundY from ".././Images/profile/refundY.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Orders from "./Orders";
import Wishlist from "./Wishlist";
import MyProfile from "./MyProfile";
import OrderHistory from "./OrderHistory";
import Refund from "./Refund";
const sidebarItem = [
  { id: 1, name: "My Profile" },
  { id: 2, name: "Orders" },
  { id: 3, name: "Order History" },
  { id: 4, name: "Wishlist" },
  { id: 5, name: "Refund and Return" },
];

export default function Profile() {
  const [sidebar, setSidebar] = useState(1);
  const [activeBtn, setActiveBtn] = useState(true);

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
          <div className=" profile-border bg-light pt-5">
            <div className="w-100px  bg-themeYellow rounded-circle d-flex mx-auto mb-4 shadow-lg">
              <h1 className="m-auto text-light fw-bold">AB</h1>
            </div>
            <h4 className="fw-bold pb-4 dp-text">Clint Eastwood</h4>
            <div className="px-5 pb-3">
              <div className="d-flex border-top border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 1 ? (
                    <img src={prosvgY} alt="this is an image" className="" />
                  ) : (
                    <img src={prosvg} alt="this is an image" className="" />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(1);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 1 && "text-theme"
                  }`}
                >
                  My Profile
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 2 ? (
                    <img src={orderY} alt="this is an image" className="" />
                  ) : (
                    <img src={order} alt="this is an image" className="" />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(2);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 2 && "text-theme"
                  }`}
                >
                  Orders
                </p>
                <span
                  className={`ms-3 rounded-2  my-auto pt2px px-2 ${
                    activeBtn === true && sidebar === 2
                      ? "bg-theme-color text-light "
                      : "bg-secondary  text-light"
                  }`}
                >
                  2
                </span>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 3 ? (
                    <img src={historyY} alt="this is an image" className="" />
                  ) : (
                    <img src={history} alt="this is an image" className="" />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(3);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 3 && "text-theme"
                  }`}
                >
                  Order History
                </p>
              </div>
              <div className="d-flex border-bottom py-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 4 ? (
                    <img src={wishY} alt="this is an image" className="" />
                  ) : (
                    <img src={wish} alt="this is an image" className="" />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(4);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 sideItem text-theme-gray ${
                    activeBtn === true && sidebar === 4 && "text-theme"
                  }`}
                >
                  Wishlist
                </p>
              </div>
              <div className="d-flex border-bottom py-4 mb-4">
                <span className="my-auto ms-1">
                  {activeBtn === true && sidebar === 5 ? (
                    <img src={refundY} alt="this is an image" className="" />
                  ) : (
                    <img src={refundd} alt="this is an image" className="" />
                  )}
                </span>
                <p
                  onClick={() => {
                    setSidebar(5);
                    setActiveBtn(true);
                  }}
                  className={`my-auto text-18 ps-4 text-start text-theme-gray sideItem ${
                    activeBtn === true && sidebar === 5 && "text-theme"
                  }`}
                >
                  Refund & Return
                </p>
              </div>
            </div>
            <div className="w-100 pb-5 px-5">
              <button className="w-100 bg-themeYellow btn text-light fw-bold">
                LOG OUT
              </button>
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
          {sidebar === 1 && <MyProfile></MyProfile>}
          {sidebar === 3 && (
            <div className="d-flex flex-column gap-5 pb-5">
              <OrderHistory></OrderHistory>
              <OrderHistory></OrderHistory>
              <OrderHistory></OrderHistory>
            </div>
          )}
          {sidebar === 4 && (
            <div className="overflow-auto">
              <Wishlist></Wishlist>
            </div>
          )}
          {sidebar === 5 && (
            <div>
              <Refund />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
