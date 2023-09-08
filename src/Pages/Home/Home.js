/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, Suspense, useEffect, useState } from "react";
import { lazy } from "react";
// import CarouselHome from "../../Components/CarouselHome/CarouselHome";

import "./Home.css";
import girl from "../ImagesPage/girl.png";
import pola from "../ImagesPage/Guy.png";
import wholesale from "../ImagesPage/WI.svg";
import left from "../ImagesPage/leftquote.png";
import right from "../ImagesPage/rightquote.png";
import feature1 from "../ImagesPage/freeshipping.svg";
import feature2 from "../ImagesPage/secure.svg";
import feature3 from "../ImagesPage/support.svg";
import feature4 from "../ImagesPage/refund.svg";
// import TopSelling from "../../Components/TopSelling/TopSelling";
// import Trending from "../../Components/Trending/Trending";
import Replacement from "../../Components/Replacement/Replacement";
import StarIcon from "@mui/icons-material/Star";
import CustomWigs from "../../Components/CustomWiga/CustomWigs";
import Subscription from "../../Components/Subscription/Subscription";
import "animate.css";

import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";
const CarouselHome = lazy(() =>
  import("../../Components/CarouselHome/CarouselHome")
);
const TopSelling = lazy(() => import("../../Components/TopSelling/TopSelling"));
const Trending = lazy(() => import("../../Components/Trending/Trending"));

