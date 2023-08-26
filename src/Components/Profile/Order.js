/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useContext } from "react";
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
import OrderItem from "../Orders/OderItems";
import CurrencyContext from "../../Contexts/CurrencyContext";
import axios from "../../utils/axios";
import axios1 from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import invoiceApiAxios from "../../utils/invoiceApiAxios";
// import Invoice from "../Invoice";
// import {
//   renderToFile,
//   renderToStream,
//   render,
//   PDFDownloadLink,
// } from "@react-pdf/renderer";

import ReactPDF from "@react-pdf/renderer";

// const percentage = 66;
const steps = [
  "Order Placed",
  "Payment Completed",
  "Processing",
  "Shipped",
  "Received",
];

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

export default function Order({ order, index, getOrders }) {
  const [collapase, setCollapse] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const [loading, setLoading] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [blob1, setBlob1] = useState(null);
  const [blob2, setBlob2] = useState(null);
  console.log("Order", order);

  const cancelOrder = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `/order/cancelOne/${order._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );

      setLoading(false);
      getOrders();
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const payOrder = async () => {
    try {
      setLoadingPayment(true);
      const paymentResponse = await axios.post(
        `/payment/repay/${order._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
            invoice_number: order.payment.invoice_number,
          },
        }
      );
      setLoadingPayment(false);
      // console.log("paymentResponse", paymentResponse);
      window.location.replace(paymentResponse.data.payment_url);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const updateStepper = () => {
    console.log("Order status", order.status);
    const idx = steps.indexOf(order.status);
    console.log("index of steps", idx);
    return idx + 1;
  };

  const handleDownload = async (filename) => {
    try {
      setPdfLoading(true);
      const response = await fetch(
        `http://localhost:8000/api/invoice/getInvoice/${order._id}`,
        {
          headers: {
            "content-type": "applicaion/json",
          },
        }
      );
      // console.log(response);
      const blob = await response.blob();
      setPdfLoading(false);
      const fileUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "invoice_" + order?.payment?.invoice_number + ".pdf"; // Adjust the file name and extension
      link.click();

      URL.revokeObjectURL(fileUrl);
    } catch (error) {
      setPdfLoading(false);
      console.error("Error downloading the PDF:", error);
    }
  };

  const createAndDownloadPdf = async () => {
    setPdfLoading(true);

    axios1({
      url: "http://localhost:8000/api/invoice/create",
      responseType: "stream",
      method: "POST",
      data: {
        items: [
          {
            name: "Gizmo",
            quantity: 10,
            unit_cost: 99.99,
            description: "The best gizmos there are around.",
          },
          {
            name: "Gizmo v2",
            quantity: 5,
            unit_cost: 199.99,
          },
        ],
      },
    })
      .then((res) => {
        // console.log(typeof res.data);
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "invoice_" + order?.payment?.invoice_number + ".pdf"; // Adjust the file name and extension
        link.click();

        URL.revokeObjectURL(url);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="w-100 ">
        <div className="border-bottom px-5 pt-5 order-bg bg-light w-100">
          <div className="w-100 d-flex  ">
            <div className="w-40 ">
              <div className="text-start border-end">
                <div className="d-flex">
                  <p className="text-invoice my-auto pe-2">
                    Invoice ID: {order?.payment?.invoice_number}
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
              </div>
            </div>
            <div className="w-60p ps-md-5 ps-sm-3">
              <div className="w-100 d-flex ">
                <div className="w-60p text-start mt-4">
                  <p className="text-14 text-theme-gray mb-0">Order Date</p>
                  <p className="text-18">{`${new Date(
                    order.createdAt
                  ).getDate()} ${
                    months[new Date(order.createdAt).getMonth()]
                  } ${new Date(order.createdAt).getFullYear()}`}</p>
                  <p className="text-14 text-theme-gray mb-0">
                    Shipping Address
                  </p>
                  <p className="text-18">{order?.billing?.address}, </p>
                </div>
                <div className="w-40 text-center">
                  <p className="text-18">{updateStepper()}</p>
                  <div className="mx-auto" style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                      value={(updateStepper() / steps.length).toFixed(2) * 100}
                      text={`${
                        (updateStepper() / steps.length).toFixed(2) * 100
                      }%`}
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
                  <Stepper activeStep={updateStepper()} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel> {label} </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
                <p className="text-invoice">Items :</p>
                {/* items */}
                <div className="w-100 border-bottom">{/* order items  */}</div>

                {/* <OrderItem orderItemId={order} /> */}

                <>
                  {order.orderItems.map((item) => {
                    return <OrderItem orderItemId={item} />;
                  })}
                </>

                {/* download invoice */}

                <div className="d-flex py-4 text-start gap-5">
                  {pdfLoading ? (
                    <PulseLoader />
                  ) : (
                    <button
                      className="btn btn-theme-hover btn-theme-order border-bottom text-uppercase pb-1"
                      onClick={() => {
                        // createAndDownloadPdf();
                        handleDownload();
                        // window.location.replace();
                      }}
                    >
                      Download Invoice
                    </button>
                  )}
                  {loading ? (
                    <PulseLoader />
                  ) : (
                    <button
                      className="btn btn-theme-hover btn-theme-order border-bottom pb-1"
                      onClick={cancelOrder}
                    >
                      Cancel Order{" "}
                    </button>
                  )}
                  {order?.payment_status != "Successful" && (
                    <button
                      className="btn btn-theme-hover btn-theme-order border-bottom pb-1"
                      onClick={() => {
                        payOrder();
                      }}
                    >
                      Pay Now
                    </button>
                  )}
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
