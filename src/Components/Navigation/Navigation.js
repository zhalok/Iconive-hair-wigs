/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Navigation.css";
import maleCollection from "./image/malecollection.jpg";
import femaleCollection from "./image/femaleCollections.jpg";
import Rawhair from "./image/Rawhair.jpg";
import Accessories from "./image/Accessories.jpg";
import { Login } from "@mui/icons-material";
import { Badge } from "@mui/material";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profile from "./image/profile.svg";
import search from "./image/search.svg";
import wish from "./image/wishj.svg";
import cart from "./image/cart.svg";
import malepro from "../Images/navbar/malenav.svg";
import femalepro from "../Images/navbar/femalenav.svg";
import accpro from "../Images/navbar/accnav.svg";
import rawpro from "../Images/navbar/rawnav.svg";
import CurrencySwitch from "../Switches/CurrencySwitch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "animate.css";
import CurrencyContext from "../../Contexts/CurrencyContext";

export default function Navigation({ renderer }) {
  const navigate = useNavigate();
  const [CollectionDropdown, setCollectionDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [usdCheck, setUsdCheck] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { user, setUser } = useContext(AuthContext);
  // console.log("currency", currency);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setCartItems(cart.length);
    }
  }, [renderer]);

  const authContext = useContext(AuthContext);

  return (
    <>
      {/* offer div */}
      <div className="bg-top d-flex">
        <p className="m-auto text-light text-14 animate__animated  animate__fadeInUp animate__slower	animate__infinite">
          FREE INTERNATIONAL SHIPPING ON ORDER OVER $250!
        </p>
      </div>
      {/* 2nd section email and icons  */}
      <div className="bg-light d-flex justify-content-between border-bottom px115 hide">
        <div className="my-auto text-dark d-flex py-2">
          <MailOutlineIcon className="text-secondary me-1 my-auto" />
          <p className="text-14 navtxt my-auto">iconivehairwigs@gmail.com</p>
        </div>
        <div className=" text-dark d-flex gap-2">
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <FacebookIcon />
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://wa.me/message/PIZLMGBXCLUUN1"
          >
            <WhatsAppIcon />
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.instagram.com/invites/contact/?i=5jfrooti9ghz&utm_content=qa5m1k1"
          >
            <InstagramIcon />
          </a>

          <a
            className="mx-1 text-secondary my-auto"
            href="https://twitter.com/Iconivehairwigs?t=NKMVGHrLlnyuKu5bZkZ3MA&s=35"
          >
            <TwitterIcon />
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <YouTubeIcon />{" "}
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <LinkedInIcon />
          </a>
        </div>
        <CurrencySwitch currency={currency} setCurrency={setCurrency} />
      </div>
      <div></div>

      {/* login div */}
      {/* <div className="d-flex">
        <div className="d-flex ms-auto me-4">
         
          <div className="p-1 ">
            <AuthContext.Consumer>
              {(value) => {
                if (value?.user) {
                  return (
                    <>
                      <div
                        onClick={() => {
                          setShowProfileSection((prev) => !prev);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <PersonIcon />
                      </div>
                      {showProfileSecton && (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div
                            style={{ width: "100%", cursor: "pointer" }}
                            onClick={() => {
                              Cookies.remove("jwt");
                              window.location.reload();
                            }}
                          >
                            <small>Signout </small>{" "}
                          </div>
                          <div
                            style={{ width: "100%", cursor: "pointer" }}
                            onClick={() => {
                              navigate("/orders");
                            }}
                          >
                            <small>Orders</small>
                          </div>
                        </div>
                      )}
                    </>
                  );
                } else {
                  return (
                    <>
                      <div
                        onClick={() => {
                          setShowProfileSection((prev) => !prev);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <LoginIcon />
                      </div>
                      {showProfileSecton && (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div
                            style={{ width: "100%", cursor: "pointer" }}
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            <small>Login </small>{" "}
                          </div>
                          <div
                            style={{ width: "100%", cursor: "pointer" }}
                            onClick={() => {
                              navigate("/signup");
                            }}
                          >
                            <small>Signup</small>
                          </div>
                        </div>
                      )}
                    </>
                  );
                }
              }}
            </AuthContext.Consumer>
          </div>

          <div className="p-1 ">
            <a href="/checkout">
              <Badge badgeContent={cartItems} color="primary">
                <LocalMallIcon className="text-black" />{" "}
              </Badge>
            </a>
          </div>
        </div>
      </div> */}
      {/* title div */}
      <div className="  bg-white">
        <div className="d-flex justify-content-between px115">
          <a href="/home" className="text-decoration-none text-black mx-auto">
            <h1 className="fw-bold text44 ps-1">ICONIVE</h1>
          </a>
        </div>
      </div>
      <div className=" sticky-top bg-white shadow">
        <div className="d-flex mx-auto  justify-content-between px115">
          <div className="my-auto d-flex w12 text-start ">
            <div className="my-auto d-flex text-18 ps-5 pe-3 py-1 bg-light useBtn form-check form-switch">
              <input
                className="my-auto form-check-input ps-2 me-2 btnCheckUse "
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={() => {
                  setUsdCheck((prevs) => {
                    return !prevs;
                  });
                }}
              />

              <label class=" text-16 my-auto" for="flexSwitchCheckChecked">
                {usdCheck ? (
                  <p className="my-auto ms-1">BDT</p>
                ) : (
                  <p className="my-auto ms-1">USD</p>
                )}
              </label>
            </div>
          </div>
          <Navbar expand="lg m-auto " className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto gap-4 d-flex mx-auto position-relative">
                <Nav.Link href="/home" className="text-black text-nav  drop">
                  HOME
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    setCollectionDropdown((prevs) => {
                      return !prevs;
                    });
                  }}
                  className="text-black drop  text-nav"
                >
                  SHOP
                </Nav.Link>

                <Nav.Link href="#home" className="text-black drop text-nav">
                  HAIR SOLUTION
                </Nav.Link>

                <Nav.Link
                  href="#home"
                  className="text-black text-nav text-uppercase drop"
                >
                  {" "}
                  Guide ME
                </Nav.Link>

                <Nav.Link
                  href="#home"
                  className="text-black text-nav text-uppercase drop"
                >
                  customIZE
                </Nav.Link>
                <Nav.Link
                  href="#home"
                  className="text-black text-nav text-uppercase drop"
                >
                  Offers
                </Nav.Link>
                <Nav.Link
                  href="#home"
                  className="text-black text-nav text-uppercase drop"
                >
                  JOIN US
                </Nav.Link>
                <Nav.Link
                  href="#home"
                  className="text-warning text-nav text-uppercase drop"
                >
                  Wholesale
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="d-flex  my-auto gap-1 w12 justify-content-end">
            <div className="m-auto  ">
              <img width={"20"} src={search} alt="this is an icon" />
            </div>
            <div className="m-auto ">
              <img width={"27"} src={wish} alt="this is an icon" />
            </div>
            <div className="m-auto">
              <a href="/checkout">
                <Badge badgeContent={cartItems} color="primary">
                  <img width={"25"} src={cart} alt="this is an icon" />
                </Badge>
              </a>
            </div>
            <div className="m-auto">
              <a href="/profile" className="text-decoration-none">
                <div className="shadow rounded-circle bg-themeYellow w-36px d-flex ">
                  <h5 className=" m-auto fw-bold text-light">AB</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
        {CollectionDropdown && (
          <div className=" w-100  d-flex position-absolute z-100 bg-white p-0 shadow-lg navOpen">
            <a
              href="/catagory"
              className="text-decoration-none w-25 drop p-4 border-end"
            >
              <div className="w-100 ">
                <div className="">
                  <img
                    src={maleCollection}
                    alt="This is an Image"
                    className="w-100"
                  />
                </div>
                <a href="/catagory" className="text-decoration-none text-dark">
                  <p className="mt-3 text-18 nav-drop">Gents Wigs</p>
                </a>
              </div>
            </a>
            <a
              href="/catagory"
              className="text-decoration-none w-25 drop p-4 border-end"
            >
              <div className="w-100  ">
                <div className="w-100 ">
                  <img
                    src={femaleCollection}
                    alt="This is an Image"
                    className="w-100"
                  />
                </div>
                <a href="/catagory" className="text-decoration-none text-dark ">
                  <p className="mt-3 text-18 nav-drop">Ladies Wigs</p>
                </a>
              </div>
            </a>
            <a
              href="/catagory"
              className="text-decoration-none w-25 drop p-4 border-end"
            >
              <div className="w-100 ">
                <div className="w-100 ">
                  <img src={Rawhair} alt="This is an Image" className="w-100" />
                </div>
                <a href="/catagory" className="text-decoration-none text-dark ">
                  <p className="mt-3 nav-drop text-18">Raw Hair</p>
                </a>
              </div>
            </a>
            <a href="/catagory" className="text-decoration-none w-25 drop p-4">
              <div className="w-100">
                <div className="w-100 ">
                  <img
                    src={Accessories}
                    alt="This is an Image"
                    className="w-100"
                  />
                </div>
                <a href="/catagory" className="text-decoration-none text-dark ">
                  <p className="mt-3 text-18 nav-drop">Accessories</p>
                </a>
              </div>
            </a>
          </div>
        )}
      </div>
    </>
  );
}
