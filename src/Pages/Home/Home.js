/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useState } from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
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
import TopSelling from "../../Components/TopSelling/TopSelling";
import Trending from "../../Components/Trending/Trending";
import Replacement from "../../Components/Replacement/Replacement";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CustomWigs from "../../Components/CustomWiga/CustomWigs";
import Subscription from "../../Components/Subscription/Subscription";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <CarouselHome></CarouselHome>


      {/* free features section */}
      <div className="container d-flex justify-content-between w-100 mt-100 py-4 ">
        <div className="w-25 d-flex px-4 border-end feature-hover">
          <div className="m-auto">
            <img src={feature1} alt="this is a picture" className="" />
          </div>
          <div className="text-start p-3">
            <p className="text-20 py-0 my-0">Free Shipping</p>
            <p className="text-15 text-theme-gray">
              Free Shipping on <br/> order over $200
            </p>
          </div>
        </div>
        <div className="w-25 d-flex px-4 border-end feature-hover">
          <div className="m-auto">
            <img src={feature2} alt="this is a picture" className="" />
          </div>
          <div className="text-start p-3">
            <p className="text-20 py-0 my-0">Secure Payment</p>
            <p className="text-15 text-theme-gray">
            All payments are done <br/> through Paystation.
            </p>
          </div>
        </div>
        <div className="w-25 d-flex px-4 border-end feature-hover">
          <div className="m-auto">
            <img src={feature3} alt="this is a picture" className="" />
          </div>
          <div className="text-start p-3">
            <p className="text-20 py-0 my-0">Support 24/7</p>
            <p className="text-15 text-theme-gray">
            Contact us 24 hours a <br/>
            day, 7 days a week
            </p>
          </div>
        </div>
        <div className="w-25 d-flex  px-4 feature-hover">
          <div className="m-auto">
            <img src={feature4} alt="this is a picture" className="" />
          </div>
          <div className="text-start p-3">
            <p className="text-20 py-0 my-0">10 Days Return</p>
            <p className="text-15 text-theme-gray">
              Return it within <br/> 10 days for exchange
            </p>
          </div>
        </div>
      </div>


      {/* choose style˚*/}
      <div className="mb-5 container">
        <div className="container w-100 d-flex gap-5 ">
          <div className="w-50 my-5 pb-4 ">
            <div className="card-img cardMain">
              <img
                width="100%"
                height="100%"
                src={pola}
                alt="this is a picture of girl"
              />
              <div className="overlay d-flex mx-auto w-100">
                <h1 className="abs  text-light fw-bold p-50p mx-auto">GENTS</h1>
              </div>
            </div>
            <h4 className="fw-bold pt-4 pb-3 ">GENTS</h4>
            <p className="px-3 text-theme-gray text-18">
            Be confident with any style you like to own from a <br/>large variety of styles.
            </p>
          </div>
          <div className="w-50 my-5 pb-4">
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

            <h4 className="fw-bold pt-4 pb-3">LADIES</h4>
            <p className="px-3 text-theme-gray text-18">
            Explore yourself, be the glamourous persona you <br/> always dreamed of.
            </p>
          </div>
        </div>
      </div>

      <TopSelling></TopSelling>
      <Trending></Trending>
      {/* wholesales */}
      <div className="container pb-5">
        <div className="w-100 position-relative d-flex pb-5">
          <div className="w-75 ms-auto">
             <img src={wholesale} alt="this is a picture " className="w-100" />
          </div>
          <div className="w-50 me-autos position-absolute bg-wholeslae text-start p-5 postion-wholesale shadow-lg ">
            <h2 className="fw-bold">For Wholesellers</h2>
            <p className="mt-3 mb-4 text-18 text-justify text-theme-gray ">Shop wigs in bulk at discounted prices in our wholesale section. Ideal for resellers or stocking up on your favorite styles, explore a wide range of wig types, colors, and styles with customization options, fast shipping, and dedicated support. Minimum order quantities may apply, start saving on your wig purchases now.</p>
            <a className="text-theme-gray text-decoration-none border-2 border-bottom pb-2 " href="" target="_blank" >View Wholesale Shop</a>
             
          </div>

          
        </div>
        
      </div>
      <Replacement></Replacement>
      <CustomWigs></CustomWigs>
    
      {/* what people are sating */}
      <div className="bg-testimonial p-md-5 p-sm-3 pt-md-5">
        <h3 className="fw-bold py9060 text-dark">WHAT PEOPLE ARE SAYING</h3>

        <div className="d-flex py-5 gap-4 mx-5">
          <div className="w-33 d-flex flex-column p-5 shadow rounded-3 bg-light-test">
            <p className="d-flex mx-auto text-warning">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-theme-gray py-3">
             <img src={left} className="me-2 mb-2" width={30} />
              I had a fantastic experience and Kayla was so educated on your
              products, helpful and kind. She represented the organization in
              the best possible way, and I will refer my friends and family to
              Strut.
              <img src={right} className="ms-2 mt-2" width={30} />
            </p>
            <p className="text-center fw-bold"> @ Ellen White</p>
          </div>
          <div className="w-33 d-flex flex-column text-start  p-5 shadow rounded-3 bg-light-test">
            <p className="d-flex mx-auto text-warning">
              {" "}
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-center text-theme-gray py-3">
            <img src={left} className="me-2 mb-2" width={30} />I went to one other store before yours, and while it wasn’t
              negative, I just didn’t get a positive, welcoming vibe. I had a
              close friend with me when I first entered your shop, with no
              appointment.
              <img src={right} className="ms-2 mt-2" width={30} />
            </p>
            <p className="text-center fw-bold"> @ Abdul Kader Akash </p>
          </div>
          <div className="w-33 d-flex flex-column  text-start  p-5 shadow rounded-3 bg-light-test">
            <p className="d-flex mx-auto text-warning">
              {" "}
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-center text-theme-gray py-3">
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
