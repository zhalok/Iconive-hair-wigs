/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import invoice from ".././Images/profile/order/invoice.svg";
import biman from ".././Images/profile/order/biman.svg";
import orderdp from ".././Images/profile/order/orderdp.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const percentage = 66;
const steps = [
  "Payment Pending",
  "Order Received",
  "Processing",
  "Shipped",
  "Received",
];

export default function Orders() {
  const [collapase, setCollapse] = useState(false);
  return (
    <>
      <div className="w-100 ">
        <div className="border-bottom px-5 pt-5 order-bg bg-light w-100">
          <div className="w-100 d-flex  ">
            <div className="w-40 ">
              <div className="text-start border-end">
                <div className="d-flex">
                  <p className="text-invoice my-auto pe-2">
                    Invoice ID: 33048687443
                  </p>
                  <span className="my-auto">
                    <img
                      className="my-auto"
                      alt="this is an image"
                      src={invoice}
                    />
                  </span>
                </div>
                <p className="text-14 text-theme-gray pt-5 mb-0">
                  Estimated Delivery Date
                </p>
                <div className="d-flex my-0">
                  <p className="text-delivary my-auto pe-2">
                    {" "}
                    15 October, 2023
                  </p>
                  <span className="my-auto">
                    <img
                      className="my-auto "
                      src={biman}
                      alt="this is an icon"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-60 ps-md-5 ps-sm-3">
              <div className="w-100 d-flex ">
                <div className="w-60 text-start mt-4">
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
                  <div className="mx-auto" style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                      value={66}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.005,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: "round",

                        // Text size
                        textSize: "24px",

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `#ECB30A`,
                        textColor: "#1A1A1A",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 text-start mt-4">
            {collapase && (
              <div>
                <Box sx={{ width: "100%" }} marginTop={10} marginBottom={8}>
                  <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel> {label} </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <p className="text-invoice">Items :</p>
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
                  <button className="btn btn-theme-hover btn-theme-order border-bottom pb-1">
                    Cancel Order{" "}
                  </button>
                  <button className="btn btn-theme-hover btn-theme-order border-bottom pb-1">
                    Queries <HelpOutlineOutlinedIcon className="" />
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
