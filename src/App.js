import "./App.css";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Footer from "./Components/Footer/Footer";

import CartContext from "./Contexts/CartContext";
import Profile from "./Components/Profile/Profile";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import AuthContext from "./Contexts/AuthContext";
import AuthDispatcherContext from "./Contexts/AuthDIspatcherContext";
import CurrencyContext from "./Contexts/CurrencyContext";
import Privacy from "./Pages/PrivacyAndPolicy/Privacy";
import Terms from "./Pages/TermsAndConds/Terms";
import Return from "./Pages/ReturnAndRefund/Return";
import Shipping from "./Pages/ShippingPolicy/Shipping";
import Wholesale from "./Pages/Wholesale/Wholesale";
import Joinus from "./Pages/Joinus/Joinus";
import ShippingPartners from "./Pages/FooterPages/ShippingPartners";
import PaymentMethod from "./Pages/FooterPages/PaymentMethod";
import About from "./Pages/FooterPages/About";
import Customize from "./Pages/Customize/Customize";
import Blog from "./Pages/Blog/Blog";
import Repair from "./Pages/Repair/Repair";
import UnderConst from "./Pages/Underconst/UnderConst";
import { PulseLoader } from "react-spinners";

import Offer from "./Pages/Offer/Offer";
import WholesaleHome from "./Pages/Wholesale/WholesaleHome";
import Guideme from "./Pages/GuideMe/Guideme";
import { GoogleOAuthProvider } from "@react-oauth/google";
import annotate from "./utils/annotate";
const Category = React.lazy(() => import("./Pages/Category/Category"));
const Navigation = React.lazy(() =>
  import("./Components/Navigation/Navigation")
);
const Checkout = React.lazy(() => import("./Pages/Checkout/Checkout"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const Signup = React.lazy(() => import("./Components/Signup/Signup"));
const ProductDetail = React.lazy(() =>
  import("./Components/ProductDetails/ProductDetails")
);
const FAQ = React.lazy(() => import("./Pages/FooterPages/FAQ"));
const CartDrawer = React.lazy(() => import("./Components/Drawer/CartDrawer"));

function App() {
  const [cartRenderer, setCartRenderer] = useState({});
  const [user, setUser] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  // console.log("Hello from App");
  useEffect(() => {
    if (localStorage.getItem("currency")) {
      setCurrency(localStorage.getItem("currency"));
    } else {
      localStorage.setItem("currency", "USD");
    }
    localStorage.setItem("fxrate", JSON.stringify({ usd: 1, bdt: 106 }));
    const token = Cookies.get("jwt");

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);
  const ref = useRef(null);
  useEffect(() => {
    annotate(ref.current);
  }, []);

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="116640610459-l774ctmgedtp501cjkvfrrklbrl4v2aj.apps.googleusercontent.com">
        <CartContext.Provider
          value={{
            setShowCartDrawer,
            showCartDrawer,
            setCartRenderer,
            cartRenderer,
          }}
        >
          <AuthContext.Provider value={{ user, setUser }}>
            <AuthDispatcherContext.Provider value={setUser}>
              <CurrencyContext.Provider value={{ currency, setCurrency }}>
                <Router>
                  <Suspense fallback={<PulseLoader />}>
                    <Navigation
                      renderer={cartRenderer}
                      currency={currency}
                      setCurrency={setCurrency}
                      // setShowCartDrawer={setShowCartDrawer}
                    />
                  </Suspense>

                  <Suspense fallback={<PulseLoader />}>
                    <CartDrawer
                      opened={showCartDrawer}
                      close={() => {
                        setShowCartDrawer(false);
                      }}
                    />
                  </Suspense>

                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          <Home />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/home"
                      element={
                        // <Suspense fallback={<PulseLoader />}>
                        // {" "}
                        <Home />
                        // </Suspense>
                      }
                    />
                    <Route
                      path="/catagory"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          {" "}
                          <Category />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/checkout"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          <Checkout />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/ProductDetails/:product"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          <ProductDetail
                            setCartRenderer={setCartRenderer}
                            cartRenderer={cartRenderer}
                          />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/faq"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          <FAQ />
                        </Suspense>
                      }
                    />
                    <Route path="/paymentMethod" element={<PaymentMethod />} />
                    <Route path="/about" element={<About />} />
                    <Route
                      path="/shippingPartner"
                      element={<ShippingPartners />}
                    />
                    <Route path="/joinus" element={<Joinus />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/repair" element={<Repair />} />
                    <Route path="/guideme" element={<Guideme />} />
                    <Route path="/offers" element={<Offer />} />
                    <Route path="/customize" element={<Customize />} />
                    <Route path="/wholesale" element={<Wholesale />} />
                    <Route path="/wholesalehome" element={<WholesaleHome />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/return" element={<Return />} />
                    <Route path="/shipping" element={<Shipping />} />
                    {/* <Route path="/aboutus" element={<Home />} /> */}
                    <Route
                      path="/login"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          {" "}
                          <Login />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/signup"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          {" "}
                          <Signup />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <Suspense fallback={<PulseLoader />}>
                          {" "}
                          <Profile />
                        </Suspense>
                      }
                    />
                  </Routes>

                  <Footer></Footer>
                </Router>
              </CurrencyContext.Provider>
            </AuthDispatcherContext.Provider>
          </AuthContext.Provider>
        </CartContext.Provider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
