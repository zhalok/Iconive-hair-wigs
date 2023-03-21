/* eslint-disable jsx-a11y/img-redundant-alt */
import {React,useState} from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import "./Home.css";
import girl from "../ImagesPage/girl.png";
import pola from "../ImagesPage/Guy.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TopSelling from "../../Components/TopSelling/TopSelling";
import Trending from "../../Components/Trending/Trending";
import Replacement from "../../Components/Replacement/Replacement";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../../Components/Footer/Footer";
import CustomWigs from "../../Components/CustomWiga/CustomWigs";

export default function Home() {
  const [show,setShow]=useState(false);
  
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
                <h1 className="abs  text-light fw-bold p-50p  mx-auto">
                  GENTS
                </h1>
              </div>
            </div>

            <h4 className="fw-bold py-3 text-h my-auto">GENTS</h4>
            <p>
              Explore yourself, be the glamourous persona you always dreamed of.
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
            <p>
              Be confident with any style you like to own from a large variety
              of styles
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
      <div className="container bg-gray2 p-md-5 p-sm-3 my
      -md-5">
        <h3 className="fw-bold mb-3 pt-4">Why Choose us?</h3>
        <p>
          We are a leading manufacturing company from Bangladesh. We specialize
          in hair systems that promise a realistic look, a natural hairline,
          long durability, and reasonable prices. Here are the reasons why
          thousands of users can confidently chose us over others.
        </p>
        <div className="d-flex py-5 gap-4 mx-5">
          <div className="w-33 d-flex flex-column p-5 border border-2 rounded-3">
            <p className="text-start">
              {" "}
              <PlayArrowIcon /> Non-Surgical Hair Replacement{" "}
            </p>
            <p className="text-start">
              <PlayArrowIcon /> No harmful effect{" "}
            </p>
            <p className="text-start">
              {" "}
              <PlayArrowIcon /> Safe & easy to use{" "}
            </p>
          </div>
          <div className="w-33 d-flex flex-column text-start  p-5 border border-2 rounded-3">
            <p>
              {" "}
              <PlayArrowIcon /> Easy return policy{" "}
            </p>
            <p>
              {" "}
              <PlayArrowIcon /> Loyal customer base{" "}
            </p>
            <p>
              {" "}
              <PlayArrowIcon /> Safe & easy to use{" "}
            </p>
          </div>
          <div className="w-33 d-flex flex-column  text-start  p-5 border border-2 rounded-3">
            <p>
              {" "}
              <PlayArrowIcon /> Fast Worldwide Free Shipping{" "}
            </p>
            <p>
              {" "}
              <PlayArrowIcon /> 24/7 Customer Service{" "}
            </p>
            <p>
              {" "}
              <PlayArrowIcon /> Regular Order Status Updates{" "}
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
              {" "}
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
