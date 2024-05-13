/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "react-circular-progressbar/dist/styles.css";
import OrderItem from "../Orders/OderItems";
import "../Profile/Profile.css";
export default function OrderHistoryItem({ order }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [collapase, setCollapse] = useState(false);
  return (
    <div className="w-100 ">
      <div className="border-bottom px-5 pt-5 order-bg bg-light w-100">
        <div className="w-100 d-flex flex-column flex-lg-row ">
          <div className="w-40 border-midddle">
            <div className="text-start">
              <div className="d-flex">
                <p className="text-invoice my-auto pe-2 text-theme">
                  {/* {`${new Date(order.createdAt).getDate()} ${
                    months[new Date(order.createdAt).getMonth()]
                  }, ${new Date(order.createdAt).getFullYear()}`} */}
                  {calculateDays(order?.createdAt)} <FlightIcon />
                </p>
                <span className="my-auto ms-1">
                  <img
                    className="my-auto"
                    alt="this is an image"
                    src="./Image/profile/OrderHistory/dateY.svg"
                  />
                </span>
              </div>
              <p className="text-14 text-theme-gray pb-5 mb-0">
                Estimated Delivery Date
              </p>
              <div className="d-flex pe-4">
                <p className="text-invoice text-dark my-auto pe-2">
                  Invoice ID: {order.payment.invoice_number}
                </p>
                <span className="m-auto">
                  <img
                    className="my-auto "
                    src="./Image/profile/order/invoice.svg"
                    alt="this is an icon"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-60p ps-md-5 ps-sm-3">
            <div className="w-100 d-flex flex-column flex-lg-row">
              <div className="w-60p text-start mt-4">
                <p className="text-14 text-theme-gray mb-0">Order Date</p>
                <p className="text-18">{`${new Date(
                  order.createdAt
                ).getDate()} ${
                  months[new Date(order.createdAt).getMonth()]
                } ${new Date(order.createdAt).getFullYear()}`}</p>
                <p className="text-14 text-theme-gray mb-0">Shipping Address</p>
                <p className="text-18">
                  {order.billing.address}, {order.billing.city},
                  {order.billing.country}
                </p>
              </div>
              <div className="w-40 text-center py-5 mx-auto">
                <p className="text-18 fw-bold">Completed</p>
                <span className="my-auto">
                  <img
                    src="./Image/profile/OrderHistory/blueTick.svg"
                    alt="this is an icon"
                  />
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
                {order.orderItems.map((orderItem, index) => {
                  return <OrderItem orderItemId={orderItem} />;
                })}
              </div>
              {/* balance section */}
              {/* <div className="w-20 ms-auto  pt-4 ">
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
                    <p className="mb-0 text-dark fs-5 fw-bold my-0">$657.00</p>
                  </div>
                </div>
              </div> */}

              {/* download invoice */}
              <div className="d-flex py-4 text-start gap-5">
                <button className="btn btn-theme-hover btn-theme-order border-bottom text-uppercase pb-1 text-16 mx-auto">
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
  );
}
