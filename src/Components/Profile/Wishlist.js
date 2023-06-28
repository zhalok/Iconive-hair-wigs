/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cardicon1 from "../Images/card/cardicon1.svg";
import cardicon2 from "../Images/card/cardicon2.svg";
import cardhero from "../Images/card/cardhero.svg";
import Cookies from "js-cookie";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import currencyConverter from "../../utils/CurrencyChanger";
import CurrencyContext from "../../Contexts/CurrencyContext";
export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const { currency } = useContext(CurrencyContext);

  const navigate = useNavigate();

  const getWishListProducts = async () => {
    try {
      const response = await axios.get("/wishlist/getProducts", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      // console.log(response.data);
      setWishlist(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWishListProducts();
  }, []);

  return (
    <>
      <div>
        <div className="d-flex w-100 flex-wrap gap-4 mx-auto justify-content-center mb-5">
          {wishlist.map((wish, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
              }}
              className="card-main border rounded-iconive w-25 d-flex flex-column"
              onClick={
                () => {
                  navigate(`/productDetails/${wish?.product?._id}`);
                }
                // setShowModal((pre) => {
                //   return !pre;
                // })
              }
            >
              <div className="img-card position-relative">
                <img
                  className="w-100 h-100 rounded-iconive"
                  src={wish?.product?.photo}
                  alt="This  is an  picture"
                />
                <button
                  // data-bs-target="#modalID"
                  // data-bs-toggle="modal"
                  className="position-absolute top-50 left-20 d-flex btn btn-details px-3 py-1 f-14 text-light "
                >
                  <ShoppingCartIcon className="pe-1 my-auto" />{" "}
                  <p className="m-auto">Details</p>
                </button>
              </div>
              <div className="text-start p-3 mt-auto">
                <p className=" fw-bold  ">{wish?.product?.name}</p>
                <p className="m-0 py-0 text-12 text-theme-gray">
                  {wish?.product?.description}
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <p className="text-20 fw-bold text-dark my-auto pt-1">
                    {currency == "USD" ? "$" : "৳"}{" "}
                    {currencyConverter(currency, wish?.product?.price)}
                  </p>
                  <div className="d-flex">
                    <button className="btn px-0 mt-1">
                      {" "}
                      <img src={cardicon2} className="" alt="this is an icon" />
                    </button>
                    <button className="btn ps-2 my-auto">
                      {" "}
                      <img
                        src={cardicon1}
                        className="w-100 "
                        alt="this is an icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
