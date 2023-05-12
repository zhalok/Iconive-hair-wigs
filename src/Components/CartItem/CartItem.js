import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import checkimg from "./Image/checkimg.jpg";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import currencyConverter from "../../utils/CurrencyChanger";
export default function CartItem({
  id,
  addOns,
  quantity,
  discardCartItem,
  setCartItems,
  setProductTotal,
  currency,
}) {
  // console.log("currency", currency);
  // console.log("hello");
  // console.log(setProductTotal);
  //   console.log("addons", addOns);
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [addons, setAddons] = useState([]);

  //   const sum =
  //   console.log(sum);
  const getProduct = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      //   console.log("cart item", response.data);
      setProduct(response.data);
      setPrice(() => {
        const price = response.data.price;
        const discount = response.data.discount;
        return price - (price * discount) / 100;
      });
    } catch (e) {
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
        // console.log(cartItems);
      }
    }
  }, [product]);
  useEffect(() => {
    if (quantity) setAmount(quantity);
    if (addOns) setAddons(addOns);
  }, [quantity, addOns]);
  return (
    <div className="w-100 text-start py-4 border-bottom border-1">
      <div className="d-flex">
        <div className="w-s100 w-15 ">
          <img
            className="w-100 h-100"
            src={product.photo}
            alt="this is an icon"
          />
        </div>
        <div className="d-flex w-85 ms-2">
          <Link to={`/productDetails/${product._id}`}>
            <h6 className="fw-bold my-auto">{product.name}</h6>
          </Link>
        </div>
      </div>
      <p className="mt-1 ">
        {/* */}
        {addOns.map((e) => {
          return (
            <small style={{ marginRight: "10px" }}>
              {e.name} : {e.value}
            </small>
          );
        })}
      </p>
      <div className="d-flex justify-content-between">
        <h5 className="fw-bold my-auto">
          ${" "}
          {currencyConverter(
            currency,
            (parseFloat(price) +
              parseFloat(
                addons.reduce((accumulator, current) => {
                  return accumulator + current.price;
                }, 0)
              )) *
              amount
          )}
        </h5>
        <div>
          <ButtonGroup size="sm">
            <Button
              onClick={() => {
                console.log(amount);
                if (amount <= 1) {
                  return;
                }
                // setAmount((prevs) => {
                else {
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
                    const idx = cart.map((e) => e.product).indexOf(product._id);
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
              {amount}
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
        <div>
          <button
            size="sm"
            className="btn  py-0 me-3"
            onClick={() => {
              discardCartItem(product._id);
            }}
          >
            <DeleteIcon className="text-danger" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
