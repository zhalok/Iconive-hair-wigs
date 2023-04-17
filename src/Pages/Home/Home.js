/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useState } from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import "./Home.css";
import girl from "../ImagesPage/girl.png";
import pola from "../ImagesPage/Guy.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TopSelling from "../../Components/TopSelling/TopSelling";
import Trending from "../../Components/Trending/Trending";
import Replacement from "../../Components/Replacement/Replacement";
import StarIcon from "@mui/icons-material/Star";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CustomWigs from "../../Components/CustomWiga/CustomWigs";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <CarouselHome></CarouselHome>
      {/* choose style˚*/}
      <div className="my-5 container p-md-5 ps-r">
        <h5 className="fw-bold bg-white px-4 py-3 w-25 mx-auto -mb abs mb-3">
          Choose your style
        </h5>
        <hr />
        <div className="container wf-100 d-flex gap-5 mt-3 ">
          <div className="w-50 my-5 shadow pb-4 ">
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

            <h4 className="fw-bold py-3 text-h my-auto">GENTS</h4>
            <p className="px-3">
              Be confident with any style you like to own from a large variety
              of styles
            </p>
            <button className="btn btn-gray text-light px-5 py-2 rounded-0">
              SHOP THE COLLECTION
            </button>
          </div>

          <div className="w-50 my-5 shadow pb-4">
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

            <h4 className="fw-bold py-3">LADIES</h4>
            <p className="px-3">
              Explore yourself, be the glamourous persona you always dreamed of.
            </p>
            <button className="btn btn-gray text-light px-5 py-2 rounded-0">
              SHOP THE COLLECTION
            </button>
          </div>
        </div>
      </div>
      <TopSelling></TopSelling>
      <Trending></Trending>
      <CustomWigs></CustomWigs>
      <Replacement></Replacement>
      {/* why choose us */}
      <div className="my-5">
        <div
          className="container bg-gray2 p-md-5 p-sm-3 my
      -md-5        "
        >
          <h3 className="fw-bold mb-3 py-4">Why Choose us?</h3>
          <p>
            Welcome to Iconive, your one-stop destination for premium quality
            wigs. We're a team of passionate hair enthusiasts dedicated to
            providing our customers with the very best in hair products and
            customer service. Our exquisite collection of wigs is designed to
            cater to the needs of every individual, regardless of age or gender.
            We understand that choosing the perfect wig can be overwhelming,
            which is why we strive to make your shopping experience seamless and
            enjoyable.
          </p>
          <p>
            Our journey started with a simple idea: to create wigs and
            extensions that look and feel just like natural hair. Over the
            years, we've honed our skills and perfected our techniques to create
            products that are both beautiful and functional.
          </p>
          <p>
            At Iconive, we take pride in our commitment to delivering superior
            quality wigs that are crafted with precision and care. Our team of
            expert craftsmen utilizes state-of-the-art technology and the finest
            materials to create wigs that are not only stylish and fashionable
            but also comfortable and long-lasting.
          </p>
          <p>
            But we're more than just a wig and extension retailer – we're a
            community. We're here to support you on your hair journey, offering
            expert advice and personalized recommendations to help you find the
            perfect product for your needs.
          </p>
          <div className="d-flex py-4 gap-4 mx-md-5">
            <div className="w-33 d-flex flex-column p-4  rounded-3">
              <p className="text-start">
                <LabelImportantIcon /> Non-Surgical Hair Replacement{" "}
              </p>
              <p className="text-start">
                <LabelImportantIcon /> No harmful effect{" "}
              </p>
              <p className="text-start">
                <LabelImportantIcon /> Safe & easy to use{" "}
              </p>
            </div>
            <div className="w-33 d-flex flex-column text-start  p-4  rounded-3">
              <p>
                <LabelImportantIcon /> Easy return policy{" "}
              </p>
              <p>
                <LabelImportantIcon /> Loyal customer base{" "}
              </p>
              <p>
                <LabelImportantIcon /> Safe & easy to use{" "}
              </p>
            </div>
            <div className="w-33 d-flex flex-column  text-start  p-4 rounded-3">
              <p>
                <LabelImportantIcon /> Fast Worldwide Free Shipping{" "}
              </p>
              <p>
                <LabelImportantIcon /> 24/7 Customer Service{" "}
              </p>
              <p>
                <LabelImportantIcon /> Regular Order Status Updates{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* what people are sating */}
      <div className=" bg-dark p-md-5 p-sm-3 pt-md-5">
        <h3 className="fw-bold mb-3 pt-4 text-light">WHAT PEOPLE ARE SAYING</h3>

        <div className="d-flex py-5 gap-4 mx-5">
          <div className="w-33 d-flex flex-column p-5 shadow rounded-3 bg-light">
            <p className="d-flex mx-auto">
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p>
              “I had a fantastic experience and Kayla was so educated on your
              products, helpful and kind. She represented the organization in
              the best possible way, and I will refer my friends and family to
              Strut.”{" "}
            </p>
            <p className="text-center fw-bold"> @ Ellen White</p>
          </div>
          <div className="w-33 d-flex flex-column text-start  p-5 shadow rounded-3 bg-light">
            <p className="d-flex mx-auto">
              {" "}
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-center">
              "I went to one other store before yours, and while it wasn’t
              negative, I just didn’t get a positive, welcoming vibe. I had a
              close friend with me when I first entered your shop, with no
              appointment."
            </p>
            <p className="text-center fw-bold"> @ Abdul Kader Akash </p>
          </div>
          <div className="w-33 d-flex flex-column  text-start  p-5 shadow rounded-3 bg-light">
            <p className="d-flex mx-auto">
              {" "}
              <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
            </p>
            <p className="text-center">
              “This place is awesome! So many wig choices and Kayla was so
              helpful and answered all my questions! She helped me find the
              perfect wig! Thank you Kayla!!!!”{" "}
            </p>
            <p className="text-center fw-bold"> @ Jennifer P.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
