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
import CurrencyContext from "../../Contexts/CurrencyContext";
import CartContext from "../../Contexts/CartContext";

export default function Checkout(props) {
  const [cartItems, setCartItems] = useState(null);
  const [deliveryCharge, setDeliveryCharge] = useState(20 * 111);
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
  const [update, setUpdate] = useState({});
  const { cartRenderer, setCartRenderer } = useContext(CartContext);

  const auth = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);

  const calculateTotal = async () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setProductTotal(total);
  };

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
      // console.log(cartItems);
    }
  }, [cartRenderer]);

  useEffect(() => {
    if (cartItems && Array.isArray(cartItems)) {
      calculateTotal();
    }
  }, [cartItems, cartRenderer]);

  useEffect(() => {
    if (productTotal > 250 * parseFloat(process.env.REACT_APP_FX_RATE))
      setDeliveryCharge(0);
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
      postalCode: "123",
    };
    if (
      !name ||
      !phone ||
      !address ||
      !email ||
      !selectedCity ||
      !selectedCountry
    ) {
      alert("FIll necessary informations");
      return;
    }

    const token = Cookies.get("jwt");

    if (!token) {
      // alert("")
      localStorage.setItem("billingInfo", JSON.stringify(billingInfo));
      navigate("/login?proceeedToCheckout=true");
      return;
    }
    const cart = localStorage.getItem("cart");

    if (cart) {
      const cartItems = JSON.parse(cart);
      // console.log("Cart Items", cartItems);
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
            currency,
            deliveryCharge,
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
        // window.location.reload();

        const paymentResponse = await axios.post(
          `/payment/create/${order._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("jwt")}`,
            },
          }
        );

        window.location.replace(paymentResponse.data.payment_url);
      } catch (e) {
        setLoading(false);
        // console.log(e);
      }
    } else {
      alert("Cart is empty");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        {/* top image */}
        <div className="top-banner ">
          <div className="xyauto">
            <h3 className="big-txt text-dark">Checkout</h3>
            <p className="text-theme-gray sm-txt">Home / Checkout</p>
          </div>
        </div>

        {/* main section */}
        <div className="container py-md-5 ">
          <div className="row  shadow">
            <div className="col-12 col-md-8 p-4 ">
              {/* {!auth && ( */}
              {!auth && (
                <div className="text-start my-md-4  d-flex flex-column">
                  <h5 className="">Already registered?</h5>

                  <h5>
                    <a
                      className="text-decoration-none border-bottom border-dark pb-0 text-dark fw-bold "
                      href="/signup"
                    >
                      Login Here
                    </a>
                  </h5>
                </div>
              )}
              {/* )} */}
              <h4 className="text-dark text-start fw-bold mt-3 mt-md-0">
                Delivery Address
              </h4>
              <form action="" className="text-center pe-4">
                <div className="d-flex row me-0 py-2 pt-4">
                  <div className="col-12 col-md-6  pe-lg-4">
                    <p className="text-start mb-1">Name</p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
                    />
                  </div>
                  <div className="col-12 col-md-6 ">
                    <p className="text-start mb-1 mt-4 mt-md-0 d-flex">
                      Phone Number <span className="spanRed"> *</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex row me-0 py-2">
                  <div className="col-12 col-md-6 pe-lg-4">
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
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
                    />
                  </div>
                  <div className="col-12 col-md-6 ">
                    <p className="text-start mb-1 mt-4 mt-md-0">
                      Alternative Phone Number
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      value={altPhone}
                      onChange={(e) => {
                        setAltPhone(e.target.value);
                      }}
                      className="w-100 input-height  px-2 rounded-3 border-1 border-theme"
                    />
                  </div>
                </div>
                <div className="d-flex row me-0 py-2 ">
                  <div className="col-12 col-md-6 pe-lg-4">
                    <p className="text-start mb-1">
                      Address<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 ">
                    <p className="text-start mb-1 mt-4 mt-md-0">
                      Country<span className="spanRed">*</span>
                    </p>

                    <select
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
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

                <div className="d-flex row me-0 pt-3 pt-md-2 pb-2 ">
                  <div className="col-12 col-md-6 pe-lg-4">
                    <p className="text-start mb-1">
                      City<span className="spanRed">*</span>
                    </p>

                    <select
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
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

                  <div className="col-12 col-md-6">
                    <p className="text-start mb-1 mt-4 mt-md-0">
                      State<span className="spanRed">*</span>
                    </p>

                    <select
                      className="w-100 input-height px-2 rounded-3 border-1 border-theme"
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
                  <div className="w-50 "></div>
                  <div className="w-50"></div>
                </div>

                {loading ? (
                  <PulseLoader />
                ) : (
                  <input
                    type="submit"
                    value="CHECK OUT"
                    className="border-0 btn-theme-check text-white mx-auto my-4 w-50 "
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
            <div className="col-12 col-md-4 border-start p-4 ">
              <div>
                {/* {cartItems &&
                  cartItems.map((card, index) => (
                    <CartItem
                      id={card.product}
                      addOns={card.addons}
                      quantity={card.amount}
                      discardCartItem={discardCartItem}
                      setCartItems={setCartItems}
                      setProductTotal={setProductTotal}
                      // currency={currency}
                      price={card.price}
                      setUpdate={setUpdate}
                      setCartRenderer={setCartRenderer}
                    />
                  ))} */}
              </div>
              <div>
                <div className="w-100 hc-50 d-flex my-4">
                  <input
                    type="text"
                    name="cupone"
                    id="#cupone"
                    placeholder="Coupon Code "
                    className="w-75 h-100 px-2 rounded-0 border-1 border-theme "
                  />
                  <button className="w-25 h-100 btn btn-dark text-light rounded-0 border-1 border-dark">
                    APPLY
                  </button>
                </div>
                <div className="d-flex justify-content-between my-2 border-bottom">
                  <h6 className="fw-bold">Products </h6>
                  {
                    <p>
                      {currency == "USD" ? "$" : "৳"}
                      {currencyConverter(currency, productTotal)}
                    </p>
                  }
                </div>
                <div className="d-flex justify-content-between  my-2 border-2 border-bottom">
                  <h6 className="fw-bold">Delivery Charge </h6>
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
                <div className="form-check form-switch pt-5 flex ">
                  <input
                    onClick={() => {
                      setCheckRefund((prevState) => {
                        return !prevState;
                      });
                    }}
                    className={` form-check-input ps-3 fs-5  checked btnCheckUse ${
                      checkRefund && " "
                    }`}
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                  />
                  <label
                    className="form-check-label text-start my-auto "
                    for="flexSwitchCheckChecked"
                  >
                    I have read and agree to all the terms of{" "}
                    <a
                      className="text-decoration-none hoverBold text-theme-yellow"
                      href="/return"
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
