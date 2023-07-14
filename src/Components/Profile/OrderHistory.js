/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import invoice from ".././Images/profile/order/invoice.svg";
import orderdp from ".././Images/profile/order/orderdp.svg";
import bluetick from ".././Images/profile/OrderHistory/blueTick.svg";
import dateY from ".././Images/profile/OrderHistory/dateY.svg";
import "react-circular-progressbar/dist/styles.css";

import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function OrderHistory() {
  const [collapase, setCollapse] = useState(false);
  return (
    <>
      <div className="w-100 ">
        <div className="border-bottom px-5 pt-5 order-bg bg-light w-100">
          <div className="w-100 d-flex  ">
            <div className="w-40 ">
              <div className="text-start border-end">
                <div className="d-flex">
                  <p className="text-invoice my-auto pe-2 text-theme">
                    15 October, 2023
                  </p>
                  <span className="my-auto ms-1">
                    <img
                      className="my-auto"
                      alt="this is an image"
                      src={dateY}
                    />
                  </span>
                </div>
                <p className="text-14 text-theme-gray pb-5 mb-0">
                  Estimated Delivery Date
                </p>
                <div className="d-flex my-0">
                  <p className="text-delivary text-dark my-auto pe-2">
                    Invoice ID: 33048687443
                  </p>
                  <span className="my-auto">
                    <img
                      className="my-auto "
                      src={invoice}
                      alt="this is an icon"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-60p ps-md-5 ps-sm-3">
              <div className="w-100 d-flex ">
                <div className="w-60p text-start mt-4">
                  <p className="text-14 text-theme-gray mb-0">Order Date</p>
                  <p className="text-18">30 September, 2023</p>
                  <p className="text-14 text-theme-gray mb-0">
                    Shipping Address
                  </p>
                  <p className="text-18">
                    221B Baker Street, London United Kingdom
                  </p>
                </div>
                <div className="w-40 text-center">
                  <p className="text-18">Completed</p>
                  <span className="my-auto">
                    <img src={bluetick} alt="this is an icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 text-start mt-4">
            {collapase && (
              <div className="border-top pt-4">
                {/* items */}
                <div className="w-100 border-bottom">
                  <div className="d-flex mb-3">
                    <span className="my-auto w-90px rounded-3 overflow-hidden ">
                      <img
                        src={orderdp}
                        alt="this is a picture"
                        className="w-100 rounded-3"
                      />
                    </span>
                    <div className="text-start ps-3 my-auto">
                      <p className="text-18 mb-1">
                        SuperSkin - Ladies Blonde Wig
                      </p>
                      <p className="text-theme-gray text-14 mb-0">
                        Women’s Thin Skin Hair System with 110% density and
                        Knotless V-Looped hair at front
                      </p>
                    </div>
                    <div className="text-end my-auto ms-auto">
                      <p className="text-18 mb-2">$329.00</p>
                      <p className="text-theme-gray text-14">QTY: 1</p>
                    </div>
                  </div>
                  <div className="d-flex pb-3 ">
                    <span className="my-auto w-90px rounded-3 overflow-hidden ">
                      <img
                        src={orderdp}
                        alt="this is a picture"
                        className="w-100 rounded-3"
                      />
                    </span>
                    <div className="text-start ps-3 my-auto">
                      <p className="text-18 mb-1">
                        SuperSkin - Ladies Blonde Wig
                      </p>
                      <p className="text-theme-gray text-14 mb-0">
                        Women’s Thin Skin Hair System with 110% density and
                        Knotless V-Looped hair at front
                      </p>
                    </div>
                    <div className="text-end my-auto ms-auto">
                      <p className="text-18 mb-2">$329.00</p>
                      <p className="text-theme-gray text-14">QTY: 1</p>
                    </div>
                  </div>
                  <div className="d-flex pb-3 ">
                    <span className="my-auto w-90px rounded-3 overflow-hidden ">
                      <img
                        src={orderdp}
                        alt="this is a picture"
                        className="w-100 rounded-3"
                      />
                    </span>
                    <div className="text-start ps-3 my-auto">
                      <p className="text-18 mb-1">
                        SuperSkin - Ladies Blonde Wig
                      </p>
                      <p className="text-theme-gray text-14 mb-0">
                        Women’s Thin Skin Hair System with 110% density and
                        Knotless V-Looped hair at front
                      </p>
                    </div>
                    <div className="text-end my-auto ms-auto">
                      <p className="text-18 mb-2">$329.00</p>
                      <p className="text-theme-gray text-14">QTY: 1</p>
                    </div>
                  </div>
                </div>
                {/* balance section */}
                <div className="w-20 ms-auto  pt-4 ">
                  <div className="w-100 d-flex border-bottom pb-4">
                    <div className="w-50 text-end">
                      <p className="text-14 mb-0 text-theme-gray">Total </p>
                      <p className="text-14 mb-0 text-theme-gray">Shipping </p>
                      <p className="text-14 mb-0 text-theme-gray">Discount </p>
                    </div>
                    <div className="w-50 text-end">
                      <p className="text-14 mb-0 text-theme-gray">$657.00</p>
                      <p className="text-14 mb-0 text-theme-gray">$20.00 </p>
                      <p className="text-14 mb-0 text-theme-gray">-$34.00 </p>
                    </div>
                  </div>
                  <div className="w-100 d-flex pt-3">
                    <div className="w-50 text-end">
                      <p className="fs-6 mb-0 text-theme-gray mt-1">Total </p>
                    </div>
                    <div className="w-50 text-end">
                      <p className="mb-0 text-dark fs-5 fw-bold my-0">
                        $657.00
                      </p>
                    </div>
                  </div>
                </div>

                {/* download invoice */}
                <div className="d-flex py-4 text-start gap-5">
                  <button className="btn btn-theme-hover btn-theme-order border-bottom text-uppercase pb-1">
                    Download Invoice{" "}
                  </button>
                </div>
              </div>
            )}

            <div className="d-flex py-2 justify-content-center gap-5">
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
        </div>
      </div>
    </>
  );
}
