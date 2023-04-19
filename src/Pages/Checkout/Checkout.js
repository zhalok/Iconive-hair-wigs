import React, { useEffect, useState } from "react";
import { City, Country, State } from "country-state-city";
import Selector from "./Selector.jsx";
import "./checkout.css";
import locicon from "./Image/icons/location-pin.png";
import callicon from "./Image/icons/phone-call.png";
import mailicon from "./Image/icons/email.png";

import CartItem from "../../Components/CartItem/CartItem.js";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryCharge, setDeliveryCharge] = useState(20);
  // console.log("cart itmes", cartItems);
  const [productTotal, setProductTotal] = useState(0);
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();
  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  // console.log("cartItems", cartItems);
  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  const discardCartItem = (product) => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const _cartItems = JSON.parse(cart);
      const idx = _cartItems.map((e) => e.product).indexOf(product);
      // console.log(idx);
      const _product = cartItems[idx];
      // console
      if (idx != -1) _cartItems.splice(idx, 1);
      // console.log(_cartItems);
      localStorage.setItem("cart", JSON.stringify(_cartItems));
      setProductTotal((prev) => prev - _product.price * _product.amount);
      setCartItems(_cartItems);
    }
  };
  // console.log("product total", val);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    // console.log("hello");
    if (cart) {
      setCartItems(JSON.parse(cart));
      const _cartItems = JSON.parse(cart);
      setProductTotal(
        _cartItems.reduce((acc, val) => acc + val.price * val.amount, 0)
      );
    }
  }, []);

  useEffect(() => {
    if (productTotal > 200) setDeliveryCharge(0);
  }, [productTotal]);
  const [checkAddress, setCheckAddress] = useState(false);
  const [checkRefund, setCheckRefund] = useState(true);
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div>
        {/* top image */}
        <div className="top-banner ">
          <div className="xyauto">
            <h3 className="big-txt text-dark">Checkout</h3>
            <p className="">Home / Checkout</p>
          </div>
        </div>

        {/* main section */}
        <div className="container py-5 ">
          <div className="row  shadow">
            <div className="col-8 p-4 ">
              <div className="text-start mb-5">
                <h4 className="mb-3">Already registered?</h4>
                <button className="btn btn-dark rounded-0 px-4 fs-6">
                  <small>CLICK HERE TO LOGIN</small>
                </button>
              </div>
              <h4 className="text-theme text-start ">Delivery Address</h4>
              <form action="" className="text-start pe-4">
                <div className="d-flex pt-4">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      Name<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1 d-flex">
                      Phone Number <span className="spanRed"> *</span>
                    </p>
                    <input
                      type="number"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                </div>
                <div className="d-flex pt-4">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1 d-flex">
                      Email <span className="spanRed"> *</span>
                    </p>
                    <input
                      type="email"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1">
                      Password<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75  px-2 rounded-0 border-1"
                    />
                  </div>
                </div>
                <div className="d-flex pt-4 ">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      Address<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                </div>

                <div className="pt-4 h-100  d-flex justify-content-between">
                  <div className="w-30 ">
                    <p className="text-start mb-1">
                      Address<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-30 ">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-30 ">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                </div>
                <div className="form-check form-switch pt-5">
                  <input
                    onClick={() => {
                      setCheckAddress((prevState) => {
                        return !prevState;
                      });
                    }}
                    className={` form-check-input btn-dark bg-light  ${
                      checkAddress && "bg-dark"
                    }`}
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckChecked"
                  >
                    Billing another address
                  </label>
                </div>
                {/* billing another address  */}
                {checkAddress && (
                  <div>
                    <div className="d-flex pt-4">
                      <div className="w-50 pe-lg-4">
                        <p className="text-start mb-1">
                          Name<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                      <div className="w-50 ">
                        <p className="text-start mb-1 d-flex">
                          Phone Number <span className="spanRed"> *</span>
                        </p>
                        <input
                          type="number"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                    </div>
                    <div className="d-flex pt-4 ">
                      <div className="w-50 pe-lg-4">
                        <p className="text-start mb-1">
                          Address<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                      <div className="w-50 ">
                        <p className="text-start mb-1">
                          City<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                    </div>
                    <div className="pt-4 h-100  d-flex justify-content-between">
                      <div className="w-30 ">
                        <p className="text-start mb-1">
                          Address<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                      <div className="w-30 ">
                        <p className="text-start mb-1">
                          City<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                      <div className="w-30 ">
                        <p className="text-start mb-1">
                          City<span className="spanRed">*</span>
                        </p>
                        <input
                          type="text"
                          name="contactName"
                          id=""
                          className="w-100 h-75 px-2 rounded-0 border-1"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <input
                  type="submit"
                  value="SUBMIT"
                  className="border-0 btn-dark text-white px-5 py-3 my-5 w-100 pe-4"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(cartItems);
                    // console.log("hello");
                  }}
                />
              </form>
            </div>
            <div className="col-4 border-start p-4 ">
              <div>
                {cartItems &&
                  cartItems.map((card, index) => (
                    <CartItem
                      id={card.product}
                      addOns={card.addons}
                      quantity={card.amount}
                      discardCartItem={discardCartItem}
                      setCartItems={setCartItems}
                      setProductTotal={setProductTotal}
                    />
                  ))}
              </div>
              <div>
                <div className="w-100 hc-50 d-flex my-4">
                  <input
                    type="text"
                    name="cupone"
                    id="#cupone"
                    placeholder="Coupon Code "
                    className="w-75 h-100 px-2 rounded-0 border-1 "
                  />
                  <button className="w-25 h-100 btn btn-dark rounded-0">
                    APPLY
                  </button>
                </div>
                <div className="d-flex justify-content-between my-2 border-bottom">
                  <h6 className="fw-bold">Products </h6>
                  <p>${productTotal}</p>
                </div>
                <div className="d-flex justify-content-between  my-2 border-2 border-bottom">
                  <h6 className="fw-bold">Subtotal </h6>
                  <p>${deliveryCharge}</p>
                </div>
                <div className="d-flex justify-content-between  ">
                  <h5 className="fw-bold">Total </h5>
                  <p className="fw-bold">
                    ${parseFloat(productTotal) + parseFloat(deliveryCharge)}
                  </p>
                </div>
                <div className="form-check form-switch pt-5 flex">
                  <input
                    onClick={() => {
                      setCheckRefund((prevState) => {
                        return !prevState;
                      });
                    }}
                    className={` form-check-input fs-5 my-auto checked ${
                      checkRefund && " "
                    }`}
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label text-start my-auto"
                    for="flexSwitchCheckChecked"
                  >
                    I have read and agree to all the terms of{" "}
                    <a
                      className="text-decoration-none text-primary"
                      href="/returnpolicy"
                    >
                      RETURN POLICY
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
              <h2 className="text-2xl font-bold text-teal-900">
                Country, State and City Selectors
              </h2>
              <br />
              <div className="flex flex-wrap gap-3 bg-teal-300 rounded-lg p-8">
                <div>
                  <p className="text-teal-800 font-semibold">Country :</p>
                  <Selector
                    data={countryData}
                    selected={country}
                    setSelected={setCountry}
                  />
                </div>
                {state && (
                  <div>
                    <p className="text-teal-800 font-semibold">State :</p>
                    <Selector
                      data={stateData}
                      selected={state}
                      setSelected={setState}
                    />
                  </div>
                )}
                {city && (
                  <div>
                    <p className="text-teal-800 font-semibold">City :</p>
                    <Selector data={cityData} selected={city} setSelected={setCity} />
                  </div>
                )}
              </div>
        </div> */}
      </div>
    </div>
  );
}
