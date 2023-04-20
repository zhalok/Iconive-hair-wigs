import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Category from "./Pages/Category/Category";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContext from "./Contexts/CartContext";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import AuthContext from "./Contexts/AuthContext";
import Login from "./Pages/Authentication/Login";

function App() {
  const [cartRenderer, setCartRenderer] = useState({});
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);
  return (
    <div className="App">
      <AuthContext.Provider value={user}>
        <Router>
          <Navigation renderer={cartRenderer} />

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
          </Routes>

          <Footer></Footer>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
