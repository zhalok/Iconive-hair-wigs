import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Navigation from "./Components/Navigation/Navigation";
// import Category from "./Pages/Category/Category";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import ProductDetail from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import CartContext from "./Contexts/CartContext";
import Profile from "./Components/Profile/Profile";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import AuthContext from "./Contexts/AuthContext";
import AuthDispatcherContext from "./Contexts/AuthDIspatcherContext";
// import Orders from "./Pages/Orders";
import CurrencyContext from "./Contexts/CurrencyContext";
import Privacy from "./Pages/PrivacyAndPolicy/Privacy";
import Terms from "./Pages/TermsAndConds/Terms";
import Return from "./Pages/ReturnAndRefund/Return";
import Shipping from "./Pages/ShippingPolicy/Shipping";
import Wholesale from "./Pages/Wholesale/Wholesale";
import Joinus from "./Pages/Joinus/Joinus";
import FAQ from "./Pages/FooterPages/FAQ";
import ShippingPartners from "./Pages/FooterPages/ShippingPartners";
import PaymentMethod from "./Pages/FooterPages/PaymentMethod";
import About from "./Pages/FooterPages/About";
import CartDrawer from "./Components/Drawer/CartDrawer";
import Customize from "./Pages/Customize/Customize";
import Blog from "./Pages/Blog/Blog";
import Repair from "./Pages/Repair/Repair";
import UnderConst from "./Pages/Underconst/UnderConst";
import { PulseLoader } from "react-spinners";

import Offer from "./Pages/Offer/Offer";
import WholesaleHome from "./Pages/Wholesale/WholesaleHome";

// const Home = React.lazy(() => import("./Pages/Home/Home"));
const Category = React.lazy(() => import("./Pages/Category/Category"));
const Navigation = React.lazy(() =>
  import("./Components/Navigation/Navigation")
);

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

  return (
    <div className="App">
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

                <CartDrawer
                  opened={showCartDrawer}
                  close={() => {
                    setShowCartDrawer(false);
                  }}
                />
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
                  <Route path="/guideme" element={<UnderConst />} />
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
    </div>
  );
}

export default App;
