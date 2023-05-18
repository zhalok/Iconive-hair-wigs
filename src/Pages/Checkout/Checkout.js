import React, { useContext, useEffect, useState } from "react";
import { City, Country, State } from "country-state-city";
import "./checkout.css";
import CartItem from "../../Components/CartItem/CartItem.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";
import AuthContext from "../../Contexts/AuthContext";
import currencyConverter from "../../utils/CurrencyChanger";

export default function Checkout(props) {
  const [cartItems, setCartItems] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(20);
  const [productTotal, setProductTotal] = useState(0);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [postalCode, setPostalCode] = useState("");
  const [currency, setCurrency] = useState("USD");

  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

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
      props.setCartRenderer({});
    }
  };

  const calculateTotal = async () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setProductTotal(total);
  };

  useEffect(() => {
    setCurrency(props.currency);
  }, [props?.currency]);

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setSelectedState(State.getStatesOfCountry(selectedCountry)[0].isoCode);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry) {
      setCity(City.getCitiesOfCountry(selectedCountry));

      setSelectedCity(City.getCitiesOfCountry(selectedCountry)[0].countryCode);
    }
  }, [selectedCountry]);

  useEffect(() => {
    setCountries((prev) => {
      return Country.getAllCountries();
    });
    setSelectedCountry(Country.getAllCountries()[0].isoCode);
  }, []);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  useEffect(() => {
    if (productTotal > 200) setDeliveryCharge(0);
  }, [productTotal]);

  useEffect(() => {
    const billing = localStorage.getItem("billingInfo");
    if (billing) {
      const billingInfo = JSON.parse(billing);
      setAddress(billingInfo.address);
      setName(billingInfo.name);
      setPhone(billingInfo.phone);
      setEmail(billingInfo.email);
      setAltPhone(billingInfo.altPhone);
      setPostalCode(billingInfo.postalCode);
    }
  }, []);

  const [checkRefund, setCheckRefund] = useState(true);

  const navigate = useNavigate();

  const checkout = async () => {
    const billingInfo = {
      name,
      phone,
      altPhone,
      address,
      email,
      address,
      country: Country.getCountryByCode(selectedCountry).name,
      city: selectedCity,
      state: selectedState,
      postalCode,
    };
    if (
      !name ||
      !phone ||
      !address ||
      !email ||
      !selectedCity ||
      !selectedCountry ||
      !postalCode
    ) {
      alert("FIll necessary informations");
      return;
    }

    const token = Cookies.get("jwt");
    if (!token) {
      localStorage.setItem("billingInfo", JSON.stringify(billingInfo));
      navigate("/login?proceeedToCheckout=true");
      return;
    }
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems = JSON.parse(cart);
      console.log("Cart Items", cartItems);
      if (cartItems.length == 0) {
        alert("Cart is empty");
        return;
      }

      try {
        setLoading(true);
        const orderResponse = await axios.post(
          "/order",
          {
            billingInfo,
            cartItems,
            currency: props.currency,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("jwt")}`,
            },
          }
        );

        setLoading(false);
        localStorage.removeItem("billingInfo");
        localStorage.removeItem("cart");
        const order = orderResponse.data;
        window.location.reload();

        // const paymentResponse = await axios.post(
        //   `/payment/create/${order._id}`,
        //   {},
        //   {
        //     headers: {
        //       Authorization: `Bearer ${Cookies.get("jwt")}`,
        //     },
        //   }
        // );

        // window.location.replace(paymentResponse.data.payment_url);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    } else {
      alert("Cart is empty");
    }
  };

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
              {!auth && (
                <div className="text-start mb-5">
                  <h4 className="mb-3">Already registered?</h4>
                  <button className="btn btn-dark rounded-0 px-4 fs-6">
                    <small>CLICK HERE TO LOGIN</small>
                  </button>
                </div>
              )}
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
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1 d-flex">
                      Phone Number <span className="spanRed"> *</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 px-2 rounded-0 border-1"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
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
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1">Alternative Phone Number</p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      value={altPhone}
                      onChange={(e) => {
                        setAltPhone(e.target.value);
                      }}
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
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-50 ">
                    <p className="text-start mb-1">
                      Country<span className="spanRed">*</span>
                    </p>

                    <select
                      className="w-100 h-75 px-2 rounded-0 border-1"
                      value={selectedCountry}
                      onChange={(e) => {
                        setSelectedCountry(e.target.value);
                      }}
                    >
                      {countries &&
                        countries.map((e) => {
                          return <option value={e.isoCode}>{e.name}</option>;
                        })}
                    </select>
                  </div>
                </div>

                <div className="d-flex pt-4 ">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>

                    <select
                      className="w-100 h-75 px-2rounded-0 border-1"
                      value={selectedCity}
                      onChange={(e) => {
                        setSelectedCity(e.target.value);
                      }}
                    >
                      {city.map((e) => {
                        return <option value={e.name}>{e.name}</option>;
                      })}
                    </select>
                  </div>

                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      State<span className="spanRed">*</span>
                    </p>

                    <select
                      className="w-100 h-75 px-2rounded-0 border-1"
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                      }}
                    >
                      {states.map((e) => {
                        return <option value={e.name}>{e.name}</option>;
                      })}
                    </select>
                  </div>
                </div>

                <div className="d-flex pt-4">
                  <div className="w-50 ">
                    <p className="text-start mb-1 mr-auto">
                      Postal Code<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      value={postalCode}
                      onChange={(e) => {
                        setPostalCode(e.target.value);
                      }}
                      className="w-100 h-75 px-2 rounded-0 border-1"
                    />
                  </div>
                </div>

                <div className="d-flex pt-4">
                  <div className="w-50 "></div>
                  <div className="w-50"></div>
                </div>

                {loading ? (
                  <PulseLoader />
                ) : (
                  <input
                    type="submit"
                    value="CHECKOUT"
                    className="border-0 btn-dark text-white px-5 py-3 my-5 w-100 pe-4"
                    onClick={(e) => {
                      e.preventDefault();
                      // console.log(cartItems);
                      checkout();
                      // console.log("hello");
                    }}
                  />
                )}
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
                      currency={currency}
                      price={card.price}
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
                  {currency != undefined ? (
                    <p>
                      {currency == "USD" ? "$" : "৳"}
                      {currencyConverter(currency, productTotal)}
                    </p>
                  ) : (
                    <PulseLoader />
                  )}
                </div>
                <div className="d-flex justify-content-between  my-2 border-2 border-bottom">
                  <h6 className="fw-bold">Subtotal </h6>
                  <p>
                    {currency == "USD" ? "$" : "৳"}
                    {currencyConverter(currency, deliveryCharge)}
                  </p>
                </div>
                <div className="d-flex justify-content-between  ">
                  <h5 className="fw-bold">Total </h5>
                  <p className="fw-bold">
                    {currency == "USD" ? "$" : "৳"}
                    {currencyConverter(
                      currency,
                      parseFloat(productTotal) + parseFloat(deliveryCharge)
                    )}
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
      </div>
    </div>
  );
}
