/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logoblack.png";
import "./Navigation.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import maleCollection from "./image/malecollection.png";
import femaleCollection from "./image/femaleCollections.png";
import Rawhair from "./image/Rawhair.png";
import Accessories from "./image/Accessories.png";
import { Badge } from "@mui/material";
import AuthContext from "../../Contexts/AuthContext";
import LoginIcon from "@mui/icons-material/Login";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CurrencySwitch from "../Switches/CurrencySwitch";
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
import { shadows } from "@mui/system";

export default function Navigation({ renderer, currency, setCurrency }) {
  const navigate = useNavigate();
  const [CollectionDropdown, setCollectionDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [showProfileSecton, setShowProfileSection] = useState(false);

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setCartItems(cart.length);
    }
  }, [renderer]);

  const authContext = useContext(AuthContext);

  return (
    <div className="shadow">
      {/* offer div */}
      <div className="bg-top d-flex">
        <p className="m-auto text-light text-14">
          FREE INTERNATIONAL SHIPPING On Orders Over $200!
        </p>
      </div>
      {/* 2nd section email and icons  */}
      <div className="bg-light d-flex justify-content-between border-bottom px115">
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
            <YouTubeIcon />
          </a>
          <a
            className="mx-1 text-secondary my-auto"
            href="https://www.facebook.com/profile.php?id=100087712010768"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {/* login div */}
      {/* <div className="d-flex">
        <div className="d-flex ms-auto me-4">
          <div>
            <CurrencySwitch currency={currency} setCurrency={setCurrency} />
          </div>
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
      <div className="d-flex justify-contentx-between px115">
        <div className="text-start">
          <a
            href="/home"
            className="text-decoration-none text-start text-black"
          >
            <h1 className="fw-bold text44 ps-1">ICONIVE</h1>
          </a>
        </div>
        <div className="w-50 d-flex">
          <a href="/home" className="text-decoration-none mx-auto text-black">
            <h1 className="fw-bold pe-5 mb-auto mx-auto w-50">ICONIVE</h1>
          </a>
        </div>

        <div className="w-25 d-flex py-4 justify-end">
          <div class="d-flex border rounded-3 ms-auto overflow-hidden">
            <input
              class="border-0 my-auto  me-2 py-1"
              type="search"
              placeholder=" Search wigs"
              aria-label="Search"
            />
            <SearchIcon className="text-black me-2 my-auto" />
          </div>
          <div className="my-auto me-4 h-100">
            <button className="btn h-100 ms-2 btn-warning px-3 py-1 rounded-3 text-light my-auto">
              Wholesale
            </button>
          </div>
        </div>
      </div>
      <Navbar bg="light" expand="lg py-0">
        <Container className="h-100">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4 d-flex mx-auto position-relative">
              <Nav.Link href="/home" className="text-black drop">
                Home
              </Nav.Link>
              <Nav.Link href="#home" className="text-black drop">
                Hair Solution
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCollectionDropdown((prevs) => {
                    return !prevs;
                  });
                }}
                className="text-black drop"
              >
                Collections
              </Nav.Link>
              {CollectionDropdown && (
                <div className=" w-100 container d-flex position-absolute z-100 mt-50 bg-white">
                  <a
                    href="/catagory"
                    className="text-decoration-none w-25 drop"
                  >
                    <div className="w-100 p-4 border-end ">
                      <div className="w-100 ">
                        <img
                          src={maleCollection}
                          alt="This is an Image"
                          className="w-100"
                        />
                      </div>
                      <a
                        href="/catagory"
                        className="text-decoration-none text-dark fw-bold "
                      >
                        <h6 className="mt-2 fw-bold ">Gents Wigs</h6>
                      </a>
                    </div>
                  </a>
                  <a
                    href="/catagory"
                    className="text-decoration-none w-25 drop"
                  >
                    <div className="w-100 p-4 border-end ">
                      <div className="w-100 ">
                        <img
                          src={femaleCollection}
                          alt="This is an Image"
                          className="w-100"
                        />
                      </div>
                      <a
                        href="/catagory"
                        className="text-decoration-none text-dark fw-bold "
                      >
                        {" "}
                        <h6 className="mt-2 fw-bold ">Ladis Wigs</h6>
                      </a>
                    </div>
                  </a>
                  <a
                    href="/catagory"
                    className="text-decoration-none w-25 drop"
                  >
                    <div className="w-100 p-4 border-end">
                      <div className="w-100 ">
                        <img
                          src={Rawhair}
                          alt="This is an Image"
                          className="w-100"
                        />
                      </div>
                      <a
                        href="/catagory"
                        className="text-decoration-none text-dark fw-bold "
                      >
                        <h6 className="mt-2 fw-bold ">Raw Hair</h6>
                      </a>
                    </div>
                  </a>
                  <a
                    href="/catagory"
                    className="text-decoration-none w-25 drop"
                  >
                    <div className="w-100 p-4 ">
                      <div className="w-100 ">
                        <img
                          src={Accessories}
                          alt="This is an Image"
                          className="w-100"
                        />
                      </div>
                      <a
                        href="/catagory"
                        className="text-decoration-none text-dark fw-bold "
                      >
                        <h6 className="mt-2 fw-bold ">Accessories</h6>
                      </a>
                    </div>
                  </a>
                </div>
              )}

                <Nav.Link
                  href="#home"
                  className="text-black text-nav text-uppercase"
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
        </div>

        <div className="d-flex  my-auto gap-3">
          <div className="m-auto  ">
            <img src={search} alt="this is an icon" />
          </div>
          <div className="m-auto ">
            <img src={wish} alt="this is an icon" />
          </div>
          <div className="m-auto">
            <a href="/checkout">
              <Badge badgeContent={cartItems} color="primary">
                <img src={cart} alt="this is an icon" />
              </Badge>
            </a>
          </div>
          <div className="m-auto">
            <a href="/profile">
              <img
                src={profile}
                className="shadow-lg rounded-circle"
                alt="this is an icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
