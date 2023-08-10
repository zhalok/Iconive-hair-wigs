/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import sp1 from "../Images/footer/sp1.svg";
import sp2 from "../Images/footer/sp2.svg";
import sp3 from "../Images/footer/sp3.svg";
import p1 from "../Images/footer/p1.svg";
import p2 from "../Images/footer/p2.svg";
import p3 from "../Images/footer/p3.svg";
import p4 from "../Images/footer/p4.svg";
import p5 from "../Images/footer/p5.svg";

export default function Footer() {
  return (
    <div className="w-100 bg-footer">
      <div className=" d-flex w-100">
        <div className="bg-footer py-5  d-flex flex-column  flex-lg-row justify-content-between containerpro w-100   row mx-auto ">
          <div className="  border-secondary col-12 col-lg-4">
            <div>
              <p className="text-16 text-lg-start text-center ms-2">
                Shipping Partner
              </p>
              <div className="text-lg-start text-center">
                <img src={sp1} className="" alt="this is an icon" />
                <img src={sp2} className="" alt="this is an icon" />
                <img src={sp3} className="" alt="this is an icon" />
              </div>
              <p className="text-16 text-lg-start text-center ms-2">
                Accepted Payment Methods
              </p>
              <div className="text-lg-start text-center">
                <img src={p1} className="" alt="this is an icon" />
                <img src={p2} className="" alt="this is an icon" />
                <img src={p3} className="" alt="this is an icon" />
                <img src={p4} className="" alt="this is an icon" />
                <img src={p5} className="" alt="this is an icon" />
              </div>
            </div>
          </div>
          <div className=" d-flex border-start-end flex-column my-lg-auto col-12 col-lg-4 my-5">
            <h3 className="text-theme-gray fw-bold ">ICONIVE</h3>
            <p className="mt-4">
              <LocationOnIcon className="text-secondary me-1 fs-5" />
              <small className="text-secondary ">
                House-#1/B, Garib-E-Newaj Avenue Road, <br /> Sector-11, Uttara,
                Dhaka.
              </small>
            </p>
            <div className="mt-1 text-dark d-flex gap-2 mx-auto flex-wrap justify-content-center">
              <a
                className="mx-1"
                href="https://www.facebook.com/profile.php?id=100087712010768"
              >
                <button className="btn btn-outline-secondary p-2 rounded-circle">
                  <FacebookIcon />
                </button>
              </a>
              <a className="mx-1" href="https://wa.me/message/PIZLMGBXCLUUN1">
                <button className="btn btn-outline-secondary p-2 rounded-circle">
                  <WhatsAppIcon />
                </button>
              </a>
              <a
                className="mx-1"
                href="https://www.instagram.com/invites/contact/?i=5jfrooti9ghz&utm_content=qa5m1k1"
              >
                <button className="btn btn-outline-secondary p-2 rounded-circle">
                  <InstagramIcon />
                </button>
              </a>

              <a
                className="mx-1"
                href="https://twitter.com/Iconivehairwigs?t=NKMVGHrLlnyuKu5bZkZ3MA&s=35"
              >
                <button className="btn btn-outline-secondary p-2 rounded-circle">
                  <TwitterIcon />
                </button>
              </a>
              <a
                className="mx-1"
                href="https://www.facebook.com/profile.php?id=100087712010768"
              >
                <button className="btn btn-outline-secondary p-2 rounded-circle">
                  <YouTubeIcon />
                </button>
              </a>
              <a
                className="mx-1"
                href="https://www.facebook.com/profile.php?id=100087712010768"
              >
                <button className="btn btn-outline-secondary p-2 rounded-circle">
                  <LinkedInIcon />
                </button>
              </a>
            </div>
          </div>
          <div className=" d-flex  border-secondary col-12 col-lg-4 flex-column flex-lg-row">
            <div className="text-lg-end  mx-auto">
              <h6 className="fw-bold pb-3 ">Our Policies</h6>
              <a href="/privacy" className="text-decoration-none">
                <p className="text-16">Privacy Policy</p>
              </a>
              <a href="/terms" className="text-decoration-none">
                <p className="text-16">Terms & Conditions</p>
              </a>
              <a href="/return" className="text-decoration-none">
                <p className="text-16">Return and Refund </p>
              </a>

              <a href="/shipping" className="text-decoration-none">
                <p className="text-16">Shipping Policy</p>
              </a>
            </div>
            <div
              className="text-lg-end mx-auto mt-4 mt-lg-0
            "
            >
              <h6 className="fw-bold pb-3">Our Profile</h6>
              <a href="/about" className="text-decoration-none">
                <p className="text-16">About Us</p>
              </a>
              <a href="/shippingPartner" className="text-decoration-none">
                <p className="text-16">Our Shipping Partners</p>
              </a>
              <a href="/paymentMethod" className="text-decoration-none">
                <p className="text-16">Payment methods</p>
              </a>
              <a href="/faq" className="text-decoration-none">
                <p className="text-16">FAQ</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-pro text-light m-0 py-3">
        <p className=" border-dark  m-0">
          <small className="text-white-50">
            &#9400; All Rights Reserved by{" "}
            <span className="text-light"> Iconve Hair Wigs</span>
          </small>
        </p>
      </div>
    </div>
  );
}
