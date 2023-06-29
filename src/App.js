import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Category from "./Pages/Category/Category";
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
import CartDrawer from "./Components/Drawer/CartDrawer";

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
        value={{ setShowCartDrawer, showCartDrawer, setCartRenderer }}
      >
        <AuthContext.Provider value={{ user, setUser }}>
          <AuthDispatcherContext.Provider value={setUser}>
            <CurrencyContext.Provider value={{ currency, setCurrency }}>
              <Router>
                <Navigation
                  renderer={cartRenderer}
                  currency={currency}
                  setCurrency={setCurrency}
                  // setShowCartDrawer={setShowCartDrawer}
                />
                {/* <CartDrawer
                  opened={showCartDrawer}
                  close={() => {
                    setShowCartDrawer(false);
                  }}
                /> */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/catagory" element={<Category />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route
                    path="/ProductDetails/:product"
                    element={
                      // <CartContext.Provider value={cartRenderer}>
                      <ProductDetail
                        setCartRenderer={setCartRenderer}
                        cartRenderer={cartRenderer}
                      />
                      // </CartContext.Provider>
                    }
                  />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/return" element={<Return />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/aboutus" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/profile" element={<Profile />} />
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
