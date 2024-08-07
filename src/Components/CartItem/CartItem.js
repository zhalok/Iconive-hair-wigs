import React, { useEffect, useState, useContext } from "react";
import axios from "../../utils/axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import currencyConverter from "../../utils/CurrencyChanger";
import CurrencyContext from "../../Contexts/CurrencyContext";
import { PulseLoader } from "react-spinners";
import CartContext from "../../Contexts/CartContext";
import "./CartItem.css";

export default function CartItem({
  id,
  addOns,
  quantity,
  discardCartItem,
  price,
}) {
  console.log("product", id);
  const { setCartRenderer } = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(0);

  const [addons, setAddons] = useState([]);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const [loading, setLoading] = useState(false);
  const [stateChanger, setStateChanger] = useState({});

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/products/${id}`);

      setProduct(response.data);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      // console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

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
            <ButtonGroup size="sm " className="btn-group-sm fontP">
              <Button
                onClick={() => {
                  // console.log(amount);
                  if (amount <= 1) {
                    return;
                  } else {
                    let cart = localStorage.getItem("cart");
                    if (cart) {
                      cart = JSON.parse(cart);
                      const idx = cart
                        .map((e) => e.product)
                        .indexOf(product._id);
                      if (cart[idx].amount > 1) {
                        cart[idx].amount--;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        // setStateChanger({});
                        setCartRenderer({});
                        // setUpdate({});
                      }
                    }
                  }
                }}
                className="btn-light rounded-0 border fontP"
              >
                <RemoveIcon />
              </Button>
              <Button className="btn-light rounded-0 border px-4 fontP">
                <h6 className="fontP my-auto">{amount}</h6>
              </Button>
              <Button
                onClick={() => {
                  let cart = localStorage.getItem("cart");
                  if (cart) {
                    cart = JSON.parse(cart);
                    const idx = cart.map((e) => e.product).indexOf(product._id);
                    cart[idx].amount++;
                    localStorage.setItem("cart", JSON.stringify(cart));

                    setCartRenderer({});
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
