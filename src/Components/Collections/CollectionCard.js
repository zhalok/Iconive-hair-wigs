/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useContext, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";
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
      // console.log(e);
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
      // console.log(e);
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
    // console.log(data);
    setProduct((prev) => {
      return { ...prev, price: data.price };
    });
  };

  useEffect(() => {
    currencyConversion();
  }, [currency]);

  const handleClick = () => {
    // navigate(`/productDetails/${productId}`);
    window.location.replace(
      `${window.location.origin}/productDetails/` + productId
    );
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
      className="card-main border rounded-iconive  mx-auto d-flex flex-column"
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
        {product.discount !== 0 && (
          <span className="position-absolute top-0 end-0 bg-danger text-light px-3 py-2 rounded-circle m-3 overflow-hidden">
            <p className="fw-bold mb-0 mt-1 text-18">{product.discount}%</p>
            <p className="fw-bold my-0 pt-0 text-14">OFF</p>
          </span>
        )}
      </div>
      <p className="text-start px-3 pt-3 fw-bold  ">{product.name}</p>
      <div className="d-flex mt-auto px-3 pb-3">
        {product.discount !== 0 && (
          <p className="text-20 fw-bold text-secondary text-decoration-line-through pt-1 my-auto me-3">
            {currency === "USD" ? "$" : "৳"}
            {currencyConverter(currency, product?.price)}
          </p>
        )}

        <p className="text-20 fw-bold text-dark my-auto pt-1 ">
          {currency === "USD" ? "$" : "৳"}
          {currencyConverter(
            currency,
            discountCalculator(product.price, product.discount)
          )}
        </p>
        <div className="d-flex ms-auto" style={{}}>
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
          {/* <button className="btn ps-2 my-auto">
              {" "}
              <img src={cardicon1} className="w-100 " alt="this is an icon" />
            </button> */}
        </div>
      </div>
    </div>
  );
}
