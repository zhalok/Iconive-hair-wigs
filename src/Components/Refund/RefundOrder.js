import React, { useEffect, useState } from "react";
import invoice from ".././Images/profile/order/invoice.svg";
import bluetick from ".././Images/profile/OrderHistory/blueTick.svg";
import pickback from ".././Images/profile/pickback.svg";

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
      <div className="border-bottom px-5 py-5 order-bg bg-light w-100">
        <div className="d-flex my-0">
          <p className="text-delivary text-dark my-auto pe-2">
            Invoice ID: {order.payment.invoice_number}
          </p>
          <span className="my-auto">
            <img className="my-auto " src={invoice} alt="this is an icon" />
          </span>
        </div>
        <div className="w-100 d-flex">
          <div className="w-20 mt-auto">
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
          <div className="w-80 ps-md-5 ps-sm-3 border-start">
            <div className="w-100 d-flex justify-content-between">
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
                      src={pickback}
                    />
                  </span>
                </div>
              </div>
              <div className="w-40 text-center">
                <p className="text-75 text-theme mb-0">{remainingDays}</p>

                <p className="text-18 mb-0">Days Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
