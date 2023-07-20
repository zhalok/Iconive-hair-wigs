import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PulseLoader } from "react-spinners";
import apiLayerAxios from "../../utils/apiLayerAxios";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";
import cardicon1 from "../../Pages/Category/image/cardicon1.svg";

import CurrencyContext from "../../Contexts/CurrencyContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import "./CollectionCard.css";
import AuthContext from "../../Contexts/AuthContext";
import Cookies from "js-cookie";

export default function CollectionCard({ productId, index }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [inWishList, setInWishList] = useState(false);
  const [wishlistloading, setWishlistloading] = useState(false);
  // console.log(inWishList);
  const [loading, setLoading] = useState(false);

  const { currency, setCurrency } = useContext(CurrencyContext);
  // console.log()

  const getProduct = async (productId) => {
    try {
      const response = await axios.get("/products/" + productId, {
        params: {
          currency: currency,
        },
      });
      const data = response.data;
      // console.log(data);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  const addToWishlist = async () => {
    try {
      setWishlistloading(true);
      const response = await axios.post(
        "/wishlist/addProduct",
        {
          product: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );

      // checkWishList();
      setInWishList(true);
      // setWishlistloading(false);
    } catch (e) {
      setWishlistloading(false);
      console.log(e);
    }
  };

  const removeFromWishlist = async () => {
    try {
      setWishlistloading(true);
      const response = await axios.delete(
        `wishlist/removeProduct/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );
      // checkWishList();
      setInWishList(false);
      // setWishlistloading(false);
    } catch (e) {
      setWishlistloading(false);
      console.log(e);
    }
  };

  const checkWishList = async () => {
    try {
      setWishlistloading(true);
      const response = await axios.get(`/wishlist/getProduct/${productId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      // console.log(response.data);
      if (response.data) {
        setInWishList(true);
      } else setInWishList(false);
      setWishlistloading(false);
    } catch (e) {
      setWishlistloading(false);
      console.log(e);
    }
  };

  const currencyConversion = async () => {
    const response = await axios.get("/products/" + productId, {
      params: {
        currency: currency,
      },
    });
    const data = response.data;
    console.log(data);
    setProduct((prev) => {
      return { ...prev, price: data.price };
    });
  };

  useEffect(() => {
    currencyConversion();
  }, [currency]);

  const handleClick = () => {
    navigate(`/productDetails/${productId}`);
  };

  useEffect(() => {
    // console.log(productId);
    getProduct(productId);
    checkWishList();
  }, [productId]);

  // useEffect(() => {
  //   console.log(currency);
  //   changeCurrency(product.currency, currency, product.price);
  // }, [currency]);

  if (loading) return <PulseLoader color="#F50057" size={20} />;

  return (
    <div
      key={index}
      style={{
        cursor: "pointer",
      }}
      className="card-main border rounded-iconive w-25 d-flex flex-column"
    >
      <div
        className="img-card position-relative cardMain overflow-hidden porda"
        onClick={() => {
          handleClick(product._id);
        }}
      >
        <img
          className="w-100 h-100 rounded-iconive card-img2"
          src={product.photo}
          alt="This  is an  picture"
        />
        {/* <div className=" d-flex mx-auto ">
          <button className="position-absolute  d-flex btn btn-details mt-m5 px-3 py-1 f-14 text-light overlay2">
            <ShoppingCartIcon className="pe-1 my-auto" />{" "}
            <p className="m-auto"> Details</p>
          </button>
        </div> */}
      </div>
      <div className="text-start p-3 mt-auto">
        <p className=" fw-bold  ">{product.name}</p>
        {/* <p className="m-0 py-0 text-12 text-theme-gray">
          Be confident with any style you like to own from a large variety of
          styles.
        </p> */}
        <div className="d-flex justify-content-between mt-4">
          <p className="text-20 fw-bold text-dark my-auto pt-1">
            {currency == "USD" ? "$" : "৳"}
            {currencyConverter(currency, product.price)}
          </p>
          <div className="d-flex" style={{}}>
            {user && (
              <button
                className="btn px-0 mt-1"
                name="wishlist"
                onClick={() => {
                  inWishList ? removeFromWishlist() : addToWishlist();
                }}
              >
                {" "}
                {!inWishList ? (
                  <FavoriteBorderIcon
                    className="text-theme-icon"
                    sx={{ width: "29px", height: "25px" }}
                  />
                ) : (
                  <Favorite
                    className="text-theme-icon"
                    sx={{ width: "29px", height: "25px" }}
                  />
                )}
              </button>
            )}

            {/* <Favorite className="text-danger" /> */}
            <button className="btn ps-2 my-auto">
              {" "}
              <img src={cardicon1} className="w-100 " alt="this is an icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
