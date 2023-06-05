import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PulseLoader } from "react-spinners";
import apiLayerAxios from "../../utils/apiLayerAxios";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";
import cardicon1 from "../../Pages/Category/image/cardicon1.svg";
import cardicon2 from "../../Pages/Category/image/cardicon2.svg";
import CurrencyContext from "../../Contexts/CurrencyContext";

export default function CollectionCard({ productId, index }) {
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

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
      console.log(data);
      setProduct(data);
    } catch (e) {
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
    console.log(productId);
    getProduct(productId);
  }, [productId]);

  // useEffect(() => {
  //   console.log(currency);
  //   changeCurrency(product.currency, currency, product.price);
  // }, [currency]);

  if (loading) return <PulseLoader color="#F50057" size={20} />;

  return (
    <div
      onClick={() => {
        handleClick(product._id);
      }}
      key={index}
      style={{
        cursor: "pointer",
      }}
      className="card-main border rounded-iconive w-25 d-flex flex-column"
    >
      <div className="img-card position-relative">
        <img
          className="w-100 h-100 rounded-iconive"
          src={product.photo}
          alt="This  is an  picture"
        />
        <button
          onClick={
            () => {}
            // setShowModal((pre)productId => {
            //   return !pre;
            // })
          }
          // data-bs-target="#modalID"
          // data-bs-toggle="modal"
          className="position-absolute top-50 left-20 d-flex btn btn-details px-3 py-1 f-14 text-light "
        >
          <ShoppingCartIcon className="pe-1 my-auto" />{" "}
          <p className="m-auto"> Details</p>
        </button>
      </div>
      <div className="text-start p-3 mt-auto">
        <p className=" fw-bold  ">{product.name}</p>
        <p className="m-0 py-0 text-12 text-theme-gray">
          Be confident with any style you like to own from a large variety of
          styles.
        </p>
        <div className="d-flex justify-content-between mt-4">
          <p className="text-20 fw-bold text-dark my-auto pt-1">
            {currency == "USD" ? "$" : "৳"}
            {product.price}
          </p>
          <div className="d-flex">
            <button className="btn px-0 mt-1">
              {" "}
              <img src={cardicon2} className="" alt="this is an icon" />
            </button>
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
