/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import invoice from ".././Images/profile/order/invoice.svg";
import bluetick from ".././Images/profile/OrderHistory/blueTick.svg";
import pickback from ".././Images/profile/pickback.svg";
export default function Refund() {
  return (
    <div>
      <div className="w-100 mb-5">
        <div className="border-bottom px-5 py-5 order-bg bg-light w-100">
          <div className="d-flex my-0">
            <p className="text-delivary text-dark my-auto pe-2">
              Invoice ID: 33048687443
            </p>
            <span className="my-auto">
              <img className="my-auto " src={invoice} alt="this is an icon" />
            </span>
          </div>
          <div className="w-100 d-flex">
            <div className="w-20 mt-auto">
              <div className="text-start">
                <p className="text-theme-gray text-14 mb-0">
                  Status :{" "}
                  <span className="text-dark fw-bold"> Processing</span>
                </p>

                <p className="text-theme-gray text-14 mb-0 pt-4">
                  Cancellation Date
                </p>
                <p className="text-18 fw-bold">30 September, 2023</p>
              </div>
            </div>
            <div className="w-80 ps-md-5 ps-sm-3 border-start">
              <div className="w-100 d-flex ">
                <div className="w-60 text-start mt-auto">
                  <p className="text-14 text-theme-gray mb-0">
                    Estimated Refund Date
                  </p>
                  <div className="d-flex">
                    <p className="text-invoice my-auto pe-2 text-theme">
                      15 October, 2023
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
                  <p className="text-75 text-theme mb-0">15</p>

                  <p className="text-18 mb-0">Days Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* or  */}

      <div className="w-100 ">
        <div className="border-bottom px-5 py-5 order-bg bg-light w-100">
          <div className="d-flex my-0">
            <p className="text-delivary text-dark my-auto pe-2">
              Invoice ID: 33048687443
            </p>
            <span className="my-auto">
              <img className="my-auto " src={invoice} alt="this is an icon" />
            </span>
          </div>
          <div className="w-100 d-flex  mt-4">
            <div className="w-20 ">
              <div className="text-start ">
                <p className="text-theme-gray text-14">
                  Status :<span className="status-com fw-bold"> Completed</span>
                </p>
                <p className="text-theme-gray text-14 mb-0 pt-4">
                  Cancellation Date
                </p>
                <p className="text-18 fw-bold">30 September, 2023</p>
              </div>
            </div>
            <div className="w-80 ps-md-5 ps-sm-3 border-start">
              <div className="w-100 d-flex ">
                <div className="w-60 text-start mt-auto">
                  <p className="text-14 text-theme-gray mb-0">Refund Date</p>
                  <div className="d-flex">
                    <p className="text-invoice my-auto pe-2 text-theme">
                      15 October, 2023
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
                  <img src={bluetick} alt="this is an icon" />

                  <p className="text-18 mb-0 mt-3">Refund Successful</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
