/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./Navigation.css";
import maleCollection from "./image/malecollection.png";
import femaleCollection from "./image/femaleCollections.png";
import Rawhair from "./image/Rawhair.png";
import Accessories from "./image/Accessories.png";
import { Badge } from "@mui/material";
import { render } from "@testing-library/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from "./image/profile.svg";
import search from "./image/search.svg";
import wish from "./image/wishj.svg";
import cart from "./image/cart.svg";
import { shadows } from "@mui/system";

export default function Navigation({ renderer }) {
  const [CollectionDropdown, setCollectionDropdown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setCartItems(cart.length);
    }
    // setCartItems(renderer);
  }, [renderer]);
  // console.log(CollectionDropdown);
  console.log(renderer);

  return (
    <div>
      {/* offer div */}
      <div className="bg-dark py-1 d-flex">
        <p className="mx-auto py-2 . my-auto text-light text-xs">
          FREE INTERNATIONAL SHIPPING On Orders Over $200!
        </p>
      </div>
      {/* 2nd section email and icons  */}
      <div className="bg-light d-flex justify-content-between border-bottom px115">
        <div className="my-auto text-dark d-flex py-2">
        <MailOutlineIcon className="text-secondary me-1 my-auto"/>
        <p className="text-14 navtxt my-auto">iconivehairwigs@gmail.com</p>
        </div>
        <div className=" text-dark d-flex gap-2">
            <a
              className="mx-1 text-secondary my-auto"
              href="https://www.facebook.com/profile.php?id=100087712010768"
            >
             
                <FacebookIcon />
             
            </a>
            <a  className="mx-1 text-secondary my-auto"
             href="https://wa.me/message/PIZLMGBXCLUUN1"> 
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
          <div className="p-1  ">
            <FavoriteBorderIcon className="text-black" />
          </div>
          <div className="p-1 ">
            <PersonIcon className="text-black" />
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
        <a href="/home" className="text-decoration-none text-start text-black">
            <h1 className="fw-bold text44 ">ICONIVE</h1>
          </a>
        </div>
        <div className="d-flex mx-auto">
        <Navbar  expand="lg m-auto ">
     
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4 d-flex mx-auto position-relative">
              <Nav.Link href="/home" className="text-black text-18 fw-bold  drop">
                HOME
              </Nav.Link>
             
              <Nav.Link
                onClick={() => {
                  setCollectionDropdown((prevs) => {
                    return !prevs;
                  });
                }}
                className="text-black drop fw-bold text-18"
              >
                SHOP
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
              
               <Nav.Link href="#home" className="text-black drop text-18 fw-bold ">
                HAIR SOLUTION
              </Nav.Link>
             
              <Nav.Link href="#home" className="text-black text-18 fw-bold text-uppercase">
                {" "}
                Guide ME
              </Nav.Link>
           
              <Nav.Link href="#home" className="text-black text-18 fw-bold text-uppercase drop">
              customIZE
              </Nav.Link>
              <Nav.Link href="#home" className="text-black text-18 fw-bold text-uppercase drop">
                Offers
              </Nav.Link>
              <Nav.Link href="#home" className="text-black text-18 fw-bold text-uppercase drop">
                JOIN US
              </Nav.Link>
              <Nav.Link href="#home" className="text-warning text-18 fw-bold text-uppercase drop">
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
            <img src={profile} className="shadow-lg rounded-circle" alt="this is an icon" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