export default function Home() {
  const [show, setShow] = useState(false);
  // const [mostSold, setMostSold] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  return (
    <div>
      <Suspense fallback={<PulseLoader />}>
        <CarouselHome></CarouselHome>
      </Suspense>

      {/* free features section */}
      <div className="container d-flex ">
        <div className=" row d-flex flex-column flex-lg-row w-100 mt-100  mx-0 px-0 justify-content-center">
          <div className="d-flex col-12 col-lg-6 row">
            <div className="d-flex row px-0 mx-0">
              <div className="col-6 w-50 d-flex px-lg-4 p-1 border-end feature-hover">
                <div className="my-auto w-25">
                  <img
                    src={feature1}
                    alt="this is a picture"
                    className="w-100"
                  />
                </div>
                <div className="text-start my-auto p-lg-3 p-1 ps-2">
                  <p className="f-16 py-0 my-0">Free Shipping</p>
                  <p className="text-13 text-theme-gray">
                    Free Shipping on order over $200
                  </p>
                </div>
              </div>
              <div className="col-6 w-50  d-flex p-1 px-lg-4 border-end feature-hover no-border">
                <div className="my-auto w-25">
                  <img
                    src={feature2}
                    alt="this is a picture"
                    className="w-100"
                  />
                </div>
                <div className="text-start my-auto p-lg-3 p-1 ps-2">
                  <p className="f-16 py-0 my-0">Secure Payment</p>
                  <p className="text-13 text-theme-gray">
                    All payments are done through Paystation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex col-12 col-lg-6 row">
            <div className="d-flex row px-0 mx-0">
              <div className="col-6 w-50 d-flex px-lg-4 p-1 border-end feature-hover">
                <div className="my-auto w-25">
                  <img
                    src={feature3}
                    alt="this is a picture"
                    className="w-100"
                  />
                </div>
                <div className="text-start my-auto p-lg-3 p-1 ps-2">
                  <p className="f-16 py-0 my-0">Support 24/7</p>
                  <p className="text-13 text-theme-gray">
                    Contact us 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
              <div className="col-6 w-50 d-flex px-lg-4 p-1  feature-hover">
                <div className="my-auto w-25">
                  <img
                    src={feature4}
                    alt="this is a picture"
                    className="w-100"
                  />
                </div>
                <div className="text-start my-auto p-lg-3 p-1 ps-2">
                  <p className="f-20 py-0 my-0">10 Days Return</p>
                  <p className="text-13 text-theme-gray">
                    Return it within 10 days for exchange
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* choose style˚*/}
      <div className="mb-5 container">
        <div className="row  d-flex  flex-lg-row p-2 p-lg-0">
          <div className="col-12 col-lg-6 my-5 pb-4 ">
            <a href="/catagory?category=6432a3f8bc1e9c4115b67db5&topbanner=1">
              <div className="card-img cardMain">
                <img
                  width="100%"
                  height="100%"
                  src={pola}
                  alt="this is a picture of girl"
                />
                <div className="overlay d-flex mx-auto w-100">
                  <h1 className="abs  text-light fw-bold p-50p mx-auto">
                    GENTS
                  </h1>
                </div>
              </div>
            </a>
            <h4 className="fw-bold pt-4 pb-3 ">GENTS</h4>
            <p className="px-3 text-theme-gray text-18">
              Be confident with any style you like to own from a <br />
              large variety of styles.
            </p>
          </div>

          <div className="col-12 col-lg-6 my-5 pb-4">
            <a href="/catagory?category=6432eb5a9e5f9a8abde960e0&topbanner=2">
              <div className="card-img cardMain">
                <img
                  width="100%"
                  height="100%"
                  src={girl}
                  alt="this is a picture of girl"
                />
                <div className="overlay d-flex mx-auto w-100">
                  <h1 className="abs  text-light fw-bold p-50p  mx-auto">
                    LADIES
                  </h1>
                </div>
              </div>
            </a>

            <h4 className="fw-bold pt-4 pb-3">LADIES</h4>
            <p className="px-3 text-theme-gray text-18">
              Explore yourself, be the glamourous persona you <br /> always
              dreamed of.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<PulseLoader />}>{/* <TopSelling /> */}</Suspense>
      <Suspense fallback={<PulseLoader />}>{/* <Trending /> */}</Suspense>

      {/* wholesales */}
      <div className="container pb-5">
        <div className="row w-100 position-relative d-flex pb-5 px-0 ">
          <div className="displayHidden col-12 col-lg-8 ms-lg-auto mx-0 overflow-hidden">
            <img
              src={wholesale}
              alt="this is a picture "
              className="w-100 cardImg"
            />
          </div>
          <div className="w-100 row me-0 px-0 me-autos position-absolute displayBlock text-start  postion-wholesale shadow-lg mx-auto ">
            <div className="col-12 col-lg-6 bg-wholeslae p-5 rounded-3 headingHover">
              <h2 className="fw-bold">For Wholesellers</h2>
              <p className="py-4 text-16 text-justify text-theme-gray ">
                Shop wigs in bulk at discounted prices in our wholesale section.
                Ideal for resellers or stocking up on your favorite styles,
                explore a wide range of wig types, colors, and styles with
                customization options, fast shipping, and dedicated support.
                Minimum order quantities may apply, start saving on your wig
                purchases now.
              </p>
              <a
                className="text-theme-gray text-decoration-none border-2 border-bottom pb-2 "
                href="/wholesale"
                target="_blank"
              >
                View Wholesale Shop
              </a>
            </div>
          </div>
        </div>
      </div>
      <Replacement></Replacement>
      <CustomWigs></CustomWigs>
      {/* what people are sating */}
      <div className="bg-testimonial   py-md-5 p-4 px-lg-0">
        <h3 className="fw-bold py9060 text-dark headingHover">
          WHAT PEOPLE ARE SAYING
        </h3>

        <div className="d-flex  row  mx-auto justify-content-center gap-4">
          <div className=" d-flex flex-column  shadow rounded-3 bg-light-test effecttest col-12 col-lg-3 p-5">
            <p className="d-flex mx-auto text-warning">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-theme-gray py-3 ">
              <img src={left} className="me-2 mb-2" width={30} />
              I had a fantastic experience and Kayla was so educated on your
              products, helpful and kind. She represented the organization in
              the best possible way, and I will refer my friends and family to
              Strut.
              <img src={right} className="ms-2 mt-2" width={30} />
            </p>
            <p className="text-center fw-bold"> @ Ellen White</p>
          </div>
          <div className="d-flex flex-column text-start  p-5 shadow rounded-3 bg-light-test effecttest col-12 col-lg-3 my-5 my-lg-0">
            <p className="d-flex mx-auto text-warning">
              {" "}
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-center text-theme-gray py-3 ">
              <img src={left} className="me-2 mb-2" width={30} />I went to one
              other store before yours, and while it wasn’t negative, I just
              didn’t get a positive, welcoming vibe. I had a close friend with
              me when I first entered your shop, with no appointment.
              <img src={right} className="ms-2 mt-2" width={30} />
            </p>
            <p className="text-center fw-bold"> @ Abdul Kader Akash </p>
          </div>
          <div className="d-flex flex-column  text-start  p-5 shadow rounded-3 bg-light-test effecttest col-12 col-lg-3">
            <p className="d-flex mx-auto text-warning">
              {" "}
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-center text-theme-gray py-3 ">
              <img src={left} className="me-2 mb-2" width={30} />
              This place is awesome! So many wig choices and Kayla was so
              helpful and answered all my questions! She helped me find the
              perfect wig! Thank you Kayla!
              <img src={right} className="ms-2 mt-2" width={30} />
            </p>
            <p className="text-center fw-bold"> @ Jennifer P.</p>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <Subscription></Subscription>
    </div>
  );
}
