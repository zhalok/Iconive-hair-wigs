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
    <div>
      {/* offer div */}
      <div className="bg-dark py-1 d-flex">
        <p className="mx-auto py-2 . my-auto text-light text-xs">
          FREE INTERNATIONAL SHIPPING On Orders Over $200!
        </p>
      </div>
      {/* login div */}
      <div className="d-flex">
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
      </div>
      {/* title div */}
      <div className="d-flex justify-between">
        <div className="ms-5 w-25 text-start pt-3">
          <a href="/home" className="text-decoration-none mx-auto text-black">
            {" "}
            <img
              className="me-auto -mt"
              wiidt="50px"
              height="100px"
              src={logo}
              alt="this is a logo"
            />
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

              <Nav.Link href="/checkout" className="text-black drop"></Nav.Link>
              <Nav.Link href="#home" className="text-black drop">
                {" "}
                Help me to chose
              </Nav.Link>
              <Nav.Link href="#home" className="text-black drop">
                Offers
              </Nav.Link>
              <Nav.Link href="#home" className="text-black drop">
                Services & Repair
              </Nav.Link>
              <Nav.Link href="#home" className="text-black drop">
                Join Us
              </Nav.Link>
              <Nav.Link href="#home" className="text-black drop">
                Guide
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
