import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import checkimg from "./Image/checkimg.jpg";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import currencyConverter from "../../utils/CurrencyChanger";
import CurrencyContext from "../../Contexts/CurrencyContext";
import { PulseLoader } from "react-spinners";

export default function CartItem({
  id,
  addOns,
  quantity,
  discardCartItem,
  setCartItems,
  setProductTotal,
  setCartAdded,
  price,
}) {
  console.log("product", id);
  // console.log("currency", currency);
  // console.log("hello");
  // console.log(setProductTotal);
  //   console.log("addons", addOns);
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  // const [price, setPrice] = useState(0);
  const [addons, setAddons] = useState([]);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const [loading, setLoading] = useState(false);
  //   const sum =
  //   console.log(sum);
  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/products/${id}`);
      //   console.log("cart item", response.data);
      setProduct(response.data);
      // setPrice(() => {
      //   const price = response.data.price;
      //   const discount = response.data.discount;
      //   return price - (price * discount) / 100;
      // });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  useEffect(() => {
    if (product) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        let cartItems = JSON.parse(cart);
      }
    }
  }, [product]);
  useEffect(() => {
    if (quantity) setAmount(quantity);
    if (addOns) setAddons(addOns);
  }, [quantity, addOns]);

  if (loading) return <PulseLoader />;

  return (
    <div className="w-100 text-start py-4 border-bottom border-1 d-flex ">
      <div className="d-flex w-25">
        <div className="w-100 rounded-6 ">
          <img
            className="w-100 h-100 "
            src={product.photo}
            alt="this is an icon"
          />
        </div>
      </div>
      <div className="w-75 ps-1">
        <div>
          <Link
            className="text-dark text-decoration-none text-uppercase "
            to={`/productDetails/${product._id}`}
          >
            <h6 className="fw-bold my-auto mt-2 mb-0">{product.name}</h6>
          </Link>
          <p className="mt-1 ">
            {/* */}
            {addOns.map((e) => {
              return (
                <small
                  className="text-theme-gray"
                  style={{ marginRight: "10px" }}
                >
                  {e.name} : {e.value}
                </small>
              );
            })}
          </p>
        </div>
        <div className="d-flex justify-content-between ">
          <p className="fw-bold my-auto text-18">
            {currency == "USD" ? "$" : "৳"}{" "}
            {currencyConverter(currency, price * amount)}
          </p>
          <div className="ps-1">
            <ButtonGroup size="sm " className="btn-group-sm">
              <Button
                onClick={() => {
                  console.log(amount);
                  if (amount <= 1) {
                    return;
                  } else {
                    setAmount((prevs) => prevs - 1);
                    console.log("hello");
                    setCartItems((prevCart) => {
                      const newCart = [...prevCart];
                      const idx = newCart
                        .map((e) => e.product)
                        .indexOf(product._id);
                      if (idx != -1)
                        newCart[idx].amount = Math.max(
                          0,
                          newCart[idx].amount - 1
                        );
                      return [...newCart];
                    });
                    setProductTotal((prev) => prev - product.price);
                    let cart = localStorage.getItem("cart");
                    if (cart) {
                      cart = JSON.parse(cart);
                      const idx = cart
                        .map((e) => e.product)
                        .indexOf(product._id);
                      cart[idx].amount--;
                      localStorage.setItem("cart", JSON.stringify(cart));
                    }
                  }
                }}
                className="btn-light rounded-0 border"
              >
                <RemoveIcon />
              </Button>
              <Button className="btn-light rounded-0 border px-4">
                <h5>{amount}</h5>
              </Button>
              <Button
                onClick={() => {
                  setAmount((prevs) => prevs + 1);
                  setCartItems((prevCart) => {
                    const newCart = [...prevCart];
                    const idx = newCart
                      .map((e) => e.product)
                      .indexOf(product._id);
                    if (idx != -1) newCart[idx].amount += 1;
                    return [...newCart];
                  });

                  setProductTotal((prev) => prev + product.price);
                  let cart = localStorage.getItem("cart");
                  if (cart) {
                    cart = JSON.parse(cart);
                    const idx = cart.map((e) => e.product).indexOf(product._id);
                    cart[idx].amount++;
                    localStorage.setItem("cart", JSON.stringify(cart));
                  }

                  // });
                }}
                className="btn-light rounded-0 border "
              >
                <AddIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className="my-auto">
            <button
              className="btn  py-0 "
              onClick={() => {
                discardCartItem(product._id);
                // setCartAdded((prev) => !prev);
              }}
            >
              <DeleteIcon className="text-danger" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
