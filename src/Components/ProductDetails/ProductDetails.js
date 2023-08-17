/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SendIcon from "@mui/icons-material/Send";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import checkimg from "./Images/checkimg.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import CartContext from "../../Contexts/CartContext";
import currencyConverter from "../../utils/CurrencyChanger";
import discountCalculator from "../../utils/calculateDIscount";
import CurrencyContext from "../../Contexts/CurrencyContext";
import AuthContext from "../../Contexts/AuthContext";
import Cookies from "js-cookie";

export default function ProductDetail({ id, setCartRenderer, cartRenderer }) {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const { product } = useParams();
  const [selectedAddOns, setSelectedAddons] = useState([]);
  const [amount, setAmount] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorPrice, setSelectedColorPrice] = useState(0);
  const [sideCart, setSizeCart] = useState(false);
  const [canvus, setCanvas] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);
  const [cartItems, setCartItems] = useState([]);
  const [productTotal, setProductTotal] = useState(0);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [inWishList, setInWishList] = useState(false);
  const [wishlistloading, setWishlistloading] = useState(false);
  const { user } = useContext(AuthContext);
  const { showCartDrawer, setShowCartDrawer } = useContext(CartContext);
  const [selectedFamily, setSelectedFamily] = useState("black");
  const [colors, setColors] = useState("");

  // console.log(selectedFamily);
  // console.log(productDetails.colors);
  // useEffect(() => {
  //   if (productDetails) {
  //     setColors(
  //       productDetails.colors.filter(
  //         (e) => e.family.toLowerCase() == selectedFamily
  //       )
  //     );
  //   }
  // }, [selectedFamily, productDetails]);
  // console.log(colors);

  console.log("product Details", productDetails);

  // console.log(
  //   productDetails.colors.filter(
  //     (e) => e.family.toLowerCase() == selectedFamily
  //   )
  // );
  console.log(selectedFamily);

  const checkWishList = async () => {
    try {
      setWishlistloading(true);
      const response = await axios.get(`/wishlist/getProduct/${product}`, {
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

  const addToWishlist = async () => {
    try {
      setWishlistloading(true);
      const response = await axios.post(
        "/wishlist/addProduct",
        {
          product: productDetails._id,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      );

      checkWishList();
      // setWishlistloading(false);
    } catch (e) {
      setWishlistloading(false);
      console.log(e);
    }
  };

  const removeFromWishlist = async () => {
    try {
      setWishlistloading(true);
      const response = await axios.delete(`wishlist/removeProduct/${product}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      checkWishList();
      // setWishlistloading(false);
    } catch (e) {
      setWishlistloading(false);
      console.log(e);
    }
  };

  // const [cart]
  const discardCartItem = (product) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const _cartItems = JSON.parse(cart);
      const idx = _cartItems.map((e) => e.product).indexOf(product);

      const _product = cartItems[idx];

      if (idx != -1) _cartItems.splice(idx, 1);

      localStorage.setItem("cart", JSON.stringify(_cartItems));
      setProductTotal((prev) => prev - _product.price * _product.amount);
      setCartItems(_cartItems);
      // setCartAdded
      setCartRenderer({});
    }
  };

  const calculateTotal = async () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setProductTotal(total);
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    // console.log(cart);
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    if (cartItems && Array.isArray(cartItems)) {
      calculateTotal();
    }
  }, [cartItems]);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`/products/${product}`, {});
      setProductDetails(response.data);

      setAmount(
        discountCalculator(response.data.price, response.data.discount)
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (product) {
      getProductDetails();
      checkWishList();
    }
  }, [product]);

  useEffect(() => {
    if (productDetails) {
      // console.log("Hello");
      // console.log(productDetails);
      let cart = localStorage.getItem("cart");

      if (cart) {
        cart = JSON.parse(cart);
        if (cart.map((e) => e.product).includes(productDetails._id))
          setCartAdded(true);
        else setCartAdded(false);
      }
    }
  }, [productDetails, cartRenderer]);

  useEffect(() => {
    if (productDetails) {
      setAmount(() => {
        const discountedPrice = discountCalculator(
          productDetails.price,
          productDetails.discount
        );
        const totalAddons = selectedAddOns.reduce(
          (acc, cur) => acc + parseFloat(cur.price),
          0
        );

        const totalPrice =
          parseFloat(discountedPrice) +
          parseFloat(selectedColorPrice) +
          parseFloat(totalAddons);
        return totalPrice;
      });
    }
  }, [selectedColorPrice, selectedAddOns, productDetails]);

  if (!productDetails) return <></>;

  function handleClick() {
    navigate("/checkout");
  }

  return (
    <>
      <div className="positon-relative">
        <div className="px120 d-flex flex-column flex-lg-row my-5 row m-0">
          <div className=" col-12 col-md-6">
            <div className="w-100 position-relative">
              <img src={productDetails.photo} alt="wigs" className="w-100" />
              {productDetails.discount !== 0 && (
                <span className="position-absolute top-0 end-0 bg-danger text-light px-4 py-2 rounded-circle m-3">
                  <p className="fw-bold mb-0 mt-2 text-28">
                    {productDetails.discount}%
                  </p>
                  <p className="fw-bold my-0">OFF</p>
                </span>
              )}
            </div>
          </div>
          <div className="px-md-4 px-4 my-auto col-12 col-md-6">
            <h3 className="text-start fw-bold">{productDetails.name}</h3>

            <p className="text-start text-secondary">SKU: 2050</p>
            <div className="d-flex justify-content-between py-3 ">
              <div className="d-flex gap-3">
                {productDetails?.discount != 0 && (
                  <p className="fw-bold my-auto text-danger text-decoration-line-through text-28">
                    {currency == "USD" ? "$" : "৳"}
                    {currencyConverter(currency, productDetails?.price)}
                  </p>
                )}
                <p className="fw-bold my-auto text-28 ms-3">
                  {currency == "USD" ? "$" : "৳"}
                  {currencyConverter(
                    currency,
                    productDetails?.price -
                      (productDetails?.price * productDetails?.discount) / 100
                  )}
                </p>

                {amount -
                  (productDetails?.price -
                    (productDetails?.price * productDetails?.discount) /
                      100) !==
                  0 && (
                  <p className="fw-bold my-auto text-28 text-theme-gray">
                    + {currency == "USD" ? "$" : "৳"}
                    {currencyConverter(
                      currency,
                      amount -
                        (productDetails?.price -
                          (productDetails?.price * productDetails?.discount) /
                            100)
                    )}
                  </p>
                )}
              </div>
            </div>
            {productDetails.rating && (
              <div className="d-flex ">
                <h5 className="fw-bold my-auto d-flex">
                  {productDetails.rating.map((e) => {
                    return <StarIcon className="text-black fw-bold" />;
                  })}
                </h5>
                <p className="my-auto ms-1 text-secondary me-5">(90) Reviews</p>
              </div>
            )}
            <div className="text-start">
              {/* color */}
              <p className="text-secondary pt-2"> Colors : </p>
              <div class=" w-50p " id="accordionFlushExample">
                <div class=" p-0 m-0">
                  <nav className="d-flex justify-content-center">
                    <div
                      class="nav nav-tabs w-100 mx-auto d-flex justify-content-center"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        class="nav-link active text-black"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected={selectedFamily == "black"}
                        onClick={() => {
                          setSelectedFamily("black");
                        }}
                      >
                        Black
                      </button>
                      <button
                        class="nav-link text-black"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected={selectedFamily == "blond"}
                        onClick={() => {
                          setSelectedFamily("blonde");
                        }}
                      >
                        Blonde
                      </button>
                      <button
                        class="nav-link text-black"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected={selectedFamily == "brown"}
                        onClick={() => {
                          setSelectedFamily("brown");
                        }}
                      >
                        Brown
                      </button>
                    </div>
                  </nav>

                  <div class="tab-content" id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="row row-cols-6">
                        {productDetails?.colors
                          .filter(
                            (e) => e.family.toLowerCase() == selectedFamily
                          )
                          .map((e) => {
                            return (
                              <div
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title={e.name}
                                style={{
                                  // opacity: selectedColor == e._id ? "1" : ".5",
                                  // border: "1px solid black",
                                  padding: "10px",

                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  if (selectedColor == e._id) {
                                    setSelectedColor(null);
                                    setSelectedColorPrice(0);
                                    // setAmount((prev) => prev - e.price);
                                  } else {
                                    setSelectedColor(e?._id);
                                    setSelectedColorPrice(e?.price);
                                    // setAmount((prev) => prev + e.price);
                                  }
                                }}
                              >
                                <img
                                  src={e.photo}
                                  height={50}
                                  width={50}
                                  style={{
                                    borderRadius: "100%",
                                    border: "1px solid #00000060",
                                    transform: "scale(1)",
                                    // padding: "10px",
                                  }}
                                  className={` ${
                                    selectedColor == e._id
                                      ? "border-2 border-warning"
                                      : "border-1 "
                                  }`}
                                />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-14 text-secondary">
                    For detailed & clear color guide{" "}
                    <a
                      href="/blog"
                      className="text-decoration-none text-theme-yellow hoverBold"
                    >
                      Click here
                    </a>
                  </p>
                </div>
              </div>

              {/* length*/}
              <>
                {productDetails &&
                  productDetails.addOns.map((e) => {
                    return e ? (
                      <>
                        <p className="text-secondary pt-2 ">{e?.name} :</p>
                        <div className="d-flex gap-2 flex-wrap">
                          {e?.values.map((f) => {
                            return (
                              <button
                                className={`btn btn-outline-secondary rounded-6 btn-${
                                  selectedAddOns
                                    .map((e) => e._id)
                                    .includes(f._id)
                                    ? "dark"
                                    : "lightpro"
                                } rounded-0 fs-6`}
                                onClick={(e) => {
                                  setSelectedAddons((prev) => {
                                    const newState = [...prev];
                                    const idx = newState
                                      .map((e) => e._id)
                                      .indexOf(f._id);
                                    // console.log("selected addons idx", idx);
                                    if (idx == -1) {
                                      const idx_name = newState
                                        .map((e) => e.name)
                                        .indexOf(f.name);
                                      // console.log(idx_name);
                                      if (idx_name != -1) {
                                        newState[idx_name]._id = f._id;
                                        newState[idx_name].price = f.price;
                                        newState[idx_name].value = f.value;
                                      } else {
                                        newState.push({
                                          name: f.name,
                                          _id: f._id,
                                          price: f.price,
                                          value: f.value,
                                        });
                                      }
                                    } else {
                                      // console.log("hello");
                                      prev.splice(idx, 1);
                                    }
                                    // if (idx == -1) newState.push({ _id: f._id });
                                    // else newState.splice(idx);

                                    return [...newState];
                                  });
                                }}
                              >
                                {f.value}
                              </button>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <></>
                    );
                  })}
              </>
              <p className="mt-4 my-auto">
                <AccessTimeIcon className="me-1 my-auto" />
                <small className="text-theme-gray">
                  Processing Time:
                  <span className="text-secondary fw-bold ps-2">
                    15-20 business days
                  </span>
                </small>
              </p>
              <p className="pt-3">
                <small className="text-theme-gray">
                  {" "}
                  Processing time does not include delivery time
                </small>
              </p>
              <p className="fw-bold my-auto text-theme-gray text-20 mb-4">
                Total : ${currencyConverter(currency, amount)}
              </p>
              <div className="w-100">
                <button
                  className="btn btn-add py-2 px-5 me-4 fw-bold"
                  // data-bs-toggle="offcanvas"
                  // data-bs-target="#offcanvasRight"
                  // aria-controls="offcanvasRight"
                  onClick={() => {
                    setSizeCart((prevs) => {
                      return !prevs;
                    });

                    let cartItems = localStorage.getItem("cart");
                    if (!cartItems) {
                      cartItems = [];
                      cartItems.push({
                        product: productDetails._id,
                        addons: selectedAddOns,
                        amount: 1,
                        price: amount,
                        color: selectedColor,
                      });
                    } else {
                      cartItems = JSON.parse(cartItems);
                      if (
                        !cartItems
                          .map((e) => e.product)
                          .includes(productDetails._id)
                      ) {
                        cartItems.push({
                          product: productDetails._id,
                          addons: selectedAddOns,
                          amount: 1,
                          price: amount,
                          color: selectedColor,
                        });
                      } else {
                        cartItems.splice(
                          cartItems
                            .map((e) => e.product)
                            .indexOf(productDetails._id)
                        );
                      }
                    }
                    setCartItems(cartItems);
                    cartItems = JSON.stringify(cartItems);
                    localStorage.setItem("cart", cartItems);
                    // console.log("cartItems", typeof cartItems);
                    // setCartItems(cartItems);
                    setCartRenderer({});
                    setCartAdded((prev) => !prev);
                    setShowOffCanvas((prev) => {
                      return !cartAdded;
                    });
                  }}
                >
                  <ShoppingCartIcon className="me-2" />{" "}
                  {!cartAdded ? "ADD TO CART" : "REMOVE FROM CART"}
                </button>
                {/* <button
                  className={`btn outline-wish px-5 py-2 fs-6 `}
                  onClick={() => {
                    setSelectedAddons([]);
                  }}
                >
                  Remove Add Ons
                </button> */}
                {user && (
                  <>
                    {" "}
                    <button
                      className=" btn outline-wish py-2 px-4 mt-md-0 mt-3 text-16"
                      onClick={() => {
                        !inWishList ? addToWishlist() : removeFromWishlist();
                      }}
                    >
                      {wishlistloading
                        ? "Please wait"
                        : !inWishList
                        ? "+ WISH LIST"
                        : "- REMOVE FROM WISHLIST"}
                    </button>
                  </>
                )}
              </div>
              {/* off canvas */}
              {showOffCanvas && <></>}
            </div>
          </div>
        </div>
        <div className="px120 border-top">
          <div className="w-100 text-start p-3 pt-5 ">
            <h5 className=" pb-2 fs-4 fw-bold">Description :</h5>
            <p className="pb-0 text-16 text-theme-gray">
              {productDetails.description}
            </p>
          </div>
          <div className="w-100 text-start p-3 px-">
            <h5 className=" pb-2 fs-4 fw-bold">Shipping policy :</h5>
            <p className="pb-0 text-16 text-theme-gray">
              At Iconive, we understand how important it is for you to receive
              your products in a timely and efficient manner. That's why we
              offer fast and reliable shipping to ensure that your order arrives
              as quickly as possible.
              <button
                type="button"
                class="btn btn-outline-secondary text-15 py-0 mx-2"
                data-bs-toggle="modal"
                data-bs-target="#shippingModal"
              >
                Show More
              </button>
              <div
                class="modal fade"
                id="shippingModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        <SendIcon /> Shipping policy
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <p>
                        1 .
                        <small>
                          {" "}
                          All stock orders are processed within 24-48 hours of
                          receiving payment, and are shipped out as soon as
                          possible. However, If the product is not in stock or a
                          customer places a custom order, it might take 10-30
                          days to manufacture as these items are mostly
                          hand-crafted.
                        </small>
                      </p>{" "}
                      <p>
                        2 .
                        <small>
                          {" "}
                          We mainly Ship abroad via FedEx Logistics. We can also
                          use DHL Supply Chain, UPS etc verified International
                          Shipping Agents if needed. After the product is
                          manufactured/ is ready to be shipped, we send real
                          pictures or videos of that product to the following
                          customer if he asks for it. After buyer’s
                          confirmation, we will send the product to FedEx
                          warehouses for delivery. After handing over the
                          package to FedEx for the delivery, we will get a
                          tracking code which we will send to our customer for
                          his/her convenience. With this code, customers can
                          easily find out the product's location & whereabouts.
                        </small>
                      </p>
                      <p>
                        3 .
                        <small>
                          {" "}
                          Standard shipping usually takes between 5-12 business
                          days to arrive as per FedEx delivery system. Please
                          note that shipping times may vary depending on your
                          location and shipping method. Any issue regarding
                          product shipping is not our concern as this
                          responsibility then transfers to FedEx. So any issue
                          regarding product shipment after we handover the
                          product to FedEx is not our responsibility to solve,
                          therefore not on us. We offer free standard
                          international shipping on all orders over $200 all
                          over the world. For orders under $200, a shipping fee
                          will be applied based on the weight and size of the
                          package.Please note that international orders may be
                          subject to additional customs fees and taxes, which
                          are the responsibility of the customer.
                        </small>
                      </p>
                      <p>
                        4 .
                        <small>
                          {" "}
                          If you have any questions or concerns about shipping,
                          please don't hesitate to contact our customer service
                          team. We're always here to help and ensure that you
                          have the best shopping experience possible.
                        </small>
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-dark"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div className="w-100 text-start p-3 pb-5">
            <h5 className=" pb-2 fs-4 fw-bold">Return & Refund policy :</h5>
            <p className="pb-0 text-theme-gray text-16">
              You have 7 calendar days to return an item from the date you
              received it.
              <button
                type="button"
                class="btn btn-outline-secondary py-0 mx-2 text-15"
                data-bs-toggle="modal"
                data-bs-target="#refundandreturnpolicy"
              >
                Show More
              </button>
              <div
                class="modal fade"
                id="refundandreturnpolicy"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title fw-bold text-dark"
                        id="exampleModalLabel"
                      >
                        Return & Refund Policy
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      {/* return */}
                      <h6 className="fw-bold text-secondary border-bottom  pb-2 pt-3">
                        Returns :{" "}
                      </h6>
                      <p className="text-secondary pt-2">
                        1 .
                        <small>
                          You have 7 calendar days to return an item from the
                          date you received it
                        </small>
                      </p>
                      <p className="text-secondary">
                        2 .
                        <small>
                          To be eligible for a return, your item must be unused
                          and in the same condition that you received it. Also-{" "}
                        </small>
                        <ul>
                          <li>
                            <small>
                              Your item must be in the original packaging.
                            </small>
                          </li>
                          <li>
                            <small>
                              Your item needs to have the receipt or proof of
                              purchase.
                            </small>
                          </li>
                        </ul>
                      </p>
                      {/* refunds: */}
                      <h6 className="fw-bold text-secondary border-bottom  pb-2 pt-4">
                        Refunds :{" "}
                      </h6>
                      <p className="text-secondary">
                        1 .
                        <small>
                          Once we receive your item, we will inspect it and
                          notify you that we have received your returned item.
                          We will immediately notify you on the status of your
                          refund after inspecting the item.
                        </small>
                      </p>
                      <p className="text-secondary">
                        2 .
                        <small>
                          If your return is approved, we will initiate a refund
                          to your credit/debit card.
                        </small>
                      </p>
                      <p className="text-secondary">
                        3 .
                        <small>
                          If you find there is a problem with your order or are
                          unhappy with your hair system in any way when you
                          receive it please contact us immediately. Do not cut,
                          style, color or wash the hair or wear the hair system.
                          Our customer service team will be happy to discuss any
                          issue with you and will be able to replace your hair
                          system with another one if required.
                        </small>
                      </p>
                      <p className="text-secondary">
                        4 .
                        <small>
                          Please note that, If your ordered items were not stock
                          items, 25% amount of the full payment will be deducted
                          as service fee & rest amount will be refunded. In
                          order to cover labor and material costs, if you cancel
                          an order before you receive it, you will only receive
                          a 75% refund.
                        </small>
                      </p>
                      <p className="text-secondary">
                        5 .
                        <small>
                          If you order a wrong custom made hair system by
                          mistake, the hair system cannot be returned for a
                          refund. If you would like us to adjust it, extra cost
                          will be charged accordingly.
                        </small>
                      </p>
                      <p className="text-secondary">
                        6 .
                        <small>
                          You will be responsible for the hair systems until
                          they reach us.
                        </small>
                      </p>
                      <p className="text-secondary">
                        7 .
                        <small>
                          You will receive the credit within a certain amount
                          (usually 15-20 workdays) of days, depending on your
                          card issuer's policies.
                        </small>
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-dark"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div className="d-flex w-100 pb-5 px-md-3">
            <div className="w-100 ">
              <iframe
                width="100%"
                height="715"
                src="https://www.youtube.com/embed/1mkB-ENIeco?start=336"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {canvus && (
          <div class="w-25 h-100 top-15p end-0 position-absolute bg-light shadow canvus">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Shopping Cart</h5>
              <button
                onClick={() => {
                  setCanvas((prevs) => {
                    return !prevs;
                  });
                }}
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>
                <p className="fw-bold text-start border-bottom pb-4">
                  spend 250$ to get free shipping
                </p>
              </div>
              {[1, 2, 3].map((card, index) => (
                <div
                  key={index}
                  className="w-100 text-start p-3 border-bottom border-1"
                >
                  <div className="d-flex">
                    <div className="w-s100 w-15 ">
                      <img
                        className="w-100 h-100"
                        src={checkimg}
                        alt="this is an icon"
                      />
                    </div>
                    <div className="d-flex w-85 ms-3">
                      <p className="fw-bold my-auto">
                        8.5"x9" Blake | Silk Part Remy Human Hair Topper With
                      </p>
                    </div>
                  </div>
                  <p className="mt-2">
                    <small>Color : Natural Black With Brown Shades,</small>
                  </p>
                  <div className="d-flex justify-content-between">
                    {/* <p className="fw-bold my-auto">$ {501 * amount}</p> */}
                    <p className="fw-bold my-auto">$ {501}</p>
                    <div>
                      <ButtonGroup size="sm">
                        <Button
                          onClick={() => {
                            if (amount === 0) return;
                            else
                              setAmount((prevs) => {
                                return prevs - 1;
                              });
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
                            setAmount((prevs) => {
                              return prevs + 1;
                            });
                          }}
                          className="btn-light rounded-0 border "
                        >
                          <AddIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div>
                      <button size="sm" className="btn  py-0 me-3">
                        <DeleteIcon className="text-danger" />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-5">
                <div className="d-flex justify-content-between fw-bold px-3">
                  <p>Grand Total :</p>
                  <p>$1200</p>
                </div>
                <p className="f-16 ps-3 border-bottom pb-3 text-start">
                  Taxes and shipping calculated at checkout
                </p>
                <p className="text-theme-gray text-start px-3">
                  While the contents of your cart are currently displayed in
                  USD, the checkout will use BDT at the latest exchange rate.
                </p>

                <div className="d-flex px-3 gap-3">
                  <a href="/checkout" className="w-50">
                    <button className="btn btn-chek w-100 text-light py-2">
                      CHECK OUT
                    </button>
                  </a>
                  <a className="w-50 h-100" href="/catagory">
                    <button className="w-100 h-100 btn btn-secondary rounded-10 py-2">
                      ADD MORE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
