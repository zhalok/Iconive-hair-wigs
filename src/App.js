import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Category from "./Pages/Category/Category";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
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

function App() {
  const [cartRenderer, setCartRenderer] = useState({});
  const [user, setUser] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    !localStorage.getItem("currency") &&
      localStorage.setItem("currency", "USD");
    localStorage.setItem("fxrate", JSON.stringify({ usd: 1, bdt: 106 }));
    const token = Cookies.get("jwt");

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser }}>
        <AuthDispatcherContext.Provider value={setUser}>
          <CurrencyContext.Provider value={{ currency, setCurrency }}>
            <Router>
              <Navigation
                renderer={cartRenderer}
                currency={currency}
                setCurrency={setCurrency}
              />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/catagory" element={<Category />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                  path="/ProductDetails/:product"
                  element={
                    // <CartContext.Provider value={cartRenderer}>
                    <ProductDetails setCartRenderer={setCartRenderer} />
                    // </CartContext.Provider>
                  }
                />
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
    </div>
  );
}

export default App;
