/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./Navigation.css";
import { Badge } from "@mui/material";
import AuthContext from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "animate.css";
import CurrencyContext from "../../Contexts/CurrencyContext";
import CartContext from "../../Contexts/CartContext";
import { useSearchParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "./Toggle.css";
export default function Navigation({ renderer }) {
  const navigate = useNavigate();
  const [CollectionDropdown, setCollectionDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [usdCheck, setUsdCheck] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { user, setUser } = useContext(AuthContext);
  const { setShowCartDrawer } = useContext(CartContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const [activeNav, setActiveNav] = useState();
  const [showNavbar, setShowNavbar] = useState(false);

  // console.log("currency", currency);
  // console.log(currency);
  // console.log(user);
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log("credentials from success", credential);
        // console.log("user", user);
        const { uid, email } = user;
        axios
          .post("/auth/login", {
            email,
            password: uid,
          })
          .then((response) => {
            Cookies.set("jwt", response.data.token);
            window.location.reload();
          })
          .catch((e) => {
            // console.log(e);\
            axios
              .post("/auth/signup", {
                email,
                password: uid,
                passwordConfirm: uid,
                name: user?.displayName,
                verified: user?.emailVerified,
              })
              .then((response) => {
                Cookies.set("jwt", response.data.token);
                window.location.reload();
              })
              .catch((e) => {
                console.log(e);
                toast.error(e?.response?.data?.message);
              });
          });

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setCartItems(cart.length);
    }
  }, [renderer]);
  // console.log(user);
  // const authContext = useContext(AuthContext);

  const ref = useRef();

  useEffect(() => {}, []);

  let pathname = window.location.pathname;
  // console.log("pathname" + pathname);

  return (
    <>
      {/* div ref={ref} Commented by Akash for navbar funtion*/}
      {/* offer div */}
      <div className="bg-top d-flex ">
        <p className="m-auto text-light text-14 animate__animated animate__fadeInUp   animate__slow	5s animate__infinite	infinite">
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
            <h1 className="fw-bold text44 ps-1">ICONIVE WIGS</h1>
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
          <div className="d-flex mx-auto  justify-content-between px115 ">
            <div className="mb-auto mts-4  my-lg-auto d-flex w-12 text-start ">
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
                  <p className="my-auto ms-1">{currency}</p>
                </label>
              </div>
            </div>
            <Navbar
              collapseOnSelect
              expand="lg"
              className="sticky-top sticky-top mx-auto no-transition d-flex z-10"
            >
              <button
                class="navbar-toggler collapsed mx-auto d-flex d-lg-none flex-column justify-content-around"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => {
                  if (showNavbar) {
                    setCollectionDropdown(false);
                  }
                  setShowNavbar((prev) => !prev);
                }}
              >
                <span class="toggler-icon top-bar"></span>
                <span class="toggler-icon middle-bar"></span>
                <span class="toggler-icon bottom-bar"></span>
              </button>
              <div
                class="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <Nav className="mx-auto gap-2 gap-md-4 d-flex mx-auto position-relative">
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(1);
                    }}
                    href="/home"
                    className={`${
                      pathname.match("/home")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(2);

                      setCollectionDropdown((prevs) => {
                        return !prevs;
                      });
                    }}
                    className={`${
                      pathname.match("/catagory")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    SHOP
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(3);
                    }}
                    href="/guideme"
                    className={`${
                      pathname.match("/guideme")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    GUIDE ME
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(4);
                    }}
                    href="/customize"
                    className={`${
                      pathname.match("/customize")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    CUSTOMIZE
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(5);
                    }}
                    href="/offers"
                    className={`${
                      pathname.match("/offers")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    OFFERS
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(6);
                    }}
                    href="/joinus"
                    className={`${
                      pathname.match("/joinus")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    JOIN US
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(7);
                    }}
                    href="/blog"
                    className={`${
                      pathname.match("/blog")
                        ? "activeNav"
                        : "text-black text-nav  drop"
                    } `}
                  >
                    BLOG
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setActiveNav(8);
                    }}
                    href="/wholesale"
                    className={`${
                      pathname.match("/wholesale")
                        ? "activeNav"
                        : "text-black text-nav  drop  text-themee"
                    } `}
                  >
                    WHOLESALE
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar>
            <div className="d-flex gap-4 px-2 justify-content-end mb-auto mt-2 my-lg-auto w-12 ">
              {user && (
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    // navigate("/profile");
                    navigate("/profile?sidebar=4");
                  }}
                  className="my-auto ms-auto cursor-pointer mbs-1"
                >
                  <img
                    width={"27"}
                    src="/Image/navi/wishj.svg"
                    alt="this is an icon"
                  />
                </div>
              )}
              <div className="m-auto mbs-1">
                <Badge badgeContent={cartItems} color="primary">
                  <img
                    width={"25"}
                    src="/Image/navi/cart.svg"
                    alt="this is an icon"
                    onClick={() => {
                      setShowCartDrawer((prev) => !prev);
                    }}
                  />
                </Badge>
              </div>
              {user ? (
                <div className="myy-auto mbs-1">
                  <a href="/profile" className="text-decoration-none">
                    <div className=" rounded-circle bg-themeYellow w-36px d-flex ">
                      <h5 className=" m-auto fw-bold text-light">
                        {user?.name[0]?.toUpperCase()}
                      </h5>
                    </div>
                  </a>
                </div>
              ) : (
                <div
                  className="my-auto mbs-1"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    width={"35"}
                    src="/Image/navi/picon.png"
                    alt="this is an icon"
                    onClick={() => {
                      // navigate("/login");
                      // navigate("/login");
                      googleLogin();
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          {CollectionDropdown && (
            <div className=" w-100 row m-0  d-flex flex-column flex-lg-row position-absolute z-100 bg-white p-0 shadow-lg navOpen mtm">
              <a
                href="/catagory?category=6432a3f8bc1e9c4115b67db5&topbanner=1"
                className="text-decoration-none  col-12 col-md-3 drop p-md-4 pt-3 border-end"
              >
                <div className="w-100 ">
                  <div className="">
                    <img
                      src="/Image/navi/malenav.webp"
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
                href="/catagory?category=6432eb5a9e5f9a8abde960e0&topbanner=2"
                className="text-decoration-none col-12 col-md-3 drop p-md-4 border-end"
              >
                <div className="w-100  ">
                  <div className="w-100 ">
                    <img
                      src="/Image/navi/femalenav.webp"
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
                      src="/Image/navi/rawnav.webp"
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
                      src="/Image/navi/accnav.webp"
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
