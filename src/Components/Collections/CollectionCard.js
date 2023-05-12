import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PulseLoader } from "react-spinners";
import apiLayerAxios from "../../utils/apiLayerAxios";
import currencyConverter from "../../utils/CurrencyChanger";

export default function CollectionCard({ currency, productId, index }) {
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(false);

  const getProduct = async (productId) => {
    try {
      const response = await axios.get("/products/" + productId);
      const data = response.data;
      console.log(data);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  // const changeCurrency = async (from, to, amount) => {
  //   const convertedAmount = currencyConverter(from, to, amount);
  //   setProduct((prevState) => {
  //     const newState = { ...prevState };
  //     newState["price"] = convertedAmount;
  //     newState["currency"] = to;
  //     return newState;
  //   });
  // };

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
      onClick={handleClick}
      key={index}
      className="card-cat  shadow w-25 "
      style={{
        cursor: "pointer",
      }}
    >
      <div className="img-card position-relative">
        <img
          className="w-100 h-100"
          src={product.photo}
          alt="This  is an  picture"
        />
        <button
          onClick={handleClick}
          className="position-absolute top-50 left-20 d-flex btn btn-dark shodow px-3 py-1 f-14 rounded-0"
        >
          <ShoppingCartIcon className="pe-1 my-auto" /> Details
        </button>
      </div>
      <div className="text-center px-2">
        <h6 className="mt-4 mb-2 fw-bold">{product.name}</h6>
        {/* <p className="m-0">Coco Lee, coins are Kumis brown</p> */}
        <h5 className="mt-2 mb-3 fw-bold">
          {currency == "USD" ? "$" : "৳"}
          {currencyConverter(currency, product.price)}
        </h5>
      </div>
    </div>
  );
}
