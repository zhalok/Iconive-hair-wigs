/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useContext, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";
import currencyConverter from "../../utils/CurrencyChanger";
import CurrencyContext from "../../Contexts/CurrencyContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Favorite } from "@mui/icons-material";
import "./CollectionCard.css";
import AuthContext from "../../Contexts/AuthContext";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

export default function CollectionCard({ product, setProduct, index }) {
  const { user, setUser } = useContext(AuthContext);
  // const [product, setProduct] = useState({});
  const [inWishList, setInWishList] = useState(false);
  const [wishlistloading, setWishlistloading] = useState(false);
  // console.log(inWishList);
  const [loading, setLoading] = useState(false);

  const { currency, setCurrency } = useContext(CurrencyContext);

  const addToWishlist = async () => {
    try {
      setWishlistloading(true);
      const response = axios.post(
        "/wishlist/addProduct",
        {
          product: product?._id,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );
      await toast.promise(response, {
        pending: "Adding to wishlist",
        success: "Added to wishlist",
        error: "Error adding to wishlist",
      });
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
      const response = axios.delete(`wishlist/removeProduct/${product?._id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      await toast.promise(response, {
        pending: "Removing from wishlist",
        success: "Removed from wishlist",
        error: "Error removing from wishlist",
      });
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
      const response = await axios.get(`/wishlist/getProduct/${product?._id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      if (response.data) {
        setInWishList(true);
      } else setInWishList(false);
      setWishlistloading(false);
    } catch (e) {
      setWishlistloading(false);
      console.log(e);
    }
  };

  const handleClick = () => {
    window.location.replace(
      `${window.location.origin}/productDetails/` + product?._id
    );
  };

  useEffect(() => {
    user && checkWishList();
  }, [product]);

  if (loading) return <PulseLoader color="#F50057" size={20} />;

  return (
    <>
      <div
        key={index}
        className="card-main border rounded-iconive w-25 d-flex flex-column mx-auto"
      >
        <div style={{ cursor: "pointer" }}>
          <Link
            to={`/productDetails/${product?._id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              className="img-card img-card position-relative card-main overflow-hidden porda mx-auto"
              style={{
                marginBottom: "30px",
              }}
            >
              <img
                className="w-100 h-100"
                src={product.photo}
                alt="This  is an  picture"
              />
              {product.discount !== 0 && (
                <span className="position-absolute top-0 end-0 bg-danger text-light px-3 py-2 rounded-circle m-3 overflow-hidden">
                  <p className="fw-bold mb-0 mt-1 text-18">
                    {product.discount}%
                  </p>
                  <p className="fw-bold my-0 pt-0 text-14">OFF</p>
                </span>
              )}
            </div>
            <p className=" fw-bold text-16 text-dark text-start px-3">
              {product.name}
            </p>
          </Link>{" "}
        </div>

        <div className="text-start px-3 pb-3 mt-auto">
          <div className="d-flex  mt-4">
            {product.discount !== 0 && (
              <p className="text-20 fw-bold text-secondary text-decoration-line-through pt-1 my-auto me-3">
                {currency === "USD" ? "$" : "৳"}
                {currencyConverter(currency, product?.price)}
              </p>
            )}
            <p className="text-20 fw-bold text-dark my-auto pt-1">
              {currency == "USD" ? "$" : "৳"}
              {currencyConverter(currency, product.price)}
            </p>

            <div className="d-flex ms-auto">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
