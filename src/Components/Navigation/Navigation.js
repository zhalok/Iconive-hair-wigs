/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Navigation.css";
import maleCollection from "./image/malenav.webp";
import femaleCollection from "./image/femalenav.webp";
import Rawhair from "./image/rawnav.webp";
import Accessories from "./image/accnav.webp";
import { Login, LoginOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import search from "./image/search.svg";
import wish from "./image/wishj.svg";
import cart from "./image/cart.svg";
import usericon from "./image/picon.png";
import "animate.css";
import CurrencyContext from "../../Contexts/CurrencyContext";
import CartContext from "../../Contexts/CartContext";
import { useSearchParams } from "react-router-dom";

export default function Navigation({ renderer }) {
  const navigate = useNavigate();
  const [CollectionDropdown, setCollectionDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [usdCheck, setUsdCheck] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { user, setUser } = useContext(AuthContext);
  const { setShowCartDrawer } = useContext(CartContext);
  const [searchParam, setSearchParam] = useSearchParams();
  // console.log(searchParam.get("category"));

  // console.log("currency", currency);
  // console.log(currency);
  // console.log(user);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setCartItems(cart.length);
    }
  }, [renderer]);

  // const authContext = useContext(AuthContext);

  return (
    <>
      {/* offer div */}
      <div className="bg-top d-flex ">
        <p className="m-auto text-light text-14">
          FREE INTERNATIONAL SHIPPING ON ORDER OVER $250!
        </p>
      </div>
      {/* 2nd section email and icons  */}
      <div className="bg-light d-flex justify-content-center justify-content-md-between border-bottom w-100 px115 flex-column flex-lg-row displayHidden">
        <div className="my-auto text-dark d-flex py-2 w-25">
          <MailOutlineIcon className="text-secondary me-1 my-auto" />
          <p className="text-14 navtxt my-auto text-secondary fw-600">
            info@iconivewigs.com
          </p>
        </div>
        <div className=" text-dark d-flex gap-2">
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
            target="_blank"
            rel="noreferrer"
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
            href="https://www.instagram.com/iconivewigs/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>

          <a
            className="mx-1 text-secondary my-auto"
            href="https://twitter.com/Iconivewigs"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://youtube.com/@IconiveWigs?si=m5ojSW2u4XrFVUCE"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />{" "}
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.linkedin.com/company/99836837/admin/feed/posts/?feedType=following"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        {/* <CurrencySwitch currency={currency} setCurrency={setCurrency} /> */}
      </div>
      <div></div>

      {/* title div */}
      <div className="  bg-white">
        <div className="d-flex justify-content-between px115">
          <a href="/home" className="text-decoration-none text-black mx-auto">
            <h1 className="fw-bold text44 ps-1">ICONIVE</h1>
          </a>
        </div>
      </div>
      <div
        className="bg-white shadow bg-body-tertiary"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "50",
        }}
      >
        <div className="position-relative ">
          <div className="d-flex mx-auto  justify-content-between px115">
            <div className="mb-auto mt-2  my-lg-auto d-flex w12 text-start ">
              <div className="my-auto d-flex text-18 ps-5 pe-3 py-1 bg-light useBtn form-check form-switch">
                <input
                  className="my-auto form-check-input ps-2 me-2 btnCheckUse "
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onClick={() => {
                    setCurrency((prevs) => {
                      return prevs === "BDT" ? "USD" : "BDT";
                    });
                  }}
                />

                <label class=" text-16 my-auto" for="flexSwitchCheckChecked">
                  {/* {usdCheck ? (
                  <p className="my-auto ms-1">BDT</p>
                ) : (
                  <p className="my-auto ms-1">USD</p>
                )} */}
                  <p className="my-auto ms-1">{currency}</p>
                </label>
              </div>
            </div>
            <Navbar expand="lg m-auto " className="">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto gap-2 gap-md-4 d-flex mx-auto position-relative">
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

                  <Nav.Link
                    href="/guideme"
                    className="text-black text-nav text-uppercase drop"
                  >
                    {" "}
                    Guide ME
                  </Nav.Link>

                  <Nav.Link
                    href="/customize"
                    className="text-black text-nav text-uppercase drop"
                  >
                    customIZE
                  </Nav.Link>
                  <Nav.Link
                    href="/offers"
                    className="text-black text-nav text-uppercase drop"
                  >
                    Offers
                  </Nav.Link>
                  <Nav.Link
                    href="/joinus"
                    className="text-black text-nav text-uppercase drop"
                  >
                    JOIN US
                  </Nav.Link>
                  <Nav.Link
                    href="/blog"
                    className="text-black text-nav text-uppercase drop"
                  >
                    BLOG
                  </Nav.Link>
                  <Nav.Link
                    href="/wholesale"
                    className="text-warning text-nav text-uppercase drop"
                  >
                    Wholesale
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="d-flex  gap-1 w12 justify-content-end mb-auto mt-2  my-lg-auto">
              <div className="m-auto  ">
                <img width={"20"} src={search} alt="this is an icon" />
              </div>
              <div className="m-auto ">
                <img width={"27"} src={wish} alt="this is an icon" />
              </div>
              <div className="m-auto">
                {/* <a href="/checkout"> */}
                <Badge badgeContent={cartItems} color="primary">
                  <img
                    width={"25"}
                    src={cart}
                    alt="this is an icon"
                    onClick={() => {
                      setShowCartDrawer((prev) => !prev);
                    }}
                  />
                </Badge>
                {/* </a> */}
              </div>
              {user ? (
                <div className="m-auto">
                  <a href="/profile" className="text-decoration-none">
                    <div className=" rounded-circle bg-themeYellow w-36px d-flex ">
                      <h5 className=" m-auto fw-bold text-light">
                        {user.name[0].toUpperCase()}
                      </h5>
                    </div>
                  </a>
                </div>
              ) : (
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <img
                    width={"35"}
                    src={usericon}
                    alt="this is an icon"
                    onClick={() => {}}
                  />
                </div>
              )}
            </div>
          </div>
          {CollectionDropdown && (
            <div className=" w-100 row m-0  d-flex flex-column flex-lg-row position-absolute z-100 bg-white p-0 shadow-lg navOpen mtm">
              <a
                href="/catagory?category=6432a3f8bc1e9c4115b67db5&=1"
                className="text-decoration-none  col-12 col-md-3 drop p-md-4 pt-3 border-end"
              >
                <div className="w-100 ">
                  <div className="">
                    <img
                      src={maleCollection}
                      alt="This is an Image"
                      className="w-100"
                    />
                  </div>

                  <p className="mt-3 text-18 nav-drop text-dark text-12p">
                    Gents Wigs
                  </p>
                </div>
              </a>
              <a
                href="/catagory?category=6432eb5a9e5f9a8abde960e0&=2"
                className="text-decoration-none col-12 col-md-3 drop p-md-4 border-end"
              >
                <div className="w-100  ">
                  <div className="w-100 ">
                    <img
                      src={femaleCollection}
                      alt="This is an Image"
                      className="w-100"
                    />
                  </div>

                  <p className="mt-3 text-18 nav-drop text-dark text-12p">
                    Ladies Wigs
                  </p>
                </div>
              </a>
              <a
                href="/catagory?category=64343a704fb336001b129958&topbanner=3"
                className="text-decoration-none col-12 col-md-3 drop p-md-4 border-end"
              >
                <div className="w-100 ">
                  <div className="w-100 ">
                    <img
                      src={Rawhair}
                      alt="This is an Image"
                      className="w-100"
                    />
                  </div>

                  <p className="mt-3 nav-drop text-18 text-dark text-12p">
                    Raw Hair
                  </p>
                </div>
              </a>
              <a
                href="/catagory?category=64343aaf4fb336001b12995c&topbanner=4"
                className="text-decoration-none col-12 col-md-3 drop p-md-4"
              >
                <div className="w-100">
                  <div className="w-100 ">
                    <img
                      src={Accessories}
                      alt="This is an Image"
                      className="w-100"
                    />
                  </div>
                  <p className="mt-3 text-18 nav-drop text-dark text-12p">
                    Accessories
                  </p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
