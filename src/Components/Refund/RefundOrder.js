/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "../Profile/Profile.css";
export default function RefundOrder({ order, index }) {
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

  const [remainingDays, setRemainingDays] = useState(0);

  const calculateRemaining = () => {
    const cancelledDate = new Date(order.updatedAt).getTime();
    const estimatedReturnDate = new Date(order.estimatedReturnDate).getTime();
    const remaining = estimatedReturnDate - cancelledDate;
    const days = remaining / (1000 * 60 * 60 * 24);
    setRemainingDays(days);
  };

  useEffect(() => {
    calculateRemaining();
  }, [order]);

  return (
    <div className="w-100 mb-5">
      <div className="border-bottom px-md-5 p-4 py-md-5  order-bg bg-light w-100 d-flex flex-column ">
        <div className="d-flex my-0 w-100">
          <p className="text-invoice text-dark my-auto pe-2 text-start">
            Invoice ID: {order.payment.invoice_number}
          </p>
          <span className="my-auto">
            <img
              className="my-auto "
              src="./Image/profile/order/invoice.svg"
              alt="this is an icon"
            />
          </span>
        </div>
        <div className="w-100 d-flex flex-column flex-lg-row">
          <div className="w-20 mt-auto border-midddle ">
            <div className="text-start">
              <p className="text-theme-gray text-14 mb-0">
                Status : <span className="text-dark fw-bold"> Processing</span>
              </p>

              <p className="text-theme-gray text-14 mb-0 pt-4">
                Cancellation Date
              </p>
              <p className="text-18 fw-bold">{`${new Date(
                order.updatedAt
              ).getDate()} ${
                months[new Date(order.updatedAt).getMonth()]
              } ${new Date(order.updatedAt).getFullYear()}`}</p>
            </div>
          </div>
          <div className="w-80 ps-md-5 ps-sm-3 ">
            <div className="w-100 d-flex justify-content-between flex-column flex-lg-row">
              <div className="w-60p text-start mt-auto">
                <p className="text-14 text-theme-gray mb-0">
                  Estimated Refund Date
                </p>
                <div className="d-flex">
                  <p className="text-invoice my-auto pe-2 text-theme">
                    {`${new Date(order.estimatedReturnDate).getDate()} ${
                      months[new Date(order.estimatedReturnDate).getMonth()]
                    } ${new Date(order.estimatedReturnDate).getFullYear()}`}
                  </p>
                  <span className="my-auto ms-1">
                    <img
                      className="my-auto"
                      alt="this is an image"
                      src="./Image/profile/pickback.svg"
                    />
                  </span>
                </div>
              </div>
              {order.status != "Refunded" ? (
                <div className="w-40 text-center pt-5 pt-md-0 mx-auto ">
                  <p className="text-75 text-theme mb-0">{remainingDays}</p>

                  <p className="text-18 mb-0">Days Remaining</p>
                </div>
              ) : (
                <div className="w-40 text-center pt-4 mx-auto">
                  <img
                    src="./Image/profile/OrderHistory/blueTick.svg"
                    alt="this is an icon"
                  />

                  <p className="text-18 mb-0 mt-3">Refund Successful</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
